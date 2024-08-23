import { HTMLProps, ReactNode } from 'react'

export interface HeadingProps extends HTMLProps<HTMLHeadingElement> {
    children: string | ReactNode
}

export interface ParaProps extends HTMLProps<HTMLParagraphElement> {
    children: string | ReactNode
}

export interface ListProps extends HTMLProps<HTMLUListElement> {
    children: ReactNode
}

export interface ListEleProps extends HTMLProps<HTMLLIElement> {
    children: string | ReactNode
}

export interface LargeProps extends HTMLProps<HTMLEmbedElement> {
    children: string | ReactNode
}

export interface SmallProps extends HTMLProps<HTMLSpanElement> {
    children: string | ReactNode
}

export interface BlockquoteProps extends HTMLProps<HTMLQuoteElement> {
    children: string | ReactNode
}
