'use client'

import Link from 'next/link'
import { FC, useState } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { pageLinks as headerLinks } from '@/lib/defaultValues'
import { IoApps } from 'react-icons/io5'

const Header: FC = () => {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    const toggleNavbar = () => {
        setOpen(!open)
        console.log('Toggled navbar:', open)
    }

    return (
        <header className="absolute left-0 right-0 top-0 z-50 flex h-header items-center justify-between gap-12 px-4 py-4 md:justify-start tablet:px-12">
            <Logo className="size-12 tablet:size-16" />
            <nav className="flex">
                <ul
                    className={cn(
                        'sm-mobile:grid-cols-2 sm-mobile:grid-rows-2 absolute left-4 right-4 top-[102%] grid grid-cols-1 grid-rows-4 items-center gap-8 rounded-md bg-popover p-2 md:static md:flex md:bg-transparent',
                        open ? 'grid' : 'hidden'
                    )}
                >
                    {headerLinks.map((link, id) => (
                        <li key={id}>
                            <Button
                                asChild
                                variant="default"
                                className={cn(
                                    'w-full bg-transparent hover:text-primary-foreground',
                                    (pathname !== '/' && 'text-foreground') ||
                                        (open && 'text-foreground'),
                                    pathname === link.href
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-transparent'
                                )}
                            >
                                <Link
                                    className="text-lg font-medium"
                                    href={link.href}
                                >
                                    {link.icon}
                                    {link.label}
                                </Link>
                            </Button>
                        </li>
                    ))}
                </ul>
                <Button
                    size="icon"
                    className="grid content-center p-2 md:hidden"
                    onClick={() => toggleNavbar()}
                >
                    <IoApps className="size-6" />
                </Button>
            </nav>
        </header>
    )
}

const Navbar = () => {
    const pathname = usePathname()

    return (
        <ul className="hidden items-center gap-8 md:flex">
            {headerLinks.map((link, id) => (
                <li key={id}>
                    <Button
                        asChild
                        variant="default"
                        className={cn(
                            'bg-transparent hover:text-primary-foreground',
                            pathname !== '/' && 'text-foreground',
                            pathname === link.href
                                ? 'bg-primary text-primary-foreground'
                                : 'bg-transparent'
                        )}
                    >
                        <Link className="text-lg font-medium" href={link.href}>
                            {link.label}
                        </Link>
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Header
