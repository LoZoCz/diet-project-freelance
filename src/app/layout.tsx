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
    title: {
        default: 'DietaBezCudów',
        template: '%s | DietaBezCudów',
    },
    metadataBase: new URL('https://www.dietabezcudow.pl'),
    keywords: [
        'dieta',
        'zdrowe odżywianie',
        'dieta bez cudów',
        'spersonalizowane diety',
        'dieta na odchudzanie',
        'dieta zdrowotna',
        'plany dietetyczne',
        'zdrowy styl życia',
        'kalkulator kalorii',
        'dieta dostosowana',
        'odchudzanie',
        'porady dietetyczne',
        'dieta na energię',
        'dieta wzmacniająca',
        'zdrowa dieta',
    ],
    openGraph: {
        description:
            'Witamy na stronie poświęconej zdrowiu, lepszemu samopoczuciu i świadomemu odżywianiu. Tworzymy spersonalizowane diety dostosowane do Twoich indywidualnych potrzeb, celów zdrowotnych i stylu życia. Wierzymy, że odpowiednio dobrana dieta to klucz do pełni energii, poprawy jakości życia i wsparcia organizmu w codziennym funkcjonowaniu.',
        images: [
            'https://img.freepik.com/darmowe-zdjecie/widok-z-gory-prawdziwa-piramida-zywieniowa_23-2150238931.jpg?t=st=1730045714~exp=1730049314~hmac=566d96d2b858a9da2015965eda6e788b4aa690e61a943a38e72f719440290deb&w=1380',
        ],
    },
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
