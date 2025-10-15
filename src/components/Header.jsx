import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Témoignages', to: '/temoignages' },
  { label: 'Contact', to: '/contact' },
]

const baseLinkClasses =
  'transition-colors hover:text-slate-900'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur overflow-x-hidden">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2 text-lg font-semibold text-slate-900 flex-shrink-0" onClick={closeMenu}>
           <img
              src="logo-transparent-innovatech.avif"
              alt="Illustration cybersécurité Innovatech"
              className="h-12 w-auto object-contain sm:h-16"
              loading="lazy"
            />
        </Link>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-slate-600 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${baseLinkClasses} ${isActive ? 'text-slate-900' : 'text-slate-600'}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm shadow-slate-950/10 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contactez-nous
          </Link>
        </div>

        <button
          type="button"
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          aria-expanded={isOpen}
          aria-label="Ouvrir le menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            className="h-5 w-5"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 7h16M4 12h16M4 17h16"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden overflow-x-hidden">
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-sm font-medium text-slate-600 sm:px-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900 ${isActive ? 'bg-slate-100 text-slate-900' : ''}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
            >
              Contactez-nous
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
