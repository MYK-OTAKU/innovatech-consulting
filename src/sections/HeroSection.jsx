import { motion } from 'framer-motion'
import { stats } from '../data/siteContent'
import LightRays from '../components/LightRays'

const highlights = [
  'SOC hybride basé au Maroc avec analystes certifiés',
  'Audit de posture livré en moins de 15 jours',
  'Tableaux de bord clairs pour piloter vos risques',
]

const sectionReveal = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
}

const heroLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.15,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

const heroRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

export function HeroSection() {
  return (
    <motion.section
      className="bg-white relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sectionReveal}
    >
      {/* LightRays Background Effect */}
      <div className="absolute inset-0 w-full min-h-screen pointer-events-none z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="green"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>

      <div className="mx-auto flex w-full max-w-6xl min-h-[70vh] flex-col-reverse gap-12 px-4 pb-24 pt-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 relative z-10">
        <motion.div className="flex-1 space-y-8" variants={heroLeft}>
          {/* <motion.span
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-100 px-5 py-2 text-xs font-medium tracking-[0.2em] text-slate-500"
            variants={heroItem}
          >
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            La cybersécurité N°1 au Maroc · Solutions sur mesure
          </motion.span> */}
          <motion.div className="space-y-5" variants={heroItem}>
            <motion.h1
              className="text-4xl font-black tracking-tight text-slate-900 sm:text-6xl sm:leading-[1.05]"
              variants={heroItem}
            >
              Sécurisez l&apos;avenir de votre entreprise
            </motion.h1>
            <motion.p className="max-w-xl text-base leading-7 text-slate-600" variants={heroItem}>
              Offrez-vous des services de cybersécurité personnalisés pour protéger vos systèmes d&apos;information et transformer les menaces en opportunités.
            </motion.p>
          </motion.div>
          <motion.ul className="space-y-3 text-sm text-slate-600" variants={heroItem}>
            {highlights.map((item) => (
              <motion.li key={item} className="flex items-start gap-3" variants={heroItem}>
                <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-100 text-blue-600">
                  ✓
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
          <motion.div className="flex flex-wrap gap-3" variants={heroItem}>
            <motion.a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
              variants={heroItem}
            >
              Contactez-nous
            </motion.a>
            <motion.a
              href="#notre-histoire"
              className="inline-flex items-center justify-center rounded-full border border-slate-900 px-7 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
              variants={heroItem}
            >
              Notre histoire
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div className="flex-1" variants={heroRight}>
          <motion.div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60" variants={heroRight}>
            <motion.img
              src="/secure.jpeg"
              alt="Illustration cybersécurité Innovatech"
              className="h-[450px] w-full object-cover"
              loading="lazy"
              variants={{
                hidden: { opacity: 0, scale: 0.94 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] },
                },
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="border-t border-slate-100 bg-white">
        <motion.dl
          className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 px-4 py-8 sm:grid-cols-2 lg:grid-cols-4 sm:px-6 lg:px-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {stats.map((item) => (
            <motion.div
              key={item.label}
              className="rounded-[26px] border border-slate-100 bg-slate-50/70 p-6 text-left transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
              variants={heroItem}
            >
              <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600">
                {item.label}
              </dt>
              <dd className="mt-3 text-3xl font-bold text-slate-800">{item.value}</dd>
              {item.description ? (
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              ) : null}
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </motion.section>
  )
}