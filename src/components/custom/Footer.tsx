import { FC } from 'react'
import Logo from './Logo'
import { pageLinks as footerLinks, socialsContact } from '@/lib/defaultValues'
import Link from 'next/link'
import { P } from './typography'

const Footer: FC = () => {
    return (
        <footer className="tablet:justify-between tablet:items-start flex w-full flex-wrap items-center justify-center gap-8 bg-secondary p-8 text-secondary-foreground">
            <Logo withName logoSize={64} />
            <div className="flex flex-wrap gap-12">
                <div className="space-y-4">
                    <P className="font-bold">Kontakt</P>
                    <ul className="flex items-center gap-4">
                        {socialsContact.map((link, id) => (
                            <li key={id}>
                                <Link
                                    className="text-md font-medium"
                                    href={link.href}
                                >
                                    {link.icon}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="space-y-4">
                    <P className="font-bold">Podstrony</P>
                    <ul className="flex flex-col gap-2">
                        {footerLinks.map((link, id) => (
                            <li key={id}>
                                <Link
                                    className="text-md font-medium"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
