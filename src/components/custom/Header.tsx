'use client'

import Link from 'next/link'
import { FC } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { pageLinks as headerLinks } from '@/lib/defaultValues'

const Header: FC = () => {
    const pathname = usePathname()

    return (
        <header className="tablet:px-12 absolute left-0 right-0 top-0 z-50 flex h-header items-center gap-12 px-4 py-4">
            <Logo className="tablet:size-16 size-12" />
            <nav className="hidden md:block">
                <ul className="flex items-center gap-8">
                    {headerLinks.map((link, id) => (
                        <li key={id}>
                            <Button
                                asChild
                                variant="default"
                                className={cn(
                                    'bg-transparent hover:text-primary-foreground',
                                    pathname === link.href
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-transparent'
                                )}
                            >
                                <Link
                                    className="text-lg font-medium"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
