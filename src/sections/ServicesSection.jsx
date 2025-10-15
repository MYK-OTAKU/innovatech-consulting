import { motion } from 'framer-motion'
import { services } from '../data/siteContent'

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.19, 1, 0.22, 1],
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.19, 1, 0.22, 1],
    },
  },
}

export function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl space-y-4" variants={cardVariants}>
          <motion.h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" variants={cardVariants}>
            Nos services
          </motion.h2>
          <motion.p className="text-lg leading-8 text-slate-600" variants={cardVariants}>
            Découvrez nos offres MSSP, CyberSOC, CyberDefense et GRC
          </motion.p>
          <motion.p className="text-base leading-7 text-slate-600" variants={cardVariants}>
            Des solutions modulaires et complémentaires pour protéger vos systèmes d&apos;information, accélérer vos projets et garantir la conformité de vos environnements critiques.
          </motion.p>
        </motion.div>

        <motion.div
          className="mt-12 grid gap-8 lg:grid-cols-3"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="flex h-full flex-col overflow-hidden rounded-[26px] border border-slate-100 bg-slate-50/70 transition hover:-translate-y-1 hover:shadow-[0_25px_45px_-20px_rgba(15,23,42,0.15)]"
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 150, damping: 20 }}
            >
              <motion.div className="h-52 overflow-hidden" layout>
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex flex-1 flex-col gap-6 p-8">
                <div className="space-y-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{service.description}</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-900/10 text-slate-900">
                        ✓
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-900 px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-900 hover:text-white"
                >
                  En savoir plus
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}