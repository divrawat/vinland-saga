import { DOMAIN } from "@/config";

export default function Home() {
  const chapters = Array.from({ length: 211 }, (_, i) => ({
    number: i + 1,
    url: `${DOMAIN}/manga/vinland-saga-chapter-${i + 1}`
  })).reverse();

  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <div>
        {chapters.map((chapter) => (
          <a href={chapter.url} key={chapter.number} className="p-10">
            <p className="w-[300px] text-center p-5 border border-gray-300 border-l-8 border-l-blue-500 font-bold">
              Vinland Saga, Chapter {chapter.number}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}