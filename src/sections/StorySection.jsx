import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] },
  },
}

const leftColumn = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.15,
    },
  },
}

const rightColumn = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const fadeItem = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

export function StorySection() {
  return (
    <motion.section
      id="notre-histoire"
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={sectionVariants}
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <motion.div className="space-y-8" variants={leftColumn}>
          <motion.div className="space-y-3" variants={fadeItem}>
            <motion.h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" variants={fadeItem}>
              Notre histoire
            </motion.h2>
            <motion.p className="text-base leading-7 text-slate-600" variants={fadeItem}>
              Une trajectoire guidée par l&apos;exigence et la confiance
            </motion.p>
          </motion.div>

          <motion.div className="space-y-5 text-base leading-7 text-slate-600" variants={fadeItem}>
            <motion.p variants={fadeItem}>
              Depuis notre fondation, nous aidons les organisations publiques et privées à sécuriser leurs transformations en construisant des dispositifs cyber résilients et adaptés à leur réalité terrain.
            </motion.p>
            <motion.p variants={fadeItem}>
              Notre force réside dans une culture opérationnelle forte : écoute active, expertise locale, veille continue et capacité à itérer rapidement aux côtés de vos équipes.
            </motion.p>
            <motion.p variants={fadeItem}>
              Nous croyons à un partenariat de long terme, fondé sur la transparence et des engagements mesurables. Ensemble, nous faisons de la cybersécurité un levier de confiance pour votre croissance.
            </motion.p>
          </motion.div>

          <motion.div className="rounded-3xl bg-slate-50 p-6 text-sm text-slate-600" variants={fadeItem}>
            <p className="font-semibold text-slate-900">Ce qui nous anime</p>
            <p className="mt-2">
              Anticiper les menaces, partager les bonnes pratiques et rester accessibles, en tout temps, pour accompagner vos décisions critiques.
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap gap-4" variants={fadeItem}>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              variants={fadeItem}
            >
              En savoir plus
            </motion.a>
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
              variants={fadeItem}
            >
              Nos offres principales
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.aside
          className="relative overflow-hidden rounded-[26px] border border-slate-100 bg-slate-50/70 shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
          variants={rightColumn}
        >
          <motion.img
            src="/Prioritize.jpeg"
            alt="Équipe Innovatech en réflexion"
            className="h-full w-full object-cover"
            loading="lazy"
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 1.8, ease: [0.19, 1, 0.22, 1] } } }}
          />
          <motion.div
            className="absolute bottom-6 left-6 right-6 rounded-[26px] border border-slate-100 bg-slate-50/95 p-6 shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)] backdrop-blur"
            variants={fadeItem}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">Notre promesse</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Une relation directe avec nos experts, des réponses concrètes et un accompagnement qui évolue au rythme de vos enjeux.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-600">
              Depuis 2009
              <span className="h-1 w-1 rounded-full bg-blue-500" />
              Présence Maroc & Afrique Ouest
            </div>
          </motion.div>
        </motion.aside>
      </div>
    </motion.section>
  )
}