import React from "react";
import RoastGenerator from "../components/RoastGenerator";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col gap-8 p-6 select-none">
      <section className="max-w-3xl mx-auto text-center card">
        <h1 className="text-3xl font-extrabold">Roast Me 🔥</h1>
        <p className="text-slate-300 mt-2">
          Click and receive a perfectly timed roast. Sharing recommended.
        </p>
      </section>

      <section className="max-w-3xl mx-auto w-full">
        <RoastGenerator />
      </section>
    </main>
  );
}
