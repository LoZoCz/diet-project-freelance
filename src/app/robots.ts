import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    const baseUrl = 'https://www.dietabezcudow.pl'

    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/blog', '/calc', '/about'],
            disallow: ['/terms'],
        },
        sitemap: baseUrl,
    }
}
