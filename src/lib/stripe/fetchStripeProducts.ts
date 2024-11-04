import Stripe from 'stripe'
import { stripe } from './stripe'
import simplifyText from '../simplifyText'

async function createOrRetrievePaymentLink(
    product: Stripe.Product,
    priceId: string
) {
    try {
        if (product.metadata.paymentLink) {
            return product.metadata.paymentLink
        }

        const paymentLink = await stripe.paymentLinks.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            payment_method_types: ['card', 'blik'],
            phone_number_collection: { enabled: true },
            after_completion: {
                type: 'hosted_confirmation',
                hosted_confirmation: {
                    custom_message:
                        'Dziękujemy za zakup! Wiadomość e-mail została wysłana na twój adres.',
                },
            },
        })

        await stripe.products.update(product.id, {
            metadata: { paymentLink: paymentLink.url },
        })

        return paymentLink.url
    } catch (error) {
        console.error('Error creating or retrieving payment link:', error)
        throw error
    }
}

export async function fetchStripeProducts() {
    try {
        const products = await stripe.products.list({
            limit: 100,
        })

        const productDetails = await Promise.all(
            products.data.map(async (product: Stripe.Product) => {
                const defaultPriceId =
                    typeof product.default_price === 'string'
                        ? product.default_price
                        : product.default_price?.id

                if (!defaultPriceId) {
                    console.error(
                        `Product ${product.name} has no default price.`
                    )
                    return null
                }

                const price = await stripe.prices.retrieve(defaultPriceId)

                const unitAmount = price.unit_amount ?? 0

                const paymentLinkUrl = await createOrRetrievePaymentLink(
                    product,
                    price.id
                )

                return {
                    id: product.id,
                    name: product.name,
                    simpleName: simplifyText(product.name),
                    description: product.description,
                    image: product.images[0],
                    price: unitAmount / 100,
                    currency: price.currency,
                    paymentLink: paymentLinkUrl,
                }
            })
        )

        const result = productDetails.filter((detail) => detail !== null)

        return result
    } catch (error) {
        console.error('Error fetching products from Stripe:', error)
        throw error
    }
}
