import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Home from './components/Home.jsx'
import Services from './components/Services.jsx'

const currentYear = new Date().getFullYear()

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 backdrop-blur">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4"
        >
          <a className="text-xl font-bold tracking-tight" href="#home">
            northstar<span className="text-indigo-600">.</span>
          </a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-slate-600">
            {navigation.map((item) => (
              <a
                key={item.href}
                className="transition hover:text-indigo-600"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main>
        <Home />
        <About />
        <Services />
        <Contact />
      </main>

      <footer className="border-t border-slate-200 px-6 py-6 text-center text-sm text-slate-500">
        © {currentYear} Northstar Studio. Built with care.
      </footer>
    </div>
  )
}

export default App
