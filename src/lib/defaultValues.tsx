import { PiCheese, PiCarrot } from 'react-icons/pi'
import { TbMeat } from 'react-icons/tb'
import {
    IoLogoInstagram,
    IoLogoFacebook,
    IoMail,
    IoPersonOutline,
    IoNewspaperOutline,
    IoHomeOutline,
    IoCalculatorOutline,
} from 'react-icons/io5'
import { P } from '@/components/custom/typography'

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
    title: 'Cześć, nazywam się Jane!',
    quote: '"Niech pożywienie będzie twoim lekarstwem, a lekarstwo pożywieniem."&quot;" - Hipokrates',
    story: {
        title: 'Moja Historia',
        paragraphs: [
            'Witaj w moim małym zakątku internetu! Nazywam się Jane i jestem pasjonatką zdrowego żywienia oraz zdrowego stylu życia. Moja przygoda z dietetyką zaczęła się, gdy byłam nastolatką zmagającą się z własnymi problemami zdrowotnymi. Dzięki odpowiedniemu odżywianiu zmieniłam swoje życie, a teraz chcę pomagać innym zrobić to samo.',
            'Z ponad dziesięcioletnim doświadczeniem miałam zaszczyt współpracować z setkami klientów, z których każdy miał swoją unikalną historię i cele. Od zapracowanych profesjonalistów szukających więcej energii po sportowców dążących do szczytowej formy – na własne oczy widziałam, jak odpowiednie żywienie może zmienić życie.',
            'Kiedy nie układam spersonalizowanych planów żywieniowych lub nie zagłębiam się w najnowsze badania dotyczące żywienia, można mnie znaleźć eksperymentującą z nowymi przepisami w kuchni, pielęgnującą mój mały warzywny ogródek lub wędrującą po pięknych szlakach w okolicy mojego domu. Wierzę, że zrównoważone życie to klucz do długoterminowego zdrowia i szczęścia.',
        ],
    },
    offer: {
        title: 'Co Oferuję',
        tabs: [
            {
                title: 'Moje Podejście',
                value: 'approach',
                content:
                    'Wierzę w holistyczne podejście oparte na dowodach naukowych. U mnie nie znajdziesz modnych diet ani szybkich rozwiązań! Skupiam się na trwałych zmianach stylu życia, które odżywią zarówno Twoje ciało, jak i umysł. Moim celem jest pomóc Ci zbudować pozytywną relację z jedzeniem, zrozumieć potrzeby swojego organizmu i osiągnąć długotrwałe rezultaty.',
            },
            {
                title: 'Usługi',
                value: 'services',
                content: [
                    'Indywidualne plany żywieniowe',
                    'Sesje coachingowe jeden na jeden',
                    'Warsztaty grupowe i seminaria',
                    'Programy wellness dla firm',
                    'Tworzenie przepisów',
                    'Przeglądy spiżarni',
                ],
            },
            {
                title: 'Specjalizacje',
                value: 'expertise',
                content: [
                    'Kontrola wagi',
                    'Żywienie sportowców',
                    'Zarządzanie cukrzycą',
                    'Zdrowie jelit',
                    'Intuicyjne jedzenie',
                    'Dieta roślinna',
                    'Planowanie posiłków',
                    'Edukacja żywieniowa',
                ],
            },
        ],
        first: {
            value: 'approach',
            content:
                'Wierzę w holistyczne podejście oparte na dowodach naukowych. U mnie nie znajdziesz modnych diet ani szybkich rozwiązań! Skupiam się na trwałych zmianach stylu życia, które odżywią zarówno Twoje ciało, jak i umysł. Moim celem jest pomóc Ci zbudować pozytywną relację z jedzeniem, zrozumieć potrzeby swojego organizmu i osiągnąć długotrwałe rezultaty.',
        },
        second: {
            value: 'services',
            content: [
                'Indywidualne plany żywieniowe',
                'Sesje coachingowe jeden na jeden',
                'Warsztaty grupowe i seminaria',
                'Programy wellness dla firm',
                'Tworzenie przepisów',
                'Przeglądy spiżarni',
            ],
        },
        third: {
            value: 'expertise',
            content: [
                'Kontrola wagi',
                'Żywienie sportowców',
                'Zarządzanie cukrzycą',
                'Zdrowie jelit',
                'Intuicyjne jedzenie',
                'Dieta roślinna',
                'Planowanie posiłków',
                'Edukacja żywieniowa',
            ],
        },
    },
    journey: {
        title: 'Moja Droga',
        content: [
            {
                title: 'Dietetyk w prywatnej praktyce',
                time: '2018 - Obecnie',
                paragraph:
                    'Spełniam swoje marzenie, pomagając klientom osiągać ich cele zdrowotne dzięki spersonalizowanym planom żywieniowym. Każdy dzień przynosi nowe wyzwania i nagrody, gdy wspólnie dążymy do najlepszej wersji siebie.',
            },
            {
                title: 'Dietetyk kliniczny, Szpital Green Health',
                time: '2015 - 2018',
                paragraph:
                    'Ta rola otworzyła mi oczy na kluczowe znaczenie żywienia w procesie leczenia i powrotu do zdrowia. Pracowałam z pacjentami borykającymi się z różnymi schorzeniami, dostosowując plany żywieniowe do ich terapii.',
            },
            {
                title: 'Asystentka badawcza, Instytut Nauk o Żywieniu',
                time: '2013 - 2015',
                paragraph:
                    'Moja pasja do żywienia opartego na dowodach naukowych rozwinęła się tutaj. Brałam udział w przełomowych badaniach nad wpływem diety na choroby przewlekłe, co umocniło moje zaangażowanie w ciągłą naukę w tej dziedzinie.',
            },
        ],
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
]

export const socialsContact = [
    {
        icon: (
            <IoLogoFacebook size={30} className="text-secondary-foreground" />
        ),
        href: 'https://www.facebook.com/diety.poczta',
    },
    {
        icon: (
            <IoLogoInstagram size={30} className="text-secondary-foreground" />
        ),
        href: 'https://www.instagram.com/diety.poczta',
    },
    {
        icon: <IoMail size={30} className="text-secondary-foreground" />,
        href: 'mailto:diety.poczta@gmail.com',
    },
]
