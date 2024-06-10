
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://vinland-saga-eight.vercel.app';


export const MANGA_DESCRIPTION = `Set in the Viking era, this manga follows Thorfinn's quest for revenge and his dream of finding the legendary land of Vinland. Filled with action and historical drama, <a href="${DOMAIN}"><u>Vinland Saga</u></a> is a thrilling story about battles, honor, and the search for peace. Perfect for fans of exciting, historical tales. Experience the gripping adventures of Thorfinn as he navigates through the tumultuous Viking world, facing formidable challenges and discovering his own path to redemption.`;

export const MANGA_NAME = 'Vinland Saga';
export const MANGA_AUTHOR = 'YUKIMURA Makoto';
export const MANGA_RELEASE = '2015';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Makoto YUKIMURA ';
export const MANGA_STUDIO = 'Wit, MAPPA';
export const MANGA_GENRE = 'Action, Adventure, Drama, Historical, Seinen';


export const APP_DESCRIPTION = `Read Vinland Saga manga online at "${DOMAIN}". Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community. Dive into the epic Viking adventure today!`;

// Navbar
export const logo = <img src={`${DOMAIN}/logo.jpg`} alt="Logo" className="h-[75px] w-[185px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'Vinland Saga';
export const NavbarName = "Vinland Saga";
export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

// Footer
export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];