import { ServicesSection } from '../sections/ServicesSection'
import { differentiators } from '../data/siteContent'
import { motion } from 'framer-motion'

const serviceProcess = [
  {
    title: 'Diagnostic & cartographie',
    description: 'Analyse de maturité cyber, identification des menaces et priorisation des chantiers.',
    icon: '🔍',
  },
  {
    title: 'Roadmap & design',
    description: 'Construction d\'une feuille de route MSSP / SOC / GRC alignée sur vos objectifs business.',
    icon: '🗺️',
  },
  {
    title: 'Déploiement & intégration',
    description: 'Mise en œuvre opérationnelle, configuration des outils et transfert de compétences.',
    icon: '⚙️',
  },
  {
    title: 'Opérations managées',
    description: 'Supervision 24/7, threat hunting, gestion des incidents et reporting exécutif.',
    icon: '🛡️',
  },
]

const advantages = [
  {
    title: 'Expertise locale',
    description: 'Une connaissance approfondie du contexte réglementaire et des enjeux cyber au Maroc.',
    icon: '🇲🇦',
  },
  {
    title: 'Équipe certifiée',
    description: 'Des consultants CISSP, CEH, ISO 27001 Lead Auditor pour garantir l\'excellence.',
    icon: '🎓',
  },
  {
    title: 'Technologies de pointe',
    description: 'Partenariats stratégiques avec les leaders mondiaux de la cybersécurité.',
    icon: '🚀',
  },
  {
    title: 'Support réactif',
    description: 'Une disponibilité 24/7 et des temps de réponse garantis par SLA.',
    icon: '⚡',
  },
]

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

export function Services() {
  return (
    <div className="bg-gradient-to-br from-white via-[#C2C4C6]/30 to-white">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-slate-900 to-slate-800 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-28 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl"
            variants={fadeIn}
          >
            Services
          </motion.h1>
          <motion.p 
            className="max-w-3xl text-xl font-semibold leading-8 text-slate-200 sm:text-2xl"
            variants={fadeIn}
          >
            Des solutions MSSP, SOC et GRC conçues pour protéger vos ambitions
          </motion.p>
          <motion.p 
            className="max-w-3xl text-base leading-7 text-slate-200/80 sm:text-lg"
            variants={fadeIn}
          >
            Nous combinons outils, méthodologies et expertise humaine pour bâtir des dispositifs de cybersécurité agiles, évolutifs et mesurables.
          </motion.p>
        </div>
      </motion.div>

      <ServicesSection />

      {/* Méthodologie Section - AMÉLIORÉE */}
      <motion.section 
        className=" py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-16 text-center" variants={fadeIn}>
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Notre méthodologie
            </h2>
            <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
              Un accompagnement end-to-end, du diagnostic à l'opérationnel
            </p>
            <p className="mt-6 text-base leading-7 text-slate-600">
              Chaque mission est pilotée par un directeur de programme dédié, avec un reporting clair, des indicateurs de performance et un plan d'amélioration continue.
            </p>
          </motion.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Process Steps */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {serviceProcess.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="group relative flex gap-6 rounded-3xl border border-slate-200 p-6 shadow-[0_15px_35px_-15px_rgba(15,23,42,0.1)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(15,23,42,0.15)]"
                  variants={fadeIn}
                >
                  <div className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-2xl shadow-lg">
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center gap-3">
                      <span className="text-xs font-bold text-primary-600">
                        ÉTAPE {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Differentiators */}
            <motion.div 
              className="grid gap-6 sm:grid-cols-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {differentiators.map(({ title, description }) => (
                <motion.div
                  key={title}
                  className="flex flex-col justify-between rounded-3xl border border-slate-200  p-6 shadow-[0_15px_35px_-15px_rgba(15,23,42,0.08)] transition hover:-translate-y-1"
                  variants={fadeIn}
                >
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
                  </div>
                  <div className="mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary-500 to-primary-600" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Avantages Section - NOUVELLE */}
      <motion.section 
        className=" py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div className="mb-16 text-center" variants={fadeIn}>
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Pourquoi choisir Innovatech ?
            </h2>
            <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
              L'excellence au service de votre cybersécurité
            </p>
          </motion.div>

          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {advantages.map((advantage) => (
              <motion.div
                key={advantage.title}
                className="group rounded-3xl border border-slate-200 p-8 text-center shadow-[0_20px_40px_-20px_rgba(15,23,42,0.12)] transition hover:-translate-y-2 hover:shadow-[0_30px_60px_-20px_rgba(15,23,42,0.18)]"
                variants={fadeIn}
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500/10 to-primary-600/10 text-3xl transition group-hover:scale-110">
                  {advantage.icon}
                </div>
                <h3 className="mb-3 text-lg font-semibold text-slate-900">
                  {advantage.title}
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section - NOUVELLE */}
      <motion.section 
        className=" py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-12 text-center text-white shadow-2xl"
            variants={fadeIn}
          >
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
              Prêt à sécuriser votre infrastructure ?
            </h2>
            <p className="mb-8 text-base leading-7 text-white/90 sm:text-lg">
              Nos experts sont à votre disposition pour évaluer vos besoins et vous proposer une solution sur mesure.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center bg-white rounded-full px-8 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Demander un audit gratuit
              </a>
              <a 
                href="/about" 
                className="inline-flex items-center justify-center rounded-full border-2 border-white/40 px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
              >
                Découvrir notre expertise
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services