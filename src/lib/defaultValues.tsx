import { PiCheese, PiCarrot } from 'react-icons/pi'
import { TbMeat } from 'react-icons/tb'
import {
    IoPersonOutline,
    IoNewspaperOutline,
    IoHomeOutline,
    IoCalculatorOutline,
} from 'react-icons/io5'
import { PiForkKnife } from 'react-icons/pi'
import kidsDietImg from '@/../public/diety/DZIECI WEGE.jpg'
import sportDietImg from '@/../public/diety/BIEGACZKA 3000 KCAL.jpg'
import reductionDietImg from '@/../public/diety/REDUKCJA.jpg'
import glutenDietImg from '@/../public/diety/BEZ GLUTENU BEZMLECZNA.jpg'
import pregnancyDietImg from '@/../public/diety/DIETA CIĘŻARNA.jpg'
import alergyDietImg from '@/../public/diety/DIETA ALERGIA BIAŁKO KURZE.jpg'

export const homeContent = {
    hero: {
        title: {
            main: 'Dieta to nie',
            span: 'cud',
        },
        paragraph:
            'Odkryj, jak zrównoważone odżywianie może zmienić Twoje życie na lepsze. Nie szukaj magicznych rozwiązań – postaw na naukowo udowodnione metody, które przynoszą długotrwałe efekty. Dołącz do naszej społeczności i zainspiruj się zdrowymi nawykami, które pomogą Ci osiągnąć wymarzone cele.',
        cta: 'Odwiedź blog',
    },
    cards: [
        {
            title: 'Pełnowartościowe białko w diecie!',
            icon: (
                <TbMeat
                    size={90}
                    className="rounded-full border-2 border-primary p-2 text-primary"
                />
            ),
            description:
                'Białko jest kluczowe dla budowy mięśni i regeneracji organizmu. Wybieraj wysokiej jakości mięso, które dostarczy Ci niezbędnych aminokwasów i siły do działania na co dzień.',
        },
        {
            title: 'Moc świeżych warzyw i owoców w diecie!',
            icon: (
                <PiCarrot
                    size={90}
                    className="rounded-full border-2 border-primary p-2 text-primary"
                />
            ),
            description:
                'Warzywa i owoce to podstawa zdrowego odżywiania. Dostarczają witamin, minerałów i antyoksydantów, wspierając zdrowie i dodając energii. Wzbogać swoją dietę o te naturalne produkty, aby czuć się pełnym witalności.',
        },
        {
            title: 'Różnorodność serów - smak i zdrowie!',
            icon: (
                <PiCheese
                    size={90}
                    className="rounded-full border-2 border-primary p-2 text-primary"
                />
            ),
            description:
                'Sery to źródło wapnia i białka, które wzbogacą Twoje posiłki o niepowtarzalny smak. Odkryj szeroki wybór serów, które podkreślą charakter Twojej diety.',
        },
    ],
    about: {
        title: 'Dowiedz się więcej o mnie',
        paragraph:
            'Jestem pasjonatką zdrowego stylu życia i dietetyki, a moim celem jest wspieranie innych w osiąganiu ich celów zdrowotnych i sylwetkowych poprzez proste, ale skuteczne podejście do odżywiania. Wierzę, że kluczem do zdrowia jest dieta oparta na naturalnych, regionalnych produktach, które są dostępne na wyciągnięcie ręki. Moje plany żywieniowe są proste, ale radykalne w swojej skuteczności — eliminuję zbędne komplikacje, stawiając na prostotę i autentyczność w kuchni. Każdy zasługuje na zdrowe, smaczne jedzenie, które dostarcza energii i poprawia samopoczucie, bez zbędnych udziwnień.',
        cta: 'O mnie',
    },
    faq: {
        title: 'Pomocne pytania',
        content: [
            {
                title: 'Jakie rodzaje diet oferujesz?',
                content:
                    'Oferuję diety dostosowane do różnych potrzeb i celów, w tym diety redukcyjne, zdrowotne oraz wspierające treningi. Moje plany żywieniowe opierają się na prostych, regionalnych produktach, które są łatwo dostępne i naturalne.',
            },
            {
                title: 'Czy diety są dostosowane indywidualnie?',
                content:
                    'Tak, każdy plan dietetyczny jest opracowywany indywidualnie, z uwzględnieniem Twoich celów, preferencji kulinarnych oraz stanu zdrowia. Moje podejście to prostota i skuteczność, dlatego eliminuję zbędne komplikacje.',
            },
            {
                title: ' Jak długo trwa przygotowanie indywidualnej diety?',
                content:
                    'Czas potrzebny na przygotowanie planu diety wynosi zazwyczaj od 2 do 5 dni roboczych, w zależności od złożoności Twoich potrzeb. Chcę mieć pewność, że każdy plan jest dobrze dopracowany.',
            },
            {
                title: 'Czy mogę liczyć na wsparcie podczas stosowania diety?',
                content:
                    'Oczywiście! Oferuję stałe wsparcie i możliwość konsultacji na każdym etapie realizacji planu. Wspólnie omówimy Twoje postępy, a także wprowadzimy ewentualne modyfikacje, aby dieta była jak najbardziej efektywna.',
            },
        ],
    },
}

