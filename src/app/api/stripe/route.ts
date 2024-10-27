import { Resend } from 'resend'
import Email from '@/email/Email'
import { ReactElement } from 'react'
import { stripe } from '@/lib/stripe'

const resend = new Resend(process.env.RESEND_API_KEY)

const endpointSecret = process.env.STRIPE_WEBHOOK_KEY as string

export const runtime = 'nodejs'

export async function POST(req: Request) {
    try {
        console.log('req.headers', req.headers)

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

        console.log('event.type', JSON.stringify(event.type))

        if (event.type === 'checkout.session.completed') {
            const sessionWithLineItems =
                await stripe.checkout.sessions.retrieve(
                    (event.data.object as any).id,
                    {
                        expand: ['line_items'],
                    }
                )
            const lineItems = sessionWithLineItems.line_items

            if (!lineItems)
                return new Response('Internal Server Error', {
                    status: 500,
                })

            try {
                // Save the data, change customer account info, etc
                console.log('Fullfill the order with custom logic')
                console.log('data', lineItems.data)
                console.log(
                    'customer email',
                    (event.data.object as any).customer_details.email
                )
                console.log('created', (event.data.object as any).created)

                const { data, error } = await resend.emails.send({
                    from: 'email@dietabezcudow.pl',
                    to: [(event.data.object as any).customer_details.email],
                    subject: 'Twój zakupiony plan diety - DietaBezCudów',
                    react: Email({}) as ReactElement,
                })

                if (error) {
                    return console.error({ error })
                }

                console.log({ data })
            } catch (error) {
                console.log("Handling when you're unable to save an order")
            }
        }

        return new Response(JSON.stringify({ received: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        })
    } catch (error) {
        console.error(error)
        return new Response('Internal Server Error', { status: 500 })
    }
}
