import CalcSection from '@/pagesLayout/CalcPage/CalcSection'
import ChangesSection from '@/pagesLayout/CalcPage/ChangesSection'
import TipsSection from '@/pagesLayout/CalcPage/TipsSection'
import UnderstandingSection from '@/pagesLayout/CalcPage/UnderstandingSection'

export default function Calculator() {
    return (
        <main className="container space-y-8">
            <CalcSection />
            <UnderstandingSection />
            <TipsSection />
            <ChangesSection />
        </main>
    )
}
