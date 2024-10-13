import { H1, H2, H3, P } from '@/components/custom/typography'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Terms() {
    return (
        <main className="min-h-screen">
            <div className="container mx-auto px-4">
                <H1 className="text-3xl font-bold">
                    Terms of Service & Privacy Policy
                </H1>
                <P className="mt-2">
                    Important information about your rights and our obligations
                </P>
            </div>
            <div className="container mx-auto px-4 py-8">
                <Tabs defaultValue="terms" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="terms">
                            Terms of Service
                        </TabsTrigger>
                        <TabsTrigger value="privacy">
                            Privacy Policy (GDPR)
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="terms">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <H2 className="mb-4 text-2xl font-bold">
                                Terms of Service
                            </H2>
                            <div>
                                <div className="space-y-4">
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            1. Acceptance of Terms
                                        </H3>
                                        <P>
                                            By accessing and using our diet
                                            planning services, you agree to be
                                            bound by these Terms of Service, all
                                            applicable laws and regulations, and
                                            agree that you are responsible for
                                            compliance with any applicable local
                                            laws.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            2. Use License
                                        </H3>
                                        <P>
                                            Permission is granted to temporarily
                                            download one copy of the materials
                                            (information or software) on our
                                            website for personal, non-commercial
                                            transitory viewing only. This is the
                                            grant of a license, not a transfer
                                            of title.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            3. Disclaimer
                                        </H3>
                                        <P>
                                            The materials on our website are
                                            provided on an &apos;as is&apos;
                                            basis. We make no warranties,
                                            expressed or implied, and hereby
                                            disclaim and negate all other
                                            warranties including, without
                                            limitation, implied warranties or
                                            conditions of merchantability,
                                            fitness for a particular purpose, or
                                            non-infringement of intellectual
                                            property or other violation of
                                            rights.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            4. Limitations
                                        </H3>
                                        <P>
                                            In no event shall our company or our
                                            suppliers be liable for any damages
                                            (including, without limitation,
                                            damages for loss of data or profit,
                                            or due to business interruption)
                                            arising out of the use or inability
                                            to use the materials on our website.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            5. Revisions and Errata
                                        </H3>
                                        <P>
                                            The materials appearing on our
                                            website could include technical,
                                            typographical, or photographic
                                            errors. We do not warrant that any
                                            of the materials on our website are
                                            accurate, complete or current.
                                        </P>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                    <TabsContent value="privacy">
                        <div className="rounded-lg bg-white p-6 shadow-md">
                            <H2 className="mb-4 text-2xl font-bold">
                                Privacy Policy (GDPR Compliant)
                            </H2>
                            <div>
                                <div className="space-y-4 text-green-900">
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            1. Data Controller
                                        </H3>
                                        <P>
                                            Our company acts as the data
                                            controller for personal information
                                            collected through our website and
                                            services.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            2. Personal Data We Collect
                                        </H3>
                                        <P>
                                            We may collect and process the
                                            following personal data: name, email
                                            address, physical address, phone
                                            number, and dietary preferences.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            3. Purpose of Data Processing
                                        </H3>
                                        <P>
                                            We process your personal data to
                                            provide our diet planning services,
                                            improve our offerings, and
                                            communicate with you about our
                                            products and services.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            4. Legal Basis for Processing
                                        </H3>
                                        <P>
                                            We process your personal data based
                                            on your consent and for the
                                            performance of a contract to which
                                            you are a party.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            5. Data Retention
                                        </H3>
                                        <P>
                                            We will retain your personal data
                                            only for as long as necessary to
                                            fulfill the purposes for which it
                                            was collected and to comply with
                                            applicable laws.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            6. Your Rights
                                        </H3>
                                        <P>
                                            Under GDPR, you have the right to
                                            access, rectify, erase, restrict
                                            processing, object to processing,
                                            and data portability. You also have
                                            the right to withdraw consent at any
                                            time.
                                        </P>
                                    </section>
                                    <section>
                                        <H3 className="mb-2 text-xl font-semibold">
                                            7. Data Security
                                        </H3>
                                        <P>
                                            We implement appropriate technical
                                            and organizational measures to
                                            ensure a level of security
                                            appropriate to the risk of
                                            processing your personal data.
                                        </P>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </main>
    )
}
