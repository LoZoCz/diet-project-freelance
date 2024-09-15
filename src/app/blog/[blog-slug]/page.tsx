import { H1, P } from '@/components/custom/typography'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Image from 'next/image'

interface PostPageProps {
    params: {
        slug: string
    }
}

const post = {
    title: '5 Proven Benefits of a Plant-Based Diet',
    date: 'Aug 23, 2024',
    image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfDB8MHx8fDI%3D',
    isDraft: true,
    slug: '5-proven-benefits-of-a-plant-based-diet',
    content: `A plant-based diet has been widely praised for its health benefits. From improving heart health to boosting your immune system, switching to a diet rich in fruits, vegetables, and legumes can be a game-changer for your well-being. In this article, we’ll dive into the top five proven benefits of a plant-based diet. 
    Whether you're looking to reduce your risk of chronic diseases, increase energy levels, or improve digestion, a plant-based lifestyle can offer significant health improvements. Learn how simple dietary changes can promote longevity, better mood regulation, and overall vitality. Balancing your intake of macronutrients—proteins, fats, and carbohydrates—is essential for optimal health.
    Each of these nutrients plays a vital role in maintaining your body’s function and energy levels. In this post, we'll explore how you can create meals that provide the right balance of macronutrients. Whether you are aiming for muscle growth, weight loss, or just maintaining energy throughout the day, understanding how to adjust your macronutrient ratios can make a huge difference.
    Learn simple strategies to get more out of the food you eat, and tips for adjusting your diet based on your personal health goals.`,
}

export default function PostPage({ params }: PostPageProps) {
    const { slug } = params
    console.log(slug) // Use the slug to fetch the blog post data from a database or API

    return (
        <main className="min-h-section space-y-6">
            <section className="relative">
                <div className='relative after:absolute after:inset-0 after:bg-primary/50 after:content-[""]'>
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={1920}
                        height={400}
                        className="h-96 w-full object-cover"
                    />
                </div>
                <div className="max-w-blog container absolute inset-x-0 bottom-6 space-y-4">
                    <H1 className="text-primary-foreground">{post.title}</H1>
                    <div className="flex items-center gap-4">
                        <Avatar className="size-16 overflow-hidden rounded-full">
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                alt="@shadcn"
                            />
                            <AvatarFallback className="text-primary-foreground">
                                CN
                            </AvatarFallback>
                        </Avatar>
                        <P className="text-primary-foreground">asdfghj</P>
                        <P className="text-primary-foreground">{post.date}</P>
                    </div>
                    <div className="">
                        <Badge className="text-primary-foreground">Draft</Badge>
                    </div>
                </div>
            </section>
            <article className="max-w-blog container">
                <P>{post.content}</P>
            </article>
        </main>
    )
}
