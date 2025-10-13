import { ctaHighlights } from '../data/siteContent'

export function CTASection() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-12 px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          Prêt à renforcer votre posture cyber ?
        </h2>
        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Rejoignez les entreprises qui font confiance à Innovatech Consulting pour piloter leur transformation numérique en toute sécurité. Nos experts vous accompagnent à chaque étape.
        </p>
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ctaHighlights.map(({ icon, title, description }) => (
            <div key={title} className="rounded-3xl border border-slate-200 bg-white p-6">
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Demander un audit
          </a>
          <a
            href="mailto:contact@innovatech-consulting.com"
            className="inline-flex items-center justify-center rounded-full border border-slate-900 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Écrire à un expert
          </a>
        </div>
      </div>
    </section>
  )
}
