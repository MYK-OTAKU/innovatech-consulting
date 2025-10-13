import { motion } from 'framer-motion'
import { partners as partnerLogos } from '../data/siteContent'

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      staggerChildren: 0.12,
    },
  },
}

const logoVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

export function PartnersSection() {
  return (
    <motion.section
      className="bg-white py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={sectionVariants}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div className="mx-auto max-w-2xl text-center" variants={logoVariants}>
          <motion.h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl" variants={logoVariants}>
            Nos partenaires
          </motion.h2>
          <motion.p className="mt-6 text-lg leading-8 text-slate-600" variants={logoVariants}>
            Ils nous font confiance
          </motion.p>
          <motion.p className="mt-4 text-base leading-7 text-slate-600" variants={logoVariants}>
            Des acteurs internationaux et régionaux s'appuient sur notre expertise pour protéger leurs environnements
            critiques et accélérer leur transformation numérique.
          </motion.p>
        </motion.div>

        <motion.div
          className="logos-grid mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4 lg:gap-8"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {partnerLogos.map((partner) => (
            <motion.div
              key={partner.name}
              className="logo-item flex min-h-[120px] items-center justify-center rounded-2xl bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(15,23,42,0.12)]"
              variants={logoVariants}
            >
              {partner.logo ? (
                <motion.img
                  src={partner.logo}
                  alt={partner.name}
                  className="partner-logo max-h-20 max-w-[140px] object-contain"
                  loading="lazy"
                />
              ) : (
                <span className="placeholder-logo text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 text-center">
                  {partner.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}