"use client";

import { useState } from "react";

export default function Home() {
  const [dark, setDark] = useState(false);
  const [entries] = useState([
    "I smile all day and overthink at night.",
    "I feel lazy but I’m actually exhausted.",
    "I thought something was wrong with me.",
    "I don’t know what I’m feeling and that scares me.",
  ]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-300 px-6 py-20">

        {/* 🌙 Brain Tired Mode */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={() => setDark(!dark)}
            className="rounded-full border px-4 py-2 text-sm bg-white dark:bg-black"
          >
            {dark ? "☀️ brain waking up" : "🌙 brain tired mode"}
          </button>
        </div>

        <div className="mx-auto max-w-3xl space-y-28">

          {/* HERO */}
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
              <button
                onClick={() => scrollTo("calm")}
                className="w-full rounded-xl bg-black text-white dark:bg-white dark:text-black py-3"
              >
                my brain won’t shut up
              </button>

              <button
                onClick={() => scrollTo("same-here")}
                className="w-full rounded-xl border py-3"
              >
                same here
              </button>

              <button
                onClick={() => scrollTo("calm")}
                className="w-full rounded-xl border py-3"
              >
                tiny calm things
              </button>
            </div>

            <p className="pt-6 text-sm text-zinc-500">
              This website exists because nobody warned us that our brains would get this loud.
            </p>
          </section>

          {/* TOO MANY TABS */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
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
            <p className="mt-4 text-zinc-500">
              If this feels familiar, congrats — you have a human brain.
            </p>
          </section>

          {/* OVERTHINKING CLUB */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              Overthinking Club <span className="text-zinc-500">(lifetime membership)</span>
            </h2>
            <ul className="space-y-2">
              <li>Re-reading a message 12 times before sending “ok”</li>
              <li>Imagining your entire future based on one bad day</li>
              <li>Feeling anxious → then anxious about being anxious</li>
              <li>Practicing arguments in your head that never happen</li>
              <li>Googling symptoms and deciding you’re doomed</li>
            </ul>
            <p className="mt-4 text-zinc-500">
              Overthinking isn’t your personality. It’s your brain trying too hard to protect you.
            </p>
          </section>

          {/* YOU’RE NOT BROKEN */}
          <section>
            <h2 className="text-3xl font-semibold mb-6">
              You’re not broken.
            </h2>
            <p>
              Nobody prepares you for how loud emotions get — especially around 15.
            </p>
            <p className="mt-4 font-medium">
              Feeling anxious doesn’t mean you’re failing.
              <br />
              It means you care. And caring is exhausting sometimes.
            </p>
          </section>

          {/* TINY CALM THINGS */}
          <section id="calm">
            <h2 className="text-3xl font-semibold mb-6">
              Tiny calm things
            </h2>
            <ul className="space-y-2">
              <li>Put both feet on the floor. You’re here.</li>
              <li>Drink water like it’s a side quest.</li>
              <li>Read one sentence slowly.</li>
              <li>Unclench your jaw. (Yes, really.)</li>
              <li>Breathe once. Not perfectly. Just once.</li>
            </ul>
            <p className="mt-4 text-zinc-500">
              You don’t need to feel calm forever. Just calm enough for now.
            </p>
          </section>

          {/* SAME HERE WALL */}
          <section id="same-here">
            <h2 className="text-3xl font-semibold mb-6">
              Same Here Wall
            </h2>
            <ul className="space-y-3 italic text-zinc-700 dark:text-zinc-300">
              {entries.map((e, i) => (
                <li key={i}>“{e}”</li>
              ))}
            </ul>
            <p className="mt-4 text-zinc-500">
              These are anonymous. Real. And shared by people who thought they were alone.
            </p>
          </section>

          {/* ABOUT */}
          <section id="about">
            <h2 className="text-3xl font-semibold mb-6">
              About This Space
            </h2>
            <p>
              Error 404: Calm Not Found started as a personal response to something nobody
              talks about enough — how overwhelming it feels to be young and expected
              to function like you have everything figured out.
            </p>
            <p className="mt-4">
              This project is not therapy. It doesn’t diagnose or fix.
              It normalizes. It validates. It creates a soft place for loud brains.
            </p>
            <p className="mt-4 font-medium">
              Building this taught me that empathy can be designed,
              systems can be humane, and advocacy doesn’t always look loud.
            </p>
            <p className="mt-4 text-zinc-500">
              This project reflects my interest in mental health, youth advocacy,
              and law — especially how systems can better serve people when they feel unseen.
            </p>
          </section>

          {/* CLOSING */}
          <section className="text-center pt-10 space-y-4">
            <p className="font-medium">Still here? Good.</p>
            <p className="text-zinc-500">
              Error 404: Calm Not Found
              <br />
              But you were never lost.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
