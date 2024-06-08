import style from "./app.module.css";

// generate random emojy
const RandomEmoji = () => {
  const emojis = ["👋", "👍", "👏", "🤝", "🙌", "🌟", "🎉", "🇮🇱❤️"];
  return (
    <div className="h-full w-full text-9xl grid place-items-center">
      {emojis[Math.floor(Math.random() * emojis.length)]}
    </div>
  );
};

export default function Home() {
  return (
    <main className="grid grid-row-1 grid-cols-1 place-items-center gap-[50dvh] min-h-screen max-h-screen px-12 py-24 overflow-auto bg-[rgb(20,20,20)]">
      <span className={style.support}>
        <code>
          This browser does not supports experimental animation-timeline: view()
        </code>

        <div className="animate-bounce text-5xl">😔</div>
      </span>
      {Array.from({ length: 50 }).map((_, i) => (
        <div key={i} className={style.card}>
          <RandomEmoji />
        </div>
      ))}
    </main>
  );
}
