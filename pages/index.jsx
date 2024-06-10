import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { DOMAIN, MANGA_NAME, MANGA_DESCRIPTION, MANGA_AUTHOR, MANGA_RELEASE, MANGA_STATUS, MANGA_ARTIST, MANGA_STUDIO, MANGA_GENRE } from "@/config";

export default function Home() {
  const chapters = Array.from({ length: 211 }, (_, i) => ({
    number: i + 1,
    url: `${DOMAIN}/manga/vinland-saga-chapter-${i + 1}`
  })).reverse();

  const genres = MANGA_GENRE.split(', ');

  return (
    <>
      <Navbar />
      <article>
        <div className="flex md:mb-[60px] mb-5 pt-3 bg-[#000000] text-[white]">
          <div className="w-2/5"><img width={450} height={450} src={`${DOMAIN}/cover.webp`}></img></div>
          <div className="w-3/5 md:mr-10">
            <h1 className="text-center font-extrabold text-4xl my-5 uppercase">{MANGA_NAME}</h1>
            <p className="my-5 leading-[2] text-center" dangerouslySetInnerHTML={{ __html: MANGA_DESCRIPTION }} />

            <div className="flex flex-wrap justify-center gap-2">
              {genres.map((genre, index) => (
                <button key={index} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  {genre}
                </button>
              ))}
            </div>





            <div className="grid grid-cols-3 justify-center gap-x-10 mt-5">
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Release</h3>
                <p>{MANGA_RELEASE}</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Status</h3>
                <p>{MANGA_STATUS}</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Author</h3>
                <p>{MANGA_AUTHOR}</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Type</h3>
                <p>Manga</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Artist</h3>
                <p>{MANGA_ARTIST}</p>
              </div>
              <div className="text-center mt-10">
                <h3 className="font-bold text-[21px] mb-2">Studio</h3>
                <p>{MANGA_STUDIO}</p>
              </div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="bg-blue-500 hover:scale-110 active:scale-95 transition-transform text-white font-bold py-2 px-4 rounded">
                <a href="#readmanga">  READ NOW</a>
              </button>
            </div>



          </div>
        </div>


        <h2 id="readmanga" className="font-extrabold text-3xl my-10 text-center">Read {MANGA_NAME} Chapters Online</h2>

        <div className="mt-10 max-w-[1100px] mx-auto px-5 flex flex-wrap justify-center">

          {chapters.map((chapter) => (
            <div className="flex hover:scale-105 active:scale-95 transition-transform" key={chapter.number}>
              <Link href={chapter.url} className="p-5">
                <p className="w-[300px] text-center p-5 border border-l-8 border-[black] font-bold break-words">
                  Vinland Saga, Chapter {chapter.number}
                </p>
              </Link>
            </div>
          ))}

        </div>
      </article>
      <Footer />
    </>
  );
}
