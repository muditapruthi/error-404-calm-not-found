export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 px-6 py-20">
      <div className="mx-auto max-w-3xl space-y-24">

        {/* 1️⃣ HERO SECTION */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Error 404
            <br />
            Calm Not Found
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            panic found. thoughts found. you found.
          </p>

          <div className="pt-8 space-y-4 max-w-sm mx-auto">
            <button className="w-full rounded-xl bg-black text-white dark:bg-white dark:text-black py-3">
              my brain won’t shut up
            </button>
            <button className="w-full rounded-xl border py-3">
              same here
            </button>
            <button className="w-full rounded-xl border py-3">
              tiny calm things
            </button>
          </div>

          <p className="pt-6 text-sm text-zinc-500">
            This space exists because nobody warned us that our brains would get this loud.
          </p>
        </section>

        {/* 2️⃣ TOO MANY TABS OPEN */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Tabs currently open in your brain:
          </h2>

          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>Did I sound rude?</li>
            <li>What if I fail?</li>
            <li>That embarrassing thing from 2019</li>
            <li>Why am I like this?</li>
            <li>Am I lazy or just exhausted?</li>
            <li>What if everyone secretly hates me?</li>
          </ul>

          <p className="text-zinc-500">
            If this feels familiar, congrats — you have a human brain.
          </p>
        </section>

        {/* 3️⃣ OVERTHINKING CLUB */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Overthinking Club <span className="text-zinc-500">(lifetime membership)</span>
          </h2>

          <ul className="space-y-2">
            <li>Re-reading a message 12 times before sending “ok”</li>
            <li>Imagining your entire future based on one bad day</li>
            <li>Feeling anxious → then anxious about being anxious</li>
            <li>Practicing arguments in your head that never happen</li>
            <li>Googling symptoms and deciding you’re doomed</li>
          </ul>

          <p className="text-zinc-500">
            Overthinking isn’t your personality. It’s your brain trying way too hard to protect you.
          </p>
        </section>

        {/* 4️⃣ YOU’RE NOT BROKEN */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            You’re not weak. You’re just human.
          </h2>

          <p>
            Nobody prepares you for how loud emotions get — especially around 15.
          </p>

          <p>
            One moment you’re fine.
            <br />
            Next moment you’re questioning everything because someone replied late.
          </p>

          <p className="font-medium">
            Feeling anxious doesn’t mean you’re failing.
            <br />
            It means you care. And caring is exhausting sometimes.
          </p>
        </section>

        {/* 5️⃣ YOUR BRAIN IS NOT YOUR ENEMY */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Panic ≠ danger
          </h2>

          <p>
            Your brain thinks it’s protecting you from a tiger.
          </p>

          <p>
            Plot twist:
            <br />
            There is no tiger.
            <br />
            Just expectations, pressure, and too many thoughts.
          </p>

          <p className="text-zinc-500">
            Anxiety is uncomfortable — not dangerous.
            <br />
            You are safe, even when it doesn’t feel like it.
          </p>
        </section>

        {/* 6️⃣ TINY CALM THINGS */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Tiny calm things (no pressure)
          </h2>

          <ul className="space-y-2">
            <li>Put both feet on the floor. You’re here.</li>
            <li>Drink water like it’s a side quest.</li>
            <li>Read one sentence slowly.</li>
            <li>Unclench your jaw. (Yes, really.)</li>
            <li>Breathe once. Not perfectly. Just once.</li>
          </ul>

          <p className="text-zinc-500">
            You don’t need to feel calm forever.
            <br />
            Just calm enough for now.
          </p>
        </section>

        {/* 7️⃣ SAME HERE WALL */}
        <section className="space-y-6">
          <h2 className="text-3xl font-semibold">
            Same Here Wall
          </h2>

          <ul className="space-y-2 italic text-zinc-700 dark:text-zinc-300">
            <li>“I smile all day and overthink at night.”</li>
            <li>“I feel lazy but I’m actually exhausted.”</li>
            <li>“I thought something was wrong with me.”</li>
            <li>“I don’t know what I’m feeling and that scares me.”</li>
          </ul>

          <p className="text-zinc-500">
            If someone else feels this — you’re not alone.
          </p>
        </section>

        {/* 8️⃣ CLOSING */}
        <section className="text-center space-y-4 pt-10">
          <p className="font-medium">
            Still here? Good.
          </p>

          <p>
            You don’t have to have life figured out at 15.
            <br />
            Or 25.
            <br />
            Or ever, honestly.
          </p>

          <p className="text-zinc-500">
            Error 404: Calm Not Found
            <br />
            But you were never lost.
          </p>
        </section>

      </div>
    </main>
  );
}
