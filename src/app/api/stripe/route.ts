import { Resend } from 'resend'
import Email, { EmailDiet } from '@/email/EmailDiet'
import React, { ReactElement } from 'react'
import { stripe } from '@/lib/stripe/stripe'
import getFileURL from '@/lib/firebase/getFileURL'
import simplifyText from '@/lib/simplifyText'
import EmailConsultation from '@/email/EmailConsultation'

const resend = new Resend(process.env.RESEND_API_KEY)

const endpointSecret = process.env.STRIPE_WEBHOOK_KEY as string

export const runtime = 'nodejs'

export async function POST(req: Request) {
    try {
        const sig = req.headers.get('stripe-signature') as string
        const rawBody = await req.text()

        let event

        try {
            event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret)
        } catch (err: any) {
            return new Response(`Webhook Error: ${err.message}`, {
                status: 400,
            })
        }

        if (event.type === 'checkout.session.completed') {
            const sessionWithLineItems =
                await stripe.checkout.sessions.retrieve(
                    (event.data.object as any).id,
                    { expand: ['line_items'] }
                )
            const lineItems = sessionWithLineItems.line_items

            if (!lineItems)
                return new Response('Internal Server Error', { status: 500 })

            try {
                const productName = lineItems.data[0].description
                const simpleText = simplifyText(productName as string)

                const customerEmail = (event.data.object as any)
                    .customer_details.email

                if (/konsultacja/i.test(simpleText)) {
                    const { error } = await resend.emails.send({
                        from: 'email@dietabezcudow.pl',
                        to: [customerEmail],
                        subject:
                            'Twója konsultacja została zamówiona - DietaBezCudów',
                        react: EmailConsultation({}) as ReactElement,
                    })

                    if (error) {
                        console.error('Błąd podczas wysyłania e-maila:', error)
                    }
                } else {
                    const downloadLink = await getFileURL(productName as string)

                    if (!downloadLink) {
                        throw new Error(
                            'Nie znaleziono pliku do pobrania dla produktu'
                        )
                    }

                    const { error } = await resend.emails.send({
                        from: 'email@dietabezcudow.pl',
                        to: [customerEmail],
                        subject: 'Twój zakupiony plan diety - DietaBezCudów',
                        react: EmailDiet({ downloadLink }) as ReactElement,
                    })

                    if (error) {
                        console.error('Błąd podczas wysyłania e-maila:', error)
                    }
                }
            } catch (error) {
                console.error('Błąd przy realizacji zamówienia:', error)
            }
        }

        return new Response(JSON.stringify({ received: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error('Błąd wewnętrzny serwera:', error)
        return new Response('Internal Server Error', { status: 500 })
    }
}
