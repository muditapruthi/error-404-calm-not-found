export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-zinc-50 dark:bg-black text-black dark:text-white">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        ERROR 404
        <br />
        Calm Not Found
      </h1>

      <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl mb-10">
        Panic found.
        <br />
        Overthinking found.
        <br />
        Random sadness found.
        <br />
        <span className="font-semibold text-black dark:text-white">
          You’re not broken.
        </span>
        <br />
        Your brain just has too many tabs open.
      </p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <button className="bg-black text-white py-3 rounded-xl hover:opacity-90">
          🧠 my brain won’t shut up
        </button>

        <button className="bg-zinc-200 dark:bg-zinc-800 py-3 rounded-xl">
          😵 same here
        </button>

        <button className="bg-zinc-100 dark:bg-zinc-900 py-3 rounded-xl">
          🌱 tiny calm things
        </button>
      </div>

      <p className="text-sm text-zinc-500 mt-12 max-w-md">
        This website exists because nobody told us that feeling anxious sometimes
        is normal.
      </p>
    </main>
  );
}
