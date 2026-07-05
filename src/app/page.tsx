export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f3ec] px-5 py-8 text-[#171717] sm:px-8 lg:px-12">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between rounded-[28px] border border-black/10 bg-white p-6 shadow-[0_30px_100px_rgba(0,0,0,0.08)] sm:p-10">
        <div>
          <div className="mb-16 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="grid size-10 place-items-center rounded-full bg-black text-sm font-black text-white">
                LF
              </div>
              <div>
                <p className="text-sm font-bold">Lightform</p>
                <p className="text-xs text-black/50">Design Reference Lab</p>
              </div>
            </div>
            <code className="rounded-full border border-black/10 px-3 py-1.5 text-xs text-black/55">
              reference first, build second
            </code>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-blue-600">
                Taste memory system
              </p>
              <h1 className="max-w-3xl text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-7xl lg:text-8xl">
                Capture why a site works before asking AI to make one.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-black/62">
              This fork adapts the website cloner template into a Lightform library for references, extracted design tokens, section patterns, taste notes, and showability gates.
            </p>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-4">
          {[
            ["01", "Capture references", "Screenshot, inspect, and extract the actual visual system."],
            ["02", "Write taste notes", "Name what works, what fails, and why Jorge would care."],
            ["03", "Create pattern cards", "Turn references into reusable wellness-site building blocks."],
            ["04", "Gate the build", "Block anything that is not showable before Framer or Lovable starts."],
          ].map(([number, title, copy]) => (
            <article
              className="min-h-48 rounded-3xl border border-black/10 bg-[#f8f7f2] p-5"
              key={number}
            >
              <p className="mb-10 font-mono text-xs font-bold text-blue-600">{number}</p>
              <h2 className="mb-3 text-xl font-black tracking-[-0.03em]">{title}</h2>
              <p className="text-sm leading-6 text-black/58">{copy}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
