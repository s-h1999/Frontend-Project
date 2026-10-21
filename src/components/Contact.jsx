function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-10 rounded-3xl bg-indigo-600 p-8 text-white sm:p-12 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-indigo-200">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Have a good one in mind?
          </h2>
          <p className="mt-5 text-lg leading-8 text-indigo-100">
            Tell us what you’re working on. We’d love to hear about it and see
            how we can help.
          </p>
        </div>
        <a
          className="inline-flex shrink-0 items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:bg-indigo-50"
          href="mailto:hello@northstar.studio"
        >
          hello@northstar.studio
        </a>
      </div>
    </section>
  )
}

export default Contact
