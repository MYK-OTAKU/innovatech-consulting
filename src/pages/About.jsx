import React from 'react'
import { motion } from 'framer-motion'

const parcours = [
  {
    year: '2010',
    title: 'Fondation',
    desc: "Création d'Innovatech Consulting avec la vision de sécuriser la transformation digitale des entreprises marocaines.",
  },
  {
    year: '2012',
    title: 'Premiers Grands Comptes',
    desc: 'Accompagnement de nos premiers clients stratégiques dans la sécurisation de leurs infrastructures critiques.',
  },
  {
    year: '2015',
    title: 'Lancement CyberSOC',
    desc: 'Ouverture de notre Security Operations Center 24/7 pour la surveillance et la détection proactive des menaces.',
  },
  {
    year: '2018',
    title: 'Certifications ISO',
    desc: 'Obtention de nos certifications ISO 27001 et expansion de notre offre GRC pour accompagner la conformité réglementaire.',
  },
  {
    year: '2021',
    title: 'MSSP & Threat Hunting',
    desc: 'Lancement de notre offre MSSP complète et équipe dédiée au Threat Hunting pour anticiper les cybermenaces.',
  },
  {
    year: '2025',
    title: 'Leader Régional',
    desc: "150+ entreprises protégées, 2000+ heures de consulting, et position de leader en cybersécurité au Maroc.",
  },
]

const team = [
  {
    name: 'Karim BENALI',
    role: 'Directeur Cybersécurité / MSSP',
    img: '/Images/team-working-office.jpg',
    desc: "Expert en cybersécurité avec +15 ans d'expérience. Spécialiste MSSP, CyberSOC et conformité, il accompagne clients et mentor d'équipes techniques.",
    tags: ['Pentesting', 'SOC Manager', 'Threat Hunting'],
  },
  {
    name: 'Sarah ALAOUI',
    role: 'Directrice GRC & Conformité',
    img: '/Images/person-computer-desktop.jpg',
    desc: "Experte en gouvernance et conformité avec +12 ans d'expérience, Sarah pilote les projets GRC et accompagne la mise en conformité ISO.",
    tags: ['Audit', 'Risk Management', 'Accompagnement ISO'],
  },
]

const projets = [
  {
    name: 'DIGICARD',
    desc: 'Solution de cartes de visite digitales sécurisées et traçables.',
    img: '/LoginBackground.jpeg',
    cta: 'Explorer',
  },
  {
    name: 'Cyber MSSP',
    desc: 'Offre MSSP complète pour une cybersécurité proactive.',
    img: '/Images/code-reflection-digital.webp',
    cta: 'En savoir plus',
  },
]

// Animation variants
const sectionReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.4,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.25,
    },
  },
}

const fadeItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const leftColumn = {
  hidden: { opacity: 0, x: -90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.8,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.3,
    },
  },
}

const rightColumn = {
  hidden: { opacity: 0, x: 90 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.9,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.28,
      delayChildren: 0.15,
    },
  },
}

