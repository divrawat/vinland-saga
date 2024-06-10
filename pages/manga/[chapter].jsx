import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';
import { APP_NAME, DOMAIN, MANGA_NAME } from '@/config';
import DisqusComments from '@/components/DisQus';

export default function Chapter({ chapterNumber, imageUrls, totalChapters, params, errorcode }) {

    if (errorcode) {
        return (
            <>
                <Navbar />
                <div className="text-center py-10">
                    <h1 className="text-3xl font-bold mt-10">404 Page Not Found</h1>
                    <p className="text-lg mt-4">The page you are looking for does not exist.</p>
                </div>
                <Footer />
            </>
        );
    }

    const chapterIndex = parseInt(chapterNumber) - 1;
    const previousChapter = chapterIndex > 0 ? chapterIndex : null;
    const nextChapter = chapterIndex < totalChapters - 1 ? chapterIndex + 2 : null;
    const DESCRIPTION = `You are currently enjoying reading ${MANGA_NAME} chapter ${chapterNumber} online at ${DOMAIN}.`
    const URL = params.chapter;
    const currentDate = new Date();
    const dateModified = new Date(currentDate.getTime() - (2 * 24 * 60 * 60 * 1000)).toISOString();
    const datePublished = new Date(currentDate.getTime() - (7 * 24 * 60 * 60 * 1000)).toISOString();


    const schema =
    {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${DOMAIN}`
        },
        "headline": `Vinland Saga Chapter ${chapterNumber}`,
        "description": `${DESCRIPTION}`,
        "image": `${DOMAIN}/images/vinland-saga/chapter-${chapterNumber}/1.webp`,
        "author": {
            "@type": "Person",
            "name": `Vinland Saga Team`,
            "url": `${DOMAIN}/vinland-saga-team`
        },
        "publisher": {
            "@type": "Person",
            "name": { APP_NAME },
            "logo": {
                "@type": "ImageObject",
                "url": `${DOMAIN}/logo.jpg}`
            }
        },
        "datePublished": datePublished,
        "dateModified": dateModified
    }

    const head = () => (
        <Head>
            <title>{`Vinland Saga Chapter ${chapterNumber}`}</title>
            <meta name="description" content={DESCRIPTION} />
            <link rel="canonical" href={`${DOMAIN}/${URL}`} />
            <meta property="og:title" content={`Vinland Saga Chapter ${chapterNumber}`} />
            <meta property="og:description" content={DESCRIPTION} />
            <meta property="og:type" content="webiste" />
            <meta name="robots" content="follow, index, noarchive, max-snippet:-1, max-video-preview:-1, max-image-preview:large" />
            <meta property="og:url" content={`${DOMAIN}/${URL}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />
            <meta property="og:image" content={`${DOMAIN}/images/vinland-saga/chapter-${chapterNumber}/1.webp`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/images/vinland-saga/chapter-${chapterNumber}/1.webp`} />
            <meta property="og:image:type" content="image/jpg" />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        </Head >
    );




    return (
        <>
            {head()}
            <Navbar />
            <h1 className="text-3xl font-bold text-center p-5 md:my-5">{`Vinland Saga Chapter ${chapterNumber}`}</h1>

            <div className='mx-3 my-7'>
                <div className="flex justify-between max-w-[800px] mx-auto md:mb-[50px] mt-5">
                    {previousChapter !== null ? (
                        <Link href={`${DOMAIN}/manga/vinland-saga-chapter-${previousChapter}`}>
                            <button className="text-[white] text-[13px] hover:scale-105 active:scale-95 transition-transform rounded bg-[black] px-2 py-2 font-semibold">Previous Chapter</button>
                        </Link>
                    ) : (
                        <button className="text-[white] text-[13px] rounded bg-[gray] px-2 py-2 font-semibold cursor-not-allowed" disabled>Previous Chapter</button>
                    )}

                    {nextChapter !== null ? (
                        <Link href={`${DOMAIN}/manga/vinland-saga-chapter-${nextChapter}`}>
                            <button className="text-[white] text-[13px] hover:scale-105 active:scale-95 transition-transform rounded bg-[black] px-2 py-2 font-semibold">Next Chapter</button>
                        </Link>
                    ) : (
                        <button className="text-[white] text-[13px] rounded bg-[gray] px-2 py-2 font-semibold cursor-not-allowed" disabled>Next Chapter</button>
                    )}

                </div>
            </div>

            <div className='max-w-[1200px] mx-auto mb-5'>
                {imageUrls.map((imageUrl, index) => (
                    <div className='allimages' key={index}>
                        <img width={700} height={600} loading="lazy" src={imageUrl} alt={`Chapter ${chapterNumber} Image ${index + 1}`} />
                    </div>
                ))}
            </div>

            <div className='py-10 bg-[#0f0511]'>
                <section className='max-w-[1000px] mx-auto px-5'>
                    <DisqusComments url={`/manga/${URL}`} identifier={chapterNumber} title={`Vinland Saga Chapter ${chapterNumber}`} />
                </section>
            </div>

            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const paths = chaptersData.map((chapter, index) => ({
        params: { chapter: `vinland-saga-chapter-${index + 1}` },
    }));
    return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {

    const chapterNumber = params.chapter.split('-').pop();
    const chapterIndex = parseInt(chapterNumber) - 1;

    const chapterParam = params.chapter;
    const chapterPrefix = chapterParam.split('-').slice(0, 3).join('-');
    if (chapterPrefix !== "vinland-saga-chapter") {
        return { props: { errorcode: true } };
    }



    if (chapterIndex >= chaptersData.length || chapterNumber === "0") {
        return { props: { errorcode: true } };
    }

    const chapterData = chaptersData[chapterIndex];
    const totalChapters = chaptersData.length;
    const numImages = chapterData.numImages;
    const imageUrls = getImageUrls(chapterNumber, numImages);

    return { props: { chapterNumber, imageUrls, totalChapters, params }, };
}



const getImageUrls = (chapterNumber, numImages) => {
    const imageUrls = [];
    const chapterImagesFolder = `${DOMAIN}/images/vinland-saga/chapter-${chapterNumber}`;
    for (let i = 1; i <= numImages; i++) {
        const imageUrl = `${chapterImagesFolder}/${i}.webp`;
        imageUrls.push(imageUrl);
    }
    return imageUrls;
};



const chaptersData = [
    { "chapterNumber": 1, "numImages": 88 }, { "chapterNumber": 2, "numImages": 42 }, { "chapterNumber": 3, "numImages": 37 }, { "chapterNumber": 4, "numImages": 28 }, { "chapterNumber": 5, "numImages": 26 }, { "chapterNumber": 6, "numImages": 23 }, { "chapterNumber": 7, "numImages": 21 }, { "chapterNumber": 8, "numImages": 22 }, { "chapterNumber": 9, "numImages": 21 }, { "chapterNumber": 10, "numImages": 21 }, { "chapterNumber": 11, "numImages": 20 }, { "chapterNumber": 12, "numImages": 21 }, { "chapterNumber": 13, "numImages": 20 }, { "chapterNumber": 14, "numImages": 20 }, { "chapterNumber": 15, "numImages": 20 }, { "chapterNumber": 16, "numImages": 23 }, { "chapterNumber": 17, "numImages": 46 }, { "chapterNumber": 18, "numImages": 39 }, { "chapterNumber": 19, "numImages": 39 }, { "chapterNumber": 20, "numImages": 38 }, { "chapterNumber": 21, "numImages": 35 }, { "chapterNumber": 22, "numImages": 39 }, { "chapterNumber": 23, "numImages": 27 }, { "chapterNumber": 24, "numImages": 32 }, { "chapterNumber": 25, "numImages": 22 }, { "chapterNumber": 26, "numImages": 32 }, { "chapterNumber": 27, "numImages": 12 }, { "chapterNumber": 28, "numImages": 38 }, { "chapterNumber": 29, "numImages": 37 }, { "chapterNumber": 30, "numImages": 40 }, { "chapterNumber": 31, "numImages": 38 }, { "chapterNumber": 32, "numImages": 18 }, { "chapterNumber": 33, "numImages": 34 }, { "chapterNumber": 34, "numImages": 17 }, { "chapterNumber": 35, "numImages": 24 }, { "chapterNumber": 36, "numImages": 27 }, { "chapterNumber": 37, "numImages": 39 }, { "chapterNumber": 38, "numImages": 10 }, { "chapterNumber": 39, "numImages": 32 }, { "chapterNumber": 40, "numImages": 34 }, { "chapterNumber": 41, "numImages": 34 }, { "chapterNumber": 42, "numImages": 45 }, { "chapterNumber": 43, "numImages": 31 }, { "chapterNumber": 44, "numImages": 29 }, { "chapterNumber": 45, "numImages": 43 }, { "chapterNumber": 46, "numImages": 24 }, { "chapterNumber": 47, "numImages": 30 }, { "chapterNumber": 48, "numImages": 28 }, { "chapterNumber": 49, "numImages": 25 }, { "chapterNumber": 50, "numImages": 17 }, { "chapterNumber": 51, "numImages": 28 }, { "chapterNumber": 52, "numImages": 33 }, { "chapterNumber": 53, "numImages": 24 }, { "chapterNumber": 54, "numImages": 35 }, { "chapterNumber": 55, "numImages": 32 }, { "chapterNumber": 56, "numImages": 30 }, { "chapterNumber": 57, "numImages": 38 }, { "chapterNumber": 58, "numImages": 24 }, { "chapterNumber": 59, "numImages": 32 }, { "chapterNumber": 60, "numImages": 24 }, { "chapterNumber": 61, "numImages": 25 }, { "chapterNumber": 62, "numImages": 21 }, { "chapterNumber": 63, "numImages": 20 }, { "chapterNumber": 64, "numImages": 16 }, { "chapterNumber": 65, "numImages": 32 }, { "chapterNumber": 66, "numImages": 22 }, { "chapterNumber": 67, "numImages": 32 }, { "chapterNumber": 68, "numImages": 34 }, { "chapterNumber": 69, "numImages": 34 }, { "chapterNumber": 70, "numImages": 26 }, { "chapterNumber": 71, "numImages": 32 }, { "chapterNumber": 72, "numImages": 31 }, { "chapterNumber": 73, "numImages": 22 }, { "chapterNumber": 74, "numImages": 22 }, { "chapterNumber": 75, "numImages": 30 }, { "chapterNumber": 76, "numImages": 24 }, { "chapterNumber": 77, "numImages": 30 }, { "chapterNumber": 78, "numImages": 25 }, { "chapterNumber": 79, "numImages": 22 }, { "chapterNumber": 80, "numImages": 20 }, { "chapterNumber": 81, "numImages": 24 }, { "chapterNumber": 82, "numImages": 22 }, { "chapterNumber": 83, "numImages": 32 }, { "chapterNumber": 84, "numImages": 22 }, { "chapterNumber": 85, "numImages": 20 }, { "chapterNumber": 86, "numImages": 28 }, { "chapterNumber": 87, "numImages": 28 }, { "chapterNumber": 88, "numImages": 26 }, { "chapterNumber": 89, "numImages": 16 }, { "chapterNumber": 90, "numImages": 20 }, { "chapterNumber": 91, "numImages": 24 }, { "chapterNumber": 92, "numImages": 36 }, { "chapterNumber": 93, "numImages": 36 }, { "chapterNumber": 94, "numImages": 34 }, { "chapterNumber": 95, "numImages": 26 }, { "chapterNumber": 96, "numImages": 30 }, { "chapterNumber": 97, "numImages": 28 }, { "chapterNumber": 98, "numImages": 28 }, { "chapterNumber": 99, "numImages": 18 }, { "chapterNumber": 100, "numImages": 26 }, { "chapterNumber": 101, "numImages": 27 }, { "chapterNumber": 102, "numImages": 26 }, { "chapterNumber": 103, "numImages": 32 }, { "chapterNumber": 104, "numImages": 22 }, { "chapterNumber": 105, "numImages": 24 }, { "chapterNumber": 106, "numImages": 28 }, { "chapterNumber": 107, "numImages": 30 }, { "chapterNumber": 108, "numImages": 27 }, { "chapterNumber": 109, "numImages": 13 }, { "chapterNumber": 110, "numImages": 29 }, { "chapterNumber": 111, "numImages": 25 }, { "chapterNumber": 112, "numImages": 25 }, { "chapterNumber": 113, "numImages": 16 }, { "chapterNumber": 114, "numImages": 34 }, { "chapterNumber": 115, "numImages": 23 }, { "chapterNumber": 116, "numImages": 21 }, { "chapterNumber": 117, "numImages": 28 }, { "chapterNumber": 118, "numImages": 26 }, { "chapterNumber": 119, "numImages": 30 }, { "chapterNumber": 120, "numImages": 30 }, { "chapterNumber": 121, "numImages": 25 }, { "chapterNumber": 122, "numImages": 28 }, { "chapterNumber": 123, "numImages": 25 }, { "chapterNumber": 124, "numImages": 19 }, { "chapterNumber": 125, "numImages": 28 }, { "chapterNumber": 126, "numImages": 26 }, { "chapterNumber": 127, "numImages": 29 }, { "chapterNumber": 128, "numImages": 28 }, { "chapterNumber": 129, "numImages": 34 }, { "chapterNumber": 130, "numImages": 23 }, { "chapterNumber": 131, "numImages": 23 }, { "chapterNumber": 132, "numImages": 24 }, { "chapterNumber": 133, "numImages": 24 }, { "chapterNumber": 134, "numImages": 23 }, { "chapterNumber": 135, "numImages": 33 }, { "chapterNumber": 136, "numImages": 29 }, { "chapterNumber": 137, "numImages": 19 }, { "chapterNumber": 138, "numImages": 17 }, { "chapterNumber": 139, "numImages": 18 }, { "chapterNumber": 140, "numImages": 29 }, { "chapterNumber": 141, "numImages": 22 }, { "chapterNumber": 142, "numImages": 26 }, { "chapterNumber": 143, "numImages": 27 }, { "chapterNumber": 144, "numImages": 20 }, { "chapterNumber": 145, "numImages": 27 }, { "chapterNumber": 146, "numImages": 19 }, { "chapterNumber": 147, "numImages": 21 }, { "chapterNumber": 148, "numImages": 27 }, { "chapterNumber": 149, "numImages": 25 }, { "chapterNumber": 150, "numImages": 28 }, { "chapterNumber": 151, "numImages": 18 }, { "chapterNumber": 152, "numImages": 21 }, { "chapterNumber": 153, "numImages": 20 }, { "chapterNumber": 154, "numImages": 12 }, { "chapterNumber": 155, "numImages": 23 }, { "chapterNumber": 156, "numImages": 27 }, { "chapterNumber": 157, "numImages": 21 }, { "chapterNumber": 158, "numImages": 20 }, { "chapterNumber": 159, "numImages": 29 }, { "chapterNumber": 160, "numImages": 25 }, { "chapterNumber": 161, "numImages": 21 }, { "chapterNumber": 162, "numImages": 30 }, { "chapterNumber": 163, "numImages": 20 }, { "chapterNumber": 164, "numImages": 21 }, { "chapterNumber": 165, "numImages": 21 }, { "chapterNumber": 166, "numImages": 30 }, { "chapterNumber": 167, "numImages": 21 }, { "chapterNumber": 168, "numImages": 23 }, { "chapterNumber": 169, "numImages": 25 }, { "chapterNumber": 170, "numImages": 21 }, { "chapterNumber": 171, "numImages": 19 }, { "chapterNumber": 172, "numImages": 25 }, { "chapterNumber": 173, "numImages": 26 }, { "chapterNumber": 174, "numImages": 19 }, { "chapterNumber": 175, "numImages": 19 }, { "chapterNumber": 176, "numImages": 21 }, { "chapterNumber": 177, "numImages": 25 }, { "chapterNumber": 178, "numImages": 22 }, { "chapterNumber": 179, "numImages": 26 }, { "chapterNumber": 180, "numImages": 24 }, { "chapterNumber": 181, "numImages": 25 }, { "chapterNumber": 182, "numImages": 18 }, { "chapterNumber": 183, "numImages": 25 }, { "chapterNumber": 184, "numImages": 19 }, { "chapterNumber": 185, "numImages": 22 }, { "chapterNumber": 186, "numImages": 24 }, { "chapterNumber": 187, "numImages": 19 }, { "chapterNumber": 188, "numImages": 25 }, { "chapterNumber": 189, "numImages": 26 }, { "chapterNumber": 190, "numImages": 24 }, { "chapterNumber": 191, "numImages": 33 }, { "chapterNumber": 192, "numImages": 23 }, { "chapterNumber": 193, "numImages": 24 }, { "chapterNumber": 194, "numImages": 19 }, { "chapterNumber": 195, "numImages": 0 }, { "chapterNumber": 196, "numImages": 27 }, { "chapterNumber": 197, "numImages": 17 }, { "chapterNumber": 198, "numImages": 19 }, { "chapterNumber": 199, "numImages": 27 }, { "chapterNumber": 200, "numImages": 21 }, { "chapterNumber": 201, "numImages": 11 }, { "chapterNumber": 202, "numImages": 23 }, { "chapterNumber": 203, "numImages": 28 }, { "chapterNumber": 204, "numImages": 28 }, { "chapterNumber": 205, "numImages": 24 }, { "chapterNumber": 206, "numImages": 26 }, { "chapterNumber": 207, "numImages": 25 }, { "chapterNumber": 208, "numImages": 19 }, { "chapterNumber": 209, "numImages": 18 }, { "chapterNumber": 210, "numImages": 23 }, { "chapterNumber": 211, "numImages": 23 }
];