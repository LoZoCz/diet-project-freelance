import { PortableText, PortableTextComponents } from 'next-sanity'
import {
    Blockquote,
    H1,
    H2,
    H3,
    H4,
    Italic,
    Large,
    List,
    P,
} from './Typography'
import { ExternalLink } from 'lucide-react'
import { SanityImage } from './SanityImage'
import { FormatterProps } from '@/lib/typoraphyTypes'
import { cn } from '@/lib/utils'

const textSerializers: PortableTextComponents = {
    block: {
        h1: ({ children }) => <H1>{children}</H1>,
        h2: ({ children }) => <H2>{children}</H2>,
        h3: ({ children }) => <H3>{children}</H3>,
        h4: ({ children }) => <H4>{children}</H4>,
        normal: ({ children }) => <P>{children}</P>,
        blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
    },
    marks: {
        link: ({ children, value }) => (
            <ExternalLink href={value.href}>{children}</ExternalLink>
        ),
        strong: ({ children }) => <Large>{children}</Large>,
        italic: ({ children }) => <Italic>{children}</Italic>,
    },
    list: {
        bullet: ({ children }) => <List>{children}</List>,
    },
    types: {
        image: ({ value }) => <SanityImage image={value} />,
    },
}

const Formatter = ({ value, className }: FormatterProps) => {
    return (
        <article className={cn('space-y-4', className)}>
            <PortableText value={value} components={textSerializers} />
        </article>
    )
}

export default Formatter
