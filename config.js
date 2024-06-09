
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://vinland-saga-eight.vercel.app';

export const MANGA_NAME = 'Vinland Saga';
export const APP_DESCRIPTION = 'Read Vinland Saga manga online at Vinland Saga Haven. Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community. Dive into the epic Viking adventure today!';

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