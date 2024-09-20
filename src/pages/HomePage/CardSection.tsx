import { HTMLProps, FC, ReactNode } from 'react'
import { H2, P } from '../../components/custom/Typography'
import { cn } from '@/lib/utils'
import { homeContent } from '@/lib/defaultValues'

const CardSection: FC = () => {
    return (
        <section className="container flex w-full flex-col place-items-center gap-6 px-4 tablet:flex-row">
            {homeContent.cards.map((card, id) => (
                <CardElement key={id}>
                    {card.icon}
                    <div className="z-30">
                        <H2 className="lg: border-none text-2xl xl:text-3xl">
                            {card.title}
                        </H2>
                        <P>{card.description}</P>
                    </div>
                </CardElement>
            ))}
        </section>
    )
}

interface CardElementProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode
}

const CardElement: FC<CardElementProps> = ({
    children,
    className,
    ...props
}) => {
    return (
        <div
            {...props}
            className={cn(
                'custom-border relative flex flex-1 flex-col items-center justify-center gap-6 rounded-3xl bg-emerald-100 p-6 tablet:min-h-[25rem]',
                className
            )}
        >
            {children}
        </div>
    )
}

export default CardSection
