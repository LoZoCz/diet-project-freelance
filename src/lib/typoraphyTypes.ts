import { BlockContent } from '@/sanity/types'
import { LinkProps } from 'next/link'
import { AnchorHTMLAttributes, HTMLProps, ReactNode } from 'react'

export type HeadingProps = HTMLProps<HTMLHeadingElement> & {
    children: string | ReactNode
}

export type ParaProps = HTMLProps<HTMLParagraphElement> & {
    children: string | ReactNode
}

export type ListProps = HTMLProps<HTMLUListElement> & {
    children: ReactNode
}

export type ListEleProps = HTMLProps<HTMLLIElement> & {
    children: string | ReactNode
}

export type LargeProps = HTMLProps<HTMLEmbedElement> & {
    children: string | ReactNode
}

export type SmallProps = HTMLProps<HTMLSpanElement> & {
    children: string | ReactNode
}

export type BlockquoteProps = HTMLProps<HTMLQuoteElement> & {
    children: string | ReactNode
}

export type InternalLinkProps = LinkProps & {
    children: ReactNode
    className?: string
}

export type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
}

export type FormatterProps = { value: BlockContent; className?: string }
