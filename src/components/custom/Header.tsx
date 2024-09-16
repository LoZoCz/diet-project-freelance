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
    }

    return (
        <header
            className={cn(
                'absolute left-0 right-0 top-0 z-50 flex h-header items-center justify-between gap-6 px-4 py-4 tablet:justify-start tablet:gap-12 tablet:px-12',
                pathname !== '/' ? 'relative' : 'absolute'
            )}
        >
            <Logo className="size-12 tablet:size-16" />
            <nav className="flex">
                <ul
                    className={cn(
                        'absolute left-4 right-4 top-[102%] grid grid-cols-1 grid-rows-4 items-center gap-4 rounded-md bg-popover p-2 shadow-md outline outline-1 outline-primary sm-mobile:grid-cols-2 sm-mobile:grid-rows-2 tablet:static tablet:flex tablet:gap-8 tablet:bg-transparent tablet:shadow-none tablet:outline-none',
                        open ? 'grid' : 'hidden'
                    )}
                >
                    {headerLinks.map((link, id) => (
                        <li key={id}>
                            <Button
                                asChild
                                variant="default"
                                onClick={() => toggleNavbar()}
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
                    className="grid content-center p-2 tablet:hidden"
                    onClick={() => toggleNavbar()}
                >
                    <IoApps className="size-6" />
                </Button>
            </nav>
        </header>
    )
}

export default Header
