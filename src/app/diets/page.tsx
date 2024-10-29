import DietsBanner from '@/pagesLayout/DietsPage/DietsBanner'
import DietTitle from '@/pagesLayout/DietsPage/DietTitle'
import DietImgDesc from '@/pagesLayout/DietsPage/DietImgDesc'
import DietPriceBtn from '@/pagesLayout/DietsPage/DietPriceBtn'
import { fetchStripeProducts } from '@/lib/stripe/fetchStripeProducts'

export default async function Diets() {
    const products = await fetchStripeProducts()

    return (
        <section className="min-h-screen">
            <DietsBanner />
            <article className="container mx-auto grid grid-cols-1 gap-12 px-4 py-8 md:grid-cols-2 lg:grid-cols-4">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-lg"
                    >
                        <DietTitle title={product.name} />

                        <DietImgDesc
                            title={product.name}
                            image={product.image}
                            description={product.description}
                        />

                        <DietPriceBtn
                            link={product.paymentLink}
                            price={`${product.price} ${product.currency}`}
                        />
                    </div>
                ))}
            </article>
        </section>
    )
}
