import { ctaHighlights, contactInfo } from '../data/siteContent'

export function CallToActionSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-24 text-white">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-16 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Prêts à renforcer votre cybersécurité ?
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Passer à l'action
          </p>
          <p className="mt-4 text-base leading-7 text-slate-200">
            Nos experts Innovatech sont disponibles pour auditer votre posture, définir un plan d’action priorisé et
            vous accompagner dans la mise en œuvre d’un dispositif résilient. Parlons de vos enjeux.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ctaHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="text-2xl">{item.icon}</div>
              <h3 className="mt-3 text-sm font-semibold uppercase tracking-[0.15em] text-slate-100">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Adresse</h3>
            <p className="mt-4 text-base text-slate-200">{contactInfo.address}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">Horaires</p>
              <p className="mt-2 text-lg font-semibold">{contactInfo.hours}</p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/40 via-blue-500/30 to-cyan-500/30 p-8 shadow-lg shadow-blue-900/30">
            <h3 className="text-lg font-semibold">Contactez-nous</h3>
            <p className="mt-4 text-base text-slate-100">
              Une cellule dédiée vous répond rapidement pour cadrer votre besoin, partager nos premières recommandations
              et définir la suite de l’accompagnement.
            </p>
            <div className="mt-6 space-y-3">
              <a
                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <span>📞 {contactInfo.phone}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Ligne principale</span>
              </a>
              <a
                href={`tel:${contactInfo.phoneAlt.replace(/\s+/g, '')}`}
                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <span>☎️ {contactInfo.phoneAlt}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Ligne directe</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center justify-between rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <span>✉️ {contactInfo.email}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-cyan-200">Email</span>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold">Restez informés</h3>
            <p className="mt-4 text-base text-slate-200">
              Recevez nos alertes cyber, les retours d’expérience de notre SOC et les meilleures pratiques pour
              protéger vos équipes.
            </p>
            <form className="mt-6 space-y-4">
              <input
                type="email"
                name="newsletter"
                placeholder="Votre adresse email"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400/40"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Je m’inscris
              </button>
            </form>
            <p className="mt-4 text-xs text-slate-400">
              Aucun spam, uniquement des insights utiles. Vous pouvez vous désinscrire à tout moment.
            </p>
          </div>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-sm text-slate-300">
          <p>
            Besoin d’un échange immédiat ? Notre équipe support est disponible 24/7 pour vos incidents critiques et vos
            questions urgentes.
          </p>
        </div>
      </div>
    </section>
  )
}