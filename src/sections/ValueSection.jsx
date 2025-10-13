import { motion } from 'framer-motion'
import { differentiators } from '../data/siteContent'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

const leftColumn = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.16,
    },
  },
}

const rightColumn = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.16,
    },
  },
}

const fadeItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const approachSteps = [
  {
    title: 'Comprendre vos priorités',
    description:
      'Atelier de cadrage avec vos équipes métiers et IT pour clarifier le périmètre, les contraintes et les objectifs.',
  },
  {
    title: 'Concevoir la réponse adaptée',
    description:
      'Design d’un dispositif MSSP, SOC ou GRC modulaire qui s’intègre à votre environnement existant.',
  },
  {
    title: 'Déployer et piloter',
    description:
      'Mise en œuvre opérationnelle, transfert de compétences et indicateurs de suivi partagés.',
  },
]

const testimonial = {
  quote:
    '“Innovatech nous a permis de structurer notre démarche cyber avec une vision claire et des résultats mesurables dès les premières semaines.”',
  author: 'Fatima El Mansouri',
  role: 'DSI — Groupe industriel',
}

export function ValueSection() {
  return (
    <motion.section
      id="valeur"
      className="bg-white py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-20 lg:px-8">
        <motion.div className="flex-1 space-y-6" variants={leftColumn}>
          <motion.h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" variants={fadeItem}>
            Notre approche
          </motion.h2>
          <motion.p className="text-lg leading-8 text-slate-600" variants={fadeItem}>
            Une méthodologie claire pour accélérer votre maturité cybersécurité
          </motion.p>
          <motion.p className="text-base leading-7 text-slate-600" variants={fadeItem}>
            Nous privilégions les démarches simples à déployer, portées par des indicateurs concrets. Chaque mission associe gouvernance, technologie et accompagnement humain pour garantir l’adoption.
          </motion.p>

          <motion.ol
            className="space-y-4"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {approachSteps.map((step, index) => (
              <motion.li
                key={step.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                variants={fadeItem}
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-6 text-sm text-slate-700" variants={fadeItem}>
            <p className="font-semibold text-slate-900">Témoignage client</p>
            <p className="mt-3 italic">{testimonial.quote}</p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-blue-700">
              {testimonial.author} · {testimonial.role}
            </p>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1 space-y-6" variants={rightColumn}>
          <motion.div className="space-y-4" variants={fadeItem}>
            <h3 className="text-lg font-semibold text-slate-900">Ce qui fait notre différence</h3>
            <p className="text-sm text-slate-600">
              En combinant innovation, proximité et culture du résultat, nous bâtissons des dispositifs durables qui s’adaptent à vos enjeux métiers.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {differentiators.map((diff) => (
              <motion.div key={diff.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" variants={fadeItem}>
                <h4 className="text-base font-semibold text-slate-900">{diff.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{diff.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="rounded-2xl border border-slate-200 bg-white p-6" variants={fadeItem}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Engagement qualité
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Chaque projet est suivi par un directeur de mission qui assure le reporting, la coordination des experts et la feuille de route d’amélioration continue.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}