export const aboutContent = {
    title: 'Witajcie, mam na imię Alicja.',
    quote: '„Ludzie, którzy tracą czas czekając, aż zaistnieją najbardziej sprzyjające warunki, nigdy nic nie zdziałają. Najlepszy czas na działanie jest teraz!” - Mark Fisher',
    story: {
        title: 'Moja Historia',
        paragraphs: [
            'Jestem tutaj po to, aby pomóc każdemu z Was odnaleźć drogę do satysfakcjonującego stylu życia poprzez odpowiednio dostosowany model żywienia i oferuję moje wsparcie oraz indywidualne podejście. Swoją wiedzę poszerzoną o liczne kursy i szkolenia, uzupełnioną praktycznym doświadczeniem oraz pasją oferuję z całą odpowiedzialnością.',
            'Wierzę, że zdrowe odżywianie nie musi być skomplikowane ani kosztowne. Tworzę plany żywieniowe, które są proste w przygotowaniu z produktów ogólnodostępnych i nie obciążają budżetu, a jednocześnie pomagają osiągnąć zamierzone cele zdrowotne i sylwetkowe.',
            'Przeprowadzam skuteczne strategie dietetyczne dzieci i dorosłych ze spektrum Autyzmu.',
            'Dużą wagę przykładam do diagnostyki, jest to niezbędny element współpracy.',
        ],
    },
    offer: {
        title: 'Co Oferuję',
        tabs: [
            {
                title: 'Moje Podejście',
                value: 'approach',
            },
            {
                title: 'Specjalizacje',
                value: 'expertise',
            },
        ],
        first: {
            value: 'approach',
            content:
                'Wierzę, że zdrowe odżywianie nie musi być skomplikowane ani kosztowne. Tworzę plany żywieniowe, które są proste w przygotowaniu z produktów ogólnodostępnych i nie obciążają budżetu, a jednocześnie pomagają osiągnąć zamierzone cele zdrowotne i sylwetkowe.',
        },
        second: {
            value: 'expertise',
            content: [
                'Specjalizuję się w terapii chorób dietozależnych, zespołu metabolicznego, NAFLD i MASH, zaburzeń gospodarki węglowodanowo- insulinowej, hipoglikemii reaktywnej- poposiłkowej, insulinooporności i hiperinsulinemii, zaburzeń pracy tarczycy, Hashimoto, PCOS, chorób układu pokarmowego oraz jelit- Sibo, Imo, Sifo, Celiakii, ukończyłam kurs Psychodietetyki, pracuje z pacjentami z depresją i współistniejącą otyłością.',
            ],
        },
    },
    footer: [
        'Dziękuję za odwiedzenie mojej strony. Cieszę się, że mogę być częścią Twojej drogi do zdrowia!',
        'Skontaktujmy się i zacznijmy razem podróż do zdrowszej, szczęśliwszej wersji Ciebie.',
    ],
}

