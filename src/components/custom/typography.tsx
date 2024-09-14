import {
    BlockquoteProps,
    ExternalLinkProps,
    HeadingProps,
    InternalLinkProps,
    LargeProps,
    ListEleProps,
    ListProps,
    ParaProps,
    SmallProps,
} from '@/lib/typoraphyTypes'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function H1({ children, className, ...props }: HeadingProps) {
    return (
        <h1
            {...props}
            className={cn(
                'scroll-m-20 text-4xl font-extrabold tracking-tight text-foreground lg:text-5xl',
                className
            )}
        >
            {children}
        </h1>
    )
}

export function H2({ children, className, ...props }: HeadingProps) {
    return (
        <h2
            {...props}
            className={cn(
                'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight text-foreground first:mt-0',
                className
            )}
        >
            {children}
        </h2>
    )
}

export function H3({ children, className, ...props }: HeadingProps) {
    return (
        <h3
            {...props}
            className={cn(
                'scroll-m-20 text-2xl font-semibold tracking-tight text-foreground',
                className
            )}
        >
            {children}
        </h3>
    )
}

export function H4({ children, className, ...props }: HeadingProps) {
    return (
        <h4
            {...props}
            className={cn(
                'scroll-m-20 text-xl font-semibold tracking-tight text-foreground',
                className
            )}
        >
            {children}
        </h4>
    )
}

export function P({ children, className, ...props }: ParaProps) {
    // somethign u can use in para: [&:not(:first-child)]:mt-6
    return (
        <p {...props} className={cn('leading-7 text-foreground', className)}>
            {children}
        </p>
    )
}

export function List({ children, className, ...props }: ListProps) {
    // somethign u can use in list: my-6 ml-6
    return (
        <ul {...props} className="ml-6 list-disc [&>li]:mt-2">
            {children}
        </ul>
    )
}

export function ListEle({ children, className, ...props }: ListEleProps) {
    return (
        <li {...props} className={cn('text-foreground', className)}>
            {children}
        </li>
    )
}

export function Large({ children, className, ...props }: LargeProps) {
    return (
        <strong
            {...props}
            className={cn('text-lg font-semibold text-foreground', className)}
        >
            {children}
        </strong>
    )
}

export function Small({ children, className, ...props }: SmallProps) {
    return (
        <small
            {...props}
            className={cn(
                'text-sm font-medium leading-none text-foreground',
                className
            )}
        >
            {children}
        </small>
    )
}

export function Blockquote({ children, className, ...props }: BlockquoteProps) {
    return (
        <blockquote
            {...props}
            className={cn(
                'mt-6 border-l-2 pl-6 italic text-foreground',
                className
            )}
        >
            {children}
        </blockquote>
    )
}

export const InternalLink: React.FC<InternalLinkProps> = ({
    href,
    children,
    className,
    ...props
}) => {
    return (
        <Link
            {...props}
            href={href}
            className={cn(
                'rounded-md font-medium text-foreground underline underline-offset-4 ring-offset-transparent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                className
            )}
        >
            {children}
        </Link>
    )
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({
    href,
    children,
    className,
    ...props
}) => {
    return (
        <a
            {...props}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
                'rounded-md font-medium text-foreground underline underline-offset-4 ring-offset-transparent transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                className
            )}
        >
            {children}
        </a>
    )
}
