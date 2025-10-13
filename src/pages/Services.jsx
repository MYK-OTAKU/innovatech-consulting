import { ServicesSection } from '../sections/ServicesSection'
import { differentiators } from '../data/siteContent'

const serviceProcess = [
  {
    title: 'Diagnostic & cartographie',
    description: 'Analyse de maturité cyber, identification des menaces et priorisation des chantiers.',
  },
  {
    title: 'Roadmap & design',
    description: 'Construction d’une feuille de route MSSP / SOC / GRC alignée sur vos objectifs business.',
  },
  {
    title: 'Déploiement & intégration',
    description: 'Mise en œuvre opérationnelle, configuration des outils et transfert de compétences.',
  },
  {
    title: 'Opérations managées',
    description: 'Supervision 24/7, threat hunting, gestion des incidents et reporting exécutif.',
  },
]

export function Services() {
  return (
    <div className="bg-slate-50">
      <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">
            Services
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Des solutions MSSP, SOC et GRC conçues pour protéger vos ambitions
          </h1>
          <p className="max-w-3xl text-base text-slate-200">
            Nous combinons outils, méthodologies et expertise humaine pour bâtir des dispositifs de cybersécurité agiles, évolutifs et mesurables.
          </p>
        </div>
      </div>

      <ServicesSection />

      <section className="bg-white py-24">
        <div className="mx-auto grid w-full max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
              Notre méthodologie
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Un accompagnement end-to-end, du diagnostic à l’opérationnel
            </h2>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Chaque mission est pilotée par un directeur de programme dédié, avec un reporting clair, des indicateurs de performance et un plan d’amélioration continue.
            </p>
            <div className="mt-10 space-y-5">
              {serviceProcess.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-primary-500/15 text-sm font-semibold text-primary-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {differentiators.map(({ title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6">
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-3 text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services
