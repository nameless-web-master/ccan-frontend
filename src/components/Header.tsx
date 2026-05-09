import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Benefits', href: '/#benefits' },
  { label: 'For Buildings', href: '/#for-buildings' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md backdrop-saturate-150 transition-[border-color,box-shadow] duration-200 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/90 shadow-[0_1px_2px_rgba(15,23,42,0.06)]'
          : 'border-b border-transparent bg-white/90'
      }`}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="inline-flex items-center" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className={`flex items-center gap-7 max-md:fixed max-md:inset-x-0 max-md:top-[72px] max-md:flex-col max-md:items-stretch max-md:gap-4 max-md:border-b max-md:border-slate-200 max-md:bg-white max-md:px-6 max-md:py-6 max-md:shadow-md max-md:transition-all max-md:duration-200 ${
            open
              ? 'max-md:translate-y-0 max-md:opacity-100 max-md:pointer-events-auto'
              : 'max-md:-translate-y-3 max-md:opacity-0 max-md:pointer-events-none'
          }`}
        >
          {navItems.map((item) =>
            item.href.startsWith('/#') ? (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-medium text-slate-600 transition-colors hover:text-[var(--color-primary)]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ) : (
              <NavLink
                key={item.label}
                to={item.href}
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    'relative text-[15px] font-medium transition-colors hover:text-[var(--color-primary)]',
                    'pb-1.5',
                    isActive
                      ? "text-[var(--color-primary)] after:absolute after:-bottom-0.5 after:left-0 after:right-0 after:h-0.5 after:rounded after:bg-[var(--color-primary)] after:content-['']"
                      : 'text-slate-600',
                  ].join(' ')
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
          <a
            href="#contact"
            className="btn btn-primary !px-5 !py-3 !text-sm max-md:justify-center"
          >
            Request Pilot
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="hidden h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-900 max-md:inline-flex"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  )
}

export default Header