export const calcContent = {
    understanding: {
        paras: {
            title: 'Zrozumienie Kalorii',
            paragraphs: [
                'Kalorie to jednostki energii, które twoje ciało wykorzystuje do funkcjonowania. Liczba potrzebnych kalorii zależy od wielu czynników, w tym wieku, płci, wzrostu, wagi i poziomu aktywności.',
                'Utrzymanie zbilansowanego spożycia kalorii jest kluczowe dla kontroli wagi i ogólnego zdrowia. Zbyt mała liczba kalorii może prowadzić do niedoborów składników odżywczych, podczas gdy nadmiar kalorii może skutkować przyrostem masy ciała.',
            ],
        },
        list: {
            title: 'Korzyści z Zbilansowanej Diety',
            items: [
                'Poprawa poziomu energii i nastroju',
                'Lepsza kontrola wagi',
                'Zmniejszone ryzyko chorób przewlekłych',
                'Wzmocniona funkcja odpornościowa',
                'Poprawa trawienia i zdrowia jelit',
                'Lepsza jakość snu',
            ],
        },
    },
    tips: {
        title: 'Porady Dotyczące Zdrowego Odżywiania',
        content: [
            {
                title: 'Zbilansowane Posiłki',
                paragraph:
                    'Dąż do połączenia chudego białka, złożonych węglowodanów i zdrowych tłuszczów w każdym posiłku. Dodaj różnorodne kolorowe owoce i warzywa, aby zapewnić sobie szeroki zakres składników odżywczych.',
            },
            {
                title: 'Kontrola Porcji',
                paragraph:
                    'Używaj mniejszych talerzy, odmierzaj jedzenie i zwracaj uwagę na wielkość porcji. To pomoże ci uniknąć przejadania się, jednocześnie ciesząc się ulubionymi potrawami z umiarem.',
            },
            {
                title: 'Nawodnienie',
                paragraph:
                    'Pij dużo wody przez cały dzień. Czasem pragnienie może być mylone z głodem. Celuj w co najmniej 8 szklanek wody dziennie, a więcej, jeśli jesteś aktywny lub przebywasz w gorącym klimacie.',
            },
        ],
    },
    changes: {
        title: 'Wprowadzanie Zrównoważonych Zmian',
        paragraphs: [
            'Pamiętaj, że kluczem do zdrowego stylu życia jest wprowadzanie zrównoważonych zmian. Nie próbuj zmieniać całej swojej diety z dnia na dzień. Zacznij od małych, wykonalnych kroków i stopniowo je rozwijaj.',
            'Słuchaj swojego ciała i nie bądź zbyt surowy w stosunku do swoich celów kalorycznych. Czasami możesz sobie pozwolić na coś słodkiego – najważniejszy jest ogólny wzorzec odżywiania w dłuższym okresie czasu.',
            'Jeśli masz konkretne cele zdrowotne, warto skonsultować się z zarejestrowanym dietetykiem, który pomoże ci stworzyć spersonalizowany plan dostosowany do twojego stylu życia i preferencji.',
        ],
    },
}

export const pageLinks = [
    {
        label: 'Strona główna',
        icon: <IoHomeOutline className="mr-2 hidden size-6 sm-mobile:block" />,
        href: '/',
    },
    {
        label: 'O mnie',
        icon: (
            <IoPersonOutline className="mr-2 hidden size-6 sm-mobile:block" />
        ),
        href: '/about',
    },
    {
        label: 'Kalkulator kaloryczny',
        icon: (
            <IoCalculatorOutline className="mr-2 hidden size-6 sm-mobile:block" />
        ),
        href: '/calc',
    },
    {
        label: 'Blog',
        icon: (
            <IoNewspaperOutline className="mr-2 hidden size-6 sm-mobile:block" />
        ),
        href: '/blog',
    },
    {
        label: 'Diety',
        icon: <PiForkKnife className="mr-2 hidden size-6 sm-mobile:block" />,
        href: '/diets',
    },
]

export const dietPackages = [
    {
        title: 'Zdrowy Start dla Dzieci',
        description: 'Zbilansowana dieta dla dzieci w wieku 5-12 lat',
        price: 79.99,
        image: kidsDietImg,
        badge: 'Dla Dzieci',
        link: 'https://buy.stripe.com/test_3cs5n011J1FZaCkfYY',
    },
    {
        title: 'Paliwo dla Aktywnych Nastolatków',
        description:
            'Dieta bogata w składniki odżywcze dla aktywnych nastolatków w wieku 13-19 lat',
        price: 89.99,
        image: sportDietImg,
        badge: 'Dla Nastolatków',
        link: 'https://buy.stripe.com/test_bIY2aObGnbgz25O8wx',
    },
    {
        title: 'Zastrzyk Witalności dla Dorosłych',
        description:
            'Kompleksowy plan dietetyczny dla dorosłych w wieku 20-40 lat',
        price: 99.99,
        image: reductionDietImg,
        badge: 'Dla Dorosłych',
        link: 'https://buy.stripe.com/test_8wM7v88ubckD39S4gi',
    },
    {
        title: 'Dobre Samopoczucie dla Seniorów',
        description: 'Dostosowana dieta dla dorosłych 60+',
        price: 94.99,
        image: glutenDietImg,
        badge: 'Dla Seniorów',
        link: 'https://buy.stripe.com/test_fZebLo6m3doHh0I5kn',
    },
    {
        title: 'Odżywianie w Ciąży',
        description: 'Niezbędne składniki odżywcze dla przyszłych mam',
        price: 109.99,
        image: pregnancyDietImg,
        badge: 'Dla Ciężarnych',
        link: 'https://buy.stripe.com/test_aEUdTwaCjesL9yg28c',
    },
    {
        title: 'Wydajność dla Sportowców',
        description:
            'Dieta wysokokaloryczna dla sportowców i miłośników fitnessu',
        price: 119.99,
        image: alergyDietImg,
        badge: 'Dla Sportowców',
        link: 'https://buy.stripe.com/test_fZe02G7q7fwP6m48wB',
    },
]
