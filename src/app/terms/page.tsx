import { H1, P } from '@/components/custom/typography'
import TermsBanner from '@/pagesLayout/TermsPage/TermsBanner'
import TermsSection from '@/pagesLayout/TermsPage/TermsSection'

export default function Terms() {
    return (
        <main className="min-h-screen">
            <TermsBanner />
            <TermsSection />
        </main>
    )
}
