const values = [
  {
    number: '01',
    title: 'Start with listening',
    description:
      'We learn what makes your business different before deciding what it should look like.',
  },
  {
    number: '02',
    title: 'Make it meaningful',
    description:
      'Every design choice has a purpose, from the first impression to the smallest detail.',
  },
  {
    number: '03',
    title: 'Build for what’s next',
    description:
      'We create flexible digital foundations that can grow alongside your ambitions.',
  },
]

function About() {
  return (
    <section id="about" className="scroll-mt-24 px-6 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
              About us
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Small team.
              <br />
              Big-picture thinking.
            </h2>
          </div>
          <p className="max-w-2xl self-end text-lg leading-8 text-slate-600">
            Northstar is a close-knit creative studio partnering with people
            who want to make a difference. We bring strategy, design, and
            technology together to make the complex feel clear.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.number}
              className="rounded-2xl border border-slate-200 p-7"
            >
              <p className="text-sm font-bold text-indigo-600">{value.number}</p>
              <h3 className="mt-5 text-xl font-semibold">{value.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">
                {value.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
