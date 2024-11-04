import {
    Html,
    Head,
    Body,
    Container,
    Section,
    Img,
    Heading,
    Text,
    Hr,
    Link,
    Tailwind,
} from '@react-email/components'
import { FC } from 'react'

type EmailProps = {
    downloadLink: string
}

export const EmailDiet: FC<EmailProps> = ({ downloadLink }) => {
    return (
        <Tailwind>
            <Html>
                <Head />
                <Body className="bg-white font-sans">
                    <Container className="mx-auto max-w-xl p-4">
                        <Img
                            src="https://firebasestorage.googleapis.com/v0/b/dietabezcudow-pdf.appspot.com/o/iconImage.png?alt=media&token=10a58834-040c-450e-878f-9620bfc08491"
                            alt="Logo DietaBezCudów"
                            width="50"
                            height="50"
                            className="mx-auto mb-4"
                        />
                        <Heading className="mb-6 text-center text-2xl font-bold text-gray-700">
                            DietaBezCudów
                        </Heading>
                        <Text className="mb-4 text-base text-gray-800">
                            Drogi kliencie,
                        </Text>
                        <Text className="mb-4 text-base text-gray-800">
                            Dziękujemy za zakup spersonalizowanej diety.
                            Cieszymy się, że zdecydowałeś się postawić na
                            zdrowie z naszą pomocą!
                        </Text>
                        <Section className="my-6 rounded-lg bg-gray-100 p-4">
                            <Text className="m-0 text-base text-gray-800">
                                Twoja dieta jest gotowa! Poniżej znajduje się
                                link do pobrania diety.
                            </Text>
                            <Link
                                download
                                href={downloadLink}
                                className="mx-auto mt-3 block text-center text-lg text-primary underline"
                            >
                                Pobierz dietę
                            </Link>
                        </Section>
                        <Heading
                            as="h2"
                            className="mb-4 mt-8 border-b-2 border-gray-300 pb-2 text-xl font-semibold text-gray-700"
                        >
                            Kilka porad na start:
                        </Heading>
                        <ul className="mb-6 list-disc pl-5">
                            <li className="mb-2 text-base text-gray-800">
                                Pamiętaj o regularnym piciu wody
                            </li>
                            <li className="mb-2 text-base text-gray-800">
                                Staraj się jeść posiłki o stałych porach
                            </li>
                            <li className="mb-2 text-base text-gray-800">
                                W razie pytań, nie wahaj się z nami skontaktować
                            </li>
                        </ul>
                        <Hr className="my-6 border-gray-300" />
                        <Text className="mb-1 text-center text-sm text-gray-600">
                            DietaBezCudów
                        </Text>
                        <Text className="mb-1 text-center text-sm text-gray-600">
                            Tel: 733 793 555 | Email: dietabezcudow@o2.pl
                        </Text>
                        <Link
                            href="https://www.dietabezcudow.pl"
                            className="block text-center text-sm text-gray-700 underline"
                        >
                            www.dietabezcudow.pl
                        </Link>
                    </Container>
                </Body>
            </Html>
        </Tailwind>
    )
}

export default EmailDiet
