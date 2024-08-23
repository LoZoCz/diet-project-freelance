import {
    BlockquoteProps,
    HeadingProps,
    LargeProps,
    ListEleProps,
    ListProps,
    ParaProps,
    SmallProps,
} from '@/lib/typoraphyTypes'
import { cn } from '@/lib/utils'

export function H1({ children, className, ...props }: HeadingProps) {
    return (
        <h1
            {...props}
            className={cn(
                'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
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
                'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
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
                'scroll-m-20 text-2xl font-semibold tracking-tight',
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
                'scroll-m-20 text-xl font-semibold tracking-tight',
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
        <p {...props} className={cn('leading-7', className)}>
            {children}
        </p>
    )
}

export function List({ children, className, ...props }: ListProps) {
    return (
        <ul {...props} className="my-6 ml-6 list-disc [&>li]:mt-2">
            {children}
        </ul>
    )
}

export function ListEle({ children, className, ...props }: ListEleProps) {
    return (
        <li {...props} className={cn('', className)}>
            {children}
        </li>
    )
}

export function Large({ children, className, ...props }: LargeProps) {
    return (
        <em {...props} className={cn('text-lg font-semibold', className)}>
            {children}
        </em>
    )
}

export function Small({ children, className, ...props }: SmallProps) {
    return (
        <small
            {...props}
            className={cn('text-sm font-medium leading-none', className)}
        >
            {children}
        </small>
    )
}

export function Blockquote({ children, className, ...props }: BlockquoteProps) {
    return (
        <blockquote
            {...props}
            className={cn('mt-6 border-l-2 pl-6 italic', className)}
        >
            {children}
        </blockquote>
    )
}
