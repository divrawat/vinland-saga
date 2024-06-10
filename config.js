
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.vinlandsagamanga.in.net';


export const MANGA_DESCRIPTION = `Set in the Viking era, this manga follows Thorfinn's quest for revenge and his dream of finding the legendary land of Vinland. Filled with action and historical drama, <a href="${DOMAIN}"><u>Vinland Saga</u></a> is a thrilling story about battles, honor, and the search for peace. Perfect for fans of exciting, historical tales. Experience the gripping adventures of Thorfinn as he navigates through the tumultuous Viking world, facing formidable challenges and discovering his own path to redemption.`;

export const MANGA_NAME = 'Vinland Saga';
export const MANGA_AUTHOR = 'YUKIMURA Makoto';
export const MANGA_RELEASE = '2015';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Makoto YUKIMURA ';
export const MANGA_STUDIO = 'Wit, MAPPA';
export const MANGA_GENRE = 'Action, Adventure, Drama, Historical, Seinen';


export const APP_DESCRIPTION = `Read Vinland Saga manga online at "${DOMAIN}". Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community. Dive into the epic Viking adventure today!`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "Vinland Saga is a gripping manga and anime series that plunges viewers into the tumultuous world of Vikings during the Viking Age. At its core is the compelling story of Thorfinn, a young boy whose life is shattered when his father, Thors, a renowned warrior, is killed. Driven by an unquenchable thirst for vengeance, Thorfinn embarks on a perilous journey to avenge his father's death."
    },
    {
        id: 2,
        content: "As the series unfolds, viewers are taken on a gripping adventure filled with intense battles, complex characters, and moral dilemmas. Thorfinn's quest for revenge leads him into the heart of the Viking world, where he encounters warlords, mercenaries, and fellow warriors, each with their own motivations and agendas."
    },
    {
        id: 3,
        content: "Yet, amidst the chaos of battle and the brutality of Viking society, Thorfinn's journey also becomes one of self-discovery and redemption. Along the way, he grapples with questions of honor, loyalty, and the true meaning of strength. As Thorfinn confronts the harsh realities of his world, he begins to question his desire for vengeance and yearns for a life of peace and purpose."
    },
    {
        id: 4,
        content: "The concept of Vinland, a legendary land across the sea where conflict is replaced by harmony, serves as both a literal and metaphorical destination for Thorfinn. It represents his ultimate goal – a place where he can escape the cycle of violence and find a new beginning."
    },
    {
        id: 5,
        content: "Through stunning artwork, intricate storytelling, and rich historical detail, Vinland Saga captivates audiences with its exploration of themes such as justice, identity, and the human spirit. It challenges viewers to confront the complexities of morality and the consequences of one's actions, all within the vivid backdrop of Viking-era Scandinavia."
    },
    {
        id: 6,
        content: "In the end, Vinland Saga is not just a tale of revenge, but a profound saga of growth, redemption, and the enduring search for meaning in a world torn apart by conflict."
    }
];










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