export default function About() {
  return (
    <div className="bg-gradient-to-br from-white via-[#C2C4C6]/30 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/bureau.avif" 
            alt="Bureau Innovatech" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-28 sm:px-6 lg:px-8">
          <motion.div className="max-w-4xl space-y-6" variants={leftColumn}>
            <motion.h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl" variants={fadeItem}>
              À propos de<br />Innovatech Consulting
            </motion.h1>
            <motion.p className="text-lg leading-8 text-white/90 sm:text-xl lg:text-2xl" variants={fadeItem}>
              Votre partenaire dans la digitalisation sécurisée – Pionnier de la cybersécurité au Maroc
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
          >
            <motion.div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white" variants={cardVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Expertise</p>
              <p className="mt-2 text-3xl font-semibold">15 ans</p>
            </motion.div>
            <motion.div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white" variants={cardVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Clients</p>
              <p className="mt-2 text-3xl font-semibold">150+</p>
            </motion.div>
            <motion.div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white" variants={cardVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Consulting</p>
              <p className="mt-2 text-3xl font-semibold">2K+</p>
            </motion.div>
            <motion.div className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white" variants={cardVariants}>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60">Support</p>
              <p className="mt-2 text-3xl font-semibold">24/7</p>
            </motion.div>
          </motion.div>
          <motion.div className="flex flex-wrap gap-4" variants={fadeItem}>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-100"
            >
              Contactez-nous
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Découvrir nos solutions
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <motion.section 
        className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div
            className="space-y-6"
            variants={leftColumn}
          >
            <motion.h2 className="text-4xl font-bold text-slate-900 sm:text-5xl" variants={fadeItem}>
              Notre mission
            </motion.h2>
            <motion.p className="text-2xl font-semibold text-slate-700 sm:text-3xl" variants={fadeItem}>
              Un accompagnement cyber complet, de la stratégie à l'exécution
            </motion.p>
            <motion.div className="space-y-4 text-base leading-7 text-slate-600" variants={fadeItem}>
              <p>
                Fondée sur l'expertise et le dévouement, notre entreprise vise à garantir la sécurité et la résilience de vos systèmes d'information grâce à une gamme de services spécialisés.
              </p>
              <p>
                Ancrée dans les principes de l'innovation et de la sécurité dès la conception, Innovatech Consulting s'est assignée pour mission d'être le phare éclairant le chemin de ses clients dans l'océan tumultueux de la digitalisation.
              </p>
              <p>
                Nous mettons à leur disposition des services avant-gardistes, spécifiquement conçus pour sécuriser et optimiser leur transformation numérique.
              </p>
              <p>
                Notre transparence inébranlable et notre engagement sans faille sont les fondements mêmes de notre réputation inaltérable.
              </p>
              <p>
                Chaque interaction avec nos clients est guidée par notre volonté de dépasser leurs attentes et de leur fournir des solutions qui assurent non seulement la sécurité de leurs systèmes, mais aussi leur croissance et leur innovation.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid gap-5 rounded-[26px] border border-slate-100 bg-slate-50/70 p-8 transition hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
            variants={rightColumn}
          >
            <motion.p className="text-xl font-bold text-slate-900" variants={fadeItem}>
              Ce qui nous distingue
            </motion.p>
            <motion.ul className="space-y-4 text-sm text-slate-600" variants={staggerContainer}>
              <motion.li className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-4 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]" variants={cardVariants}>
                <p className="text-base font-semibold text-slate-900">🧭 Mission</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Être l'allié stratégique des organisations ambitieuses dans leur transformation numérique sécurisée.
                </p>
              </motion.li>
              <motion.li className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-4 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]" variants={cardVariants}>
                <p className="text-base font-semibold text-slate-900">🤝 Engagement</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Transparence, accompagnement personnalisé et amélioration continue de vos dispositifs de sécurité.
                </p>
              </motion.li>
              <motion.li className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-4 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]" variants={cardVariants}>
                <p className="text-base font-semibold text-slate-900">🚀 Innovation</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Veille technologique permanente et adoption des meilleures pratiques du marché.
                </p>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Valeurs Section */}
      <motion.section 
        className=" py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-4 text-center"
            variants={fadeItem}
          >
            <motion.h2 className="text-4xl font-bold text-slate-900 sm:text-5xl" variants={fadeItem}>
              Nos valeurs
            </motion.h2>
            <motion.p className="text-xl font-semibold text-slate-700 sm:text-2xl" variants={fadeItem}>
              Les piliers de notre engagement quotidien
            </motion.p>
            <motion.p className="text-base leading-7 text-slate-600" variants={fadeItem}>
              Intégrité, excellence, innovation et satisfaction client guident chacune de nos décisions.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
            variants={staggerContainer}
          >
            <motion.div
              className="flex flex-col gap-4 rounded-[26px] border border-slate-100 bg-slate-50/70 p-8 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
              variants={cardVariants}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                🤝
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Intégrité</h3>
              <p className="text-sm leading-6 text-slate-600">
                Notre engagement envers l'intégrité et la transparence oriente chacune de nos actions. 
                La confiance que nous cultivons avec nos clients est le socle de relations durables et fructueuses.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 rounded-[26px] border border-slate-100 bg-slate-50/70 p-8 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
              variants={cardVariants}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                🏆
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Excellence</h3>
              <p className="text-sm leading-6 text-slate-600">
                Nous aspirons à une excellence opérationnelle et technologique inégalée, érigeant chaque défi 
                en une opportunité d'amélioration continue.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 rounded-[26px] border border-slate-100 bg-slate-50/70 p-8 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
              variants={cardVariants}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                🚀
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Innovation</h3>
              <p className="text-sm leading-6 text-slate-600">
                En adoptant une approche avant-gardiste, nous anticipons et répondons aux défis de demain, 
                demeurant à l'avant-garde des nouvelles technologies et des meilleures pratiques.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 rounded-[26px] border border-slate-100 bg-slate-50/70 p-8 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
              variants={cardVariants}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-xl text-white">
                🌟
              </div>
              <h3 className="text-lg font-semibold text-slate-900">Satisfaction Client</h3>
              <p className="text-sm leading-6 text-slate-600">
                La satisfaction de nos clients est au cœur de tout ce que nous faisons, chaque solution 
                est pensée pour répondre à leurs attentes et assurer leur croissance et leur sécurité.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-4 text-center"
            variants={fadeItem}
          >
            <motion.h2 className="text-4xl font-bold text-slate-900 sm:text-5xl" variants={fadeItem}>
              Notre équipe
            </motion.h2>
            <motion.p className="text-xl font-semibold text-slate-700 sm:text-2xl" variants={fadeItem}>
              Des experts passionnés à votre service
            </motion.p>
            <motion.p className="text-base leading-7 text-slate-600" variants={fadeItem}>
              Nous sommes immensément fiers de notre cohorte d'experts passionnés, dont l'engagement envers la réussite 
              de nos clients demeure inflexible.
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-16 flex justify-center"
            variants={staggerContainer}
          >
            <div className="grid gap-8 sm:grid-cols-2 max-w-4xl">
              {team.map((member) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col items-center text-center rounded-[26px] border border-slate-100 bg-slate-50/70 p-8 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
                  variants={cardVariants}
                >
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="mb-6 h-32 w-32 rounded-full border-4 border-slate-100 object-cover shadow-lg" 
                  />
                  <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{member.role}</p>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{member.desc}</p>
                  {member.tags && member.tags.length > 0 && (
                    <div className="mt-6 flex flex-wrap justify-center gap-2">
                      {member.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section 
        className=" py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-4 text-center"
            variants={fadeItem}
          >
            <motion.h2 className="text-4xl font-bold text-black sm:text-5xl" variants={fadeItem}>
              Notre parcours
            </motion.h2>
            <motion.p className="text-xl font-semibold text-black/80 sm:text-2xl" variants={fadeItem}>
              15 ans d'excellence au service de la cybersécurité
            </motion.p>
            <motion.p className="text-base leading-7 text-black/70" variants={fadeItem}>
              Découvrez les moments clés qui ont façonné Innovatech Consulting et notre expertise
            </motion.p>
          </motion.div>

          <div className="relative mt-20">
            {/* Ligne verticale centrale */}
            <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-black/20 lg:block" />

            <div className="space-y-16">
              {parcours.map((step, idx) => (
                <div
                  key={step.year}
                  className="relative grid gap-8 lg:grid-cols-2 lg:gap-12"
                >
                  <motion.div
                    className={`${idx % 2 === 0 ? '' : 'lg:order-2'}`}
                    variants={idx % 2 === 0 ? leftColumn : rightColumn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <div className={`space-y-4 ${idx % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <span className="inline-block rounded-full bg-black/10 px-4 py-1 text-sm font-bold text-black">
                        {step.year}
                      </span>
                      <h3 className="text-xl font-semibold text-black">{step.title}</h3>
                      <p className="text-sm leading-6 text-black/70">{step.desc}</p>
                    </div>
                  </motion.div>

                  <div className={`hidden lg:block ${idx % 2 === 0 ? 'lg:order-2' : ''}`} />
                  <div className="absolute left-1/2 top-0 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-black lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        className=" py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="space-y-4 text-center"
            variants={fadeItem}
          >
            <motion.h2 className="text-4xl font-bold text-slate-900 sm:text-5xl" variants={fadeItem}>
              Projets innovants
            </motion.h2>
            <motion.p className="text-xl font-semibold text-slate-700 sm:text-2xl" variants={fadeItem}>
              Nos solutions avant-gardistes
            </motion.p>
            <motion.p className="text-base leading-7 text-slate-600" variants={fadeItem}>
              Découvrez DigiCard, notre solution de cartes de visite digitales, et notre offre MSSP pour une cybersécurité proactive
            </motion.p>
          </motion.div>

          <motion.div 
            className="mt-16 grid gap-6 md:grid-cols-2"
            variants={staggerContainer}
          >
            {projets.map((projet) => (
              <motion.div
                key={projet.name}
                className="group overflow-hidden rounded-[26px] border border-slate-100 bg-slate-50/70 shadow-[0_25px_45px_-20px_rgba(15,23,42,0.18)] transition hover:-translate-y-1"
                variants={cardVariants}
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={projet.img} 
                    alt={projet.name} 
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-8">
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">{projet.name}</h3>
                  <p className="mb-6 text-sm leading-6 text-slate-600">{projet.desc}</p>
                  <a 
                    href="/contact" 
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {projet.cta}
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Final */}
      <motion.section 
        className=" py-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionReveal}
      >
        <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-10 text-center transition hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
            variants={fadeItem}
          >
            <h2 className="mb-4 text-3xl font-bold text-slate-900">
              Prêt à sécuriser votre entreprise ?
            </h2>
            <p className="mb-8 text-base leading-7 text-slate-600">
              Discutons de vos besoins en cybersécurité et découvrez comment Innovatech Consulting 
              peut protéger vos actifs critiques.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a 
                href="/contact" 
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                Demander un audit gratuit
              </a>
              <a 
                href="/services" 
                className="inline-flex items-center justify-center rounded-full border border-slate-900 px-8 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
              >
                Découvrez nos services
              </a>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}