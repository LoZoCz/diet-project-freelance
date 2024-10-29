import Stripe from 'stripe'
import { stripe } from './stripe'

async function createOrRetrievePaymentLink(
    product: Stripe.Product,
    priceId: string
) {
    try {
        // Sprawdzamy, czy w metadanych produktu jest zapisany link płatności
        if (product.metadata.paymentLink) {
            return product.metadata.paymentLink // Jeśli link istnieje, zwracamy go
        }

        // Jeśli link nie istnieje, tworzymy nowy
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
                        'Dziękujemy za zakup! Twoja dieta została wysłana na podany adres e-mail.',
                },
            },
        })

        // Zapisujemy link w metadanych produktu, aby ponownie go użyć
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
        const products = await stripe.products.list()

        const productDetails = await Promise.all(
            products.data.map(async (product: Stripe.Product) => {
                // Sprawdzamy, czy product.default_price istnieje i jest stringiem
                const defaultPriceId =
                    typeof product.default_price === 'string'
                        ? product.default_price
                        : product.default_price?.id // Jeśli default_price jest obiektem, pobieramy jego ID

                if (!defaultPriceId) {
                    console.error(
                        `Product ${product.name} has no default price.`
                    )
                    return null
                }

                const price = await stripe.prices.retrieve(defaultPriceId)

                // Sprawdzamy, czy price.unit_amount istnieje
                const unitAmount = price.unit_amount ?? 0 // Ustawiamy 0, jeśli unit_amount jest null

                // Tworzymy lub pobieramy istniejący link płatniczy
                const paymentLinkUrl = await createOrRetrievePaymentLink(
                    product,
                    price.id
                )

                return {
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    image: product.images[0], // Pobieramy pierwsze zdjęcie z listy
                    price: unitAmount / 100, // Przeliczamy cenę
                    currency: price.currency,
                    paymentLink: paymentLinkUrl, // Zwracamy link do płatności
                }
            })
        )

        // Filtrujemy potencjalne null values
        return productDetails.filter((detail) => detail !== null)
    } catch (error) {
        console.error('Error fetching products from Stripe:', error)
        throw error
    }
}
