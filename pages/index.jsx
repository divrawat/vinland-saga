import { DOMAIN } from "@/config";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  const chapters = Array.from({ length: 211 }, (_, i) => ({
    number: i + 1,
    url: `${DOMAIN}/manga/vinland-saga-chapter-${i + 1}`
  })).reverse();

  return (
    <>
      <Navbar />

      <div className="mt-10 max-w-[1100px] mx-auto px-5 flex flex-wrap justify-center">

        {chapters.map((chapter) => (
          <div className="flex hover:scale-105 active:scale-95 transition-transform" key={chapter.number}>
            <a href={chapter.url} className="p-5">
              <p className="w-[300px] text-center p-5 border border-l-8 border-[black] font-bold">
                Vinland Saga, Chapter {chapter.number}
              </p>
            </a>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
