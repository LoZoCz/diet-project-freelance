import { PiCheese, PiCarrot } from 'react-icons/pi'
import { TbApple, TbMeat } from 'react-icons/tb'
import { IoLogoInstagram, IoLogoFacebook, IoMail } from 'react-icons/io5'

export const badgeArr = [
    {
        label: 'Porady żywieniowe',
        href: '/blog/porady',
    },
    {
        label: 'Plany posiłków',
        href: '/blog/plany',
    },
    {
        label: 'Zdrowe przepisy',
        href: '/blog/przepisy',
    },
    {
        label: 'Zmiany stylu życia',
        href: '/blog/zycie',
    },
]

export const cardContent = [
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
]

export const faqContent = [
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
]

export const pageLinks = [
    {
        label: 'Strona główna',
        href: '/',
    },
    {
        label: 'O mnie',
        href: '/about',
    },
    {
        label: 'Kalkulator kaloryczny',
        href: '/calc',
    },
    {
        label: 'Blog',
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
