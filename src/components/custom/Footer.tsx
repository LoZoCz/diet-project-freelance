import { FC } from 'react'
import Logo from './Logo'
import { pageLinks as footerLinks, socialsContact } from '@/lib/defaultValues'
import { ExternalLink, InternalLink, P } from './Typography'

const Footer: FC = () => {
    return (
        <footer className="mt-12 w-full bg-secondary">
            <div className="container flex flex-wrap items-center justify-center gap-8 px-4 py-8 text-secondary-foreground tablet:items-start tablet:justify-between">
                <Logo withName logoSize={64} />
                <div className="flex flex-wrap gap-12">
                    <div className="space-y-4">
                        <P className="font-bold">Kontakt</P>
                        <ul className="flex items-center gap-4">
                            {socialsContact.map((link, id) => (
                                <li key={id}>
                                    <ExternalLink href={link.href}>
                                        {link.icon}
                                    </ExternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <P className="font-bold">Podstrony</P>
                        <ul className="flex flex-col gap-2">
                            {footerLinks.map((link, id) => (
                                <li key={id}>
                                    <InternalLink href={link.href}>
                                        {link.label}
                                    </InternalLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
