function Home() {
  return (
    <section
      id="home"
      className="scroll-mt-24 overflow-hidden bg-slate-950 px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="mb-6 inline-flex rounded-full border border-indigo-400/40 bg-indigo-400/10 px-4 py-2 text-sm font-medium text-indigo-200">
            Independent digital studio · Available for projects
          </p>
          <h1 className="max-w-3xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Good ideas deserve a <span className="text-indigo-400">great</span>{' '}
            online home.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            We help ambitious people turn thoughtful ideas into clear,
            memorable digital experiences.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              className="rounded-lg bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-400"
              href="#contact"
            >
              Start a project
            </a>
            <a
              className="rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition hover:border-slate-400"
              href="#services"
            >
              Explore our services
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/30 via-slate-900 to-slate-900 p-8 shadow-2xl sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Our approach
          </p>
          <p className="mt-5 text-3xl font-semibold leading-snug">
            Thoughtful strategy.
            <br />
            Distinctive design.
            <br />
            Lasting impact.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-6">
            <div>
              <p className="text-3xl font-bold">12+</p>
              <p className="mt-1 text-sm text-slate-400">Years creating</p>
            </div>
            <div>
              <p className="text-3xl font-bold">48</p>
              <p className="mt-1 text-sm text-slate-400">Projects launched</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
