import { FC } from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import TermsServices from './TermsServices'
import TermsPrivacy from './TermsPrivacy'

const TermsSection: FC = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <Tabs defaultValue="terms" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="terms">
                        Postanowienia ogólne
                    </TabsTrigger>
                    <TabsTrigger value="privacy">Zasady RODO</TabsTrigger>
                </TabsList>
                <TermsServices />
                <TermsPrivacy />
            </Tabs>
        </div>
    )
}

export default TermsSection
