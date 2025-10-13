import { Link } from 'react-router-dom'

const CURRENT_YEAR = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-slate-950 text-slate-100"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary-500 to-slate-600 text-2xl">
              🛡️
            </span>
            <div>
              <p className="text-lg font-semibold">Innovatech Consulting</p>
              <p className="text-sm text-slate-400">Sécurisez l&apos;avenir de votre entreprise</p>
            </div>
          </div>
          <p className="mt-6 max-w-md text-sm leading-6 text-slate-400">
            Lot n°3 Bureau N°40, Florida Center Park, Casablanca 20280<br />
            Tél : +212 80 86 98 812 · 00212 77 36 97 172<br />
            Email : contact@innovatech-consulting.com
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Navigation
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>
              <Link className="transition hover:text-white" to="/">
                Accueil
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to="/a-propos">
                À propos
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to="/temoignages">
                Témoignages
              </Link>
            </li>
            <li>
              <Link className="transition hover:text-white" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
            Restez informé
          </h3>
          <p className="mt-4 text-sm text-slate-400">
            Recevez nos dernières actualités cybersécurité et nos offres exclusives.
          </p>
          <form className="mt-6 flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Adresse e-mail
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Entrez votre adresse e-mail"
              className="h-12 flex-1 rounded-full border border-slate-700 bg-slate-900/70 px-5 text-sm text-white placeholder:text-slate-500 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400/40"
            />
            <button
              type="submit"
              className="inline-flex h-12 items-center justify-center rounded-full bg-primary-500 px-5 text-sm font-semibold text-slate-950 transition hover:bg-primary-400"
            >
              Soumettre
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© {CURRENT_YEAR} Innovatech Consulting. Tous droits réservés.</p>
          <p>Solutions MSSP · CyberSOC · CyberDefense · GRC</p>
        </div>
      </div>
    </footer>
  )
}
