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

export const Email: React.FC = () => {
    return (
        <Tailwind>
            <Html>
                <Head />
                <Body className="bg-white font-sans">
                    <Container className="mx-auto max-w-xl p-4">
                        <Img
                            src="https://fvjxvgvxhqpxvvbqhseo.supabase.co/storage/v1/object/public/logos/logo.png"
                            alt="Logo DietaBezCudów"
                            width="150"
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
                                Twoja dieta jest gotowa! Znajdziesz ją w
                                załączniku do tego e-maila.
                            </Text>
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

export default Email
