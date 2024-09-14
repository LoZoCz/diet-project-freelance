import CalcSection from '@/components/custom/CalcPage/CalcSection'
import ChangesSection from '@/components/custom/CalcPage/ChangesSection'
import TipsSection from '@/components/custom/CalcPage/TipsSection'
import UnderstandingSection from '@/components/custom/CalcPage/UnderstandingSection'

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
