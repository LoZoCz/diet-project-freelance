import CalcSection from '@/pages/CalcPage/CalcSection'
import ChangesSection from '@/pages/CalcPage/ChangesSection'
import TipsSection from '@/pages/CalcPage/TipsSection'
import UnderstandingSection from '@/pages/CalcPage/UnderstandingSection'

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
