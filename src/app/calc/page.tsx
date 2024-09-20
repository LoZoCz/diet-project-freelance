import CalcSection from '@/layouts/CalcPage/CalcSection'
import ChangesSection from '@/layouts/CalcPage/ChangesSection'
import TipsSection from '@/layouts/CalcPage/TipsSection'
import UnderstandingSection from '@/layouts/CalcPage/UnderstandingSection'

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
