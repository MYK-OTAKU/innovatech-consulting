import { missionHighlights, projects } from '../data/siteContent'

export function MissionSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-16 px-4 sm:px-6 lg:grid-cols-[1.2fr_1fr] lg:px-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Notre mission
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Garantir la sécurité, la résilience et la croissance de vos systèmes d'information
          </p>
          <p className="text-base leading-7 text-slate-600">
            Ancrée dans les principes de l'innovation et de la sécurité dès la conception, Innovatech Consulting s'est assignée pour mission d'être le phare éclairant le chemin de ses clients dans l'océan tumultueux de la digitalisation.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {missionHighlights.map(({ icon, title, description }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
                <span className="text-2xl">{icon}</span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-8 shadow-inner">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">
            Projets innovants
          </p>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Nous co-développons des solutions uniques pour soutenir la transformation numérique sécurisée de nos clients.
          </p>
          <div className="mt-6 space-y-5 text-sm text-slate-600">
            {projects.map((project) => (
              <div key={project.name} className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-900">{project.name}</p>
                  <p className="text-sm text-slate-500">{project.description}</p>
                </div>
                <a
                  href={project.href}
                  className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500 transition hover:text-primary-400"
                >
                  {project.ctaLabel}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            <p className="font-semibold text-slate-900">Notre promesse</p>
            <p className="mt-2">
              Allier innovation, excellence opérationnelle et éthique pour offrir des solutions durables qui protègent vos données sensibles et favorisent votre croissance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
