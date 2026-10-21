const services = [
  {
    number: '01',
    title: 'Brand strategy',
    description:
      'Positioning, messaging, and a clear story that helps the right people understand your value.',
    tags: ['Discovery', 'Positioning', 'Messaging'],
  },
  {
    number: '02',
    title: 'Digital design',
    description:
      'Distinctive, accessible websites and digital products designed around real people.',
    tags: ['UX / UI', 'Web design', 'Prototyping'],
  },
  {
    number: '03',
    title: 'Web development',
    description:
      'Fast, responsive, easy-to-manage websites built with modern tools and best practices.',
    tags: ['React', 'Frontend', 'Accessibility'],
  },
]

function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 px-6 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-600">
            What we do
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            From first thought to final launch.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Bring us in for one part of the journey or let’s build the whole
            thing together.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200"
            >
              <p className="text-sm font-bold text-indigo-600">
                {service.number}
              </p>
              <h3 className="mt-5 text-2xl font-semibold">{service.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">
                {service.description}
              </p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
