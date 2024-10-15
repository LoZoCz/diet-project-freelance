import type { Metadata } from 'next'
import '@/styles/globals.css'
import Header from '@/components/custom/Header'
import { Poppins as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'
import Footer from '@/components/custom/Footer'

const fontSans = FontSans({
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-sans',
})

export const metadata: Metadata = {
    title: 'DietaBezCudów',
    description: 'Dieta to nie cud, dieta to ciezka praca',
}

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
