import { motion } from 'framer-motion'
import { ContactHero } from '../sections/ContactHero'
import { contactInfo } from '../data/siteContent'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.19, 1, 0.22, 1] },
  },
}

const contactChannels = [
  {
    title: 'Support MSSP & SOC',
    description: 'Monitoring 24/7, gestion d\'incidents, escalade prioritaire.',
    icon: '🛡️',
    action: 'support@innovatech-consulting.com',
  },
  {
    title: 'Conseil & projets GRC',
    description: 'SMSI, PCA/PRA, schémas directeurs, conformité ISO & PCI-DSS.',
    icon: '📊',
    action: 'grc@innovatech-consulting.com',
  },
  {
    title: 'Formations & sensibilisation',
    description: 'Programmes sur mesure pour vos collaborateurs et dirigeants.',
    icon: '🎓',
    action: 'academy@innovatech-consulting.com',
  },
]

const faqs = [
  {
    question: 'Quel est votre délai de réponse moyen ?',
    answer:
      'Nous répondons à toute sollicitation sous 2 heures ouvrées. Pour les incidents critiques, un canal de réponse prioritaire est activé instantanément.',
  },
  {
    question: 'Proposez-vous un audit cyber gratuit ?',
    answer:
      'Oui, un pré-audit de maturité cyber est offert pour qualifier vos enjeux et cartographier vos priorités à court terme.',
  },
  {
    question: 'Peut-on externaliser notre SOC chez vous ?',
    answer:
      'Nous opérons un CyberSOC basé au Maroc, disponible 24/7, avec threat hunting, réponse aux incidents et reporting exécutif.',
  },
  {
    question: 'Travaillez-vous avec des organisations internationales ?',
    answer:
      'Nous accompagnons des clients en Europe et en Afrique, avec des dispositifs conformes aux exigences réglementaires locales.',
  },
]

export function Contact() {
  return (
    <div className="bg-white">
      <ContactHero />

      <section className="pt-26 pb-4">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {/* Contact Channels Section */}
            <motion.div
              className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-slate-900">
                Choisissez votre canal de contact
              </h2>
              <p className="mt-3 text-base text-slate-600">
                Notre équipe d'experts est disponible pour concevoir avec vous une trajectoire cyber réaliste, priorisée et mesurable.
              </p>

              {/* Contact Channels Grid */}
              <motion.div
                className="mt-10 grid gap-6 sm:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {contactChannels.map((channel) => (
                  <motion.div
                    key={channel.title}
                    className="group rounded-[22px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(15,23,42,0.2)]"
                    variants={cardVariants}
                  >
                    <span className="text-3xl">{channel.icon}</span>
                    <h3 className="mt-4 text-base font-bold text-slate-900">
                      {channel.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{channel.description}</p>
                    <a
                      href={`mailto:${channel.action}`}
                      className="mt-5 inline-block break-all text-xs font-semibold text-primary-500 transition hover:text-primary-600"
                    >
                      {channel.action}
                    </a>
                  </motion.div>
                ))}
              </motion.div>

              {/* Bureau & Horaires */}
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">📍</span>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-700">
                      Bureau Casablanca
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{contactInfo.address}</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-primary-500 transition hover:text-primary-600"
                  >
                    Voir sur Google Maps
                    <span aria-hidden>↗</span>
                  </a>
                </div>
                <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">⏰</span>
                    <p className="text-sm font-bold uppercase tracking-wider text-slate-700">
                      Horaires & urgences
                    </p>
                  </div>
                  <p className="mt-4 text-sm text-slate-600">
                    <span className="font-semibold text-slate-900">Standard :</span> {contactInfo.hours}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-green-600">
                    SOC & incidents : 24/7
                  </p>
                  <div className="mt-5 space-y-1">
                    <a
                      href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}
                      className="block text-sm font-semibold text-slate-900 hover:text-primary-500"
                    >
                      {contactInfo.phone}
                    </a>
                    <a
                      href={`tel:${contactInfo.phoneAlt.replace(/\s/g, '')}`}
                      className="block text-sm font-semibold text-slate-900 hover:text-primary-500"
                    >
                      {contactInfo.phoneAlt}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold text-slate-900">Questions fréquentes</h2>
              <p className="mt-3 text-base text-slate-600">
                Anticipez vos prochains échanges avec nos équipes
              </p>
              <div className="mt-8 space-y-4">
                {faqs.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-[20px] border border-slate-200 bg-slate-50 p-6 transition hover:border-slate-300"
                  >
                    <summary className="flex cursor-pointer items-start justify-between text-left font-semibold text-slate-900">
                      <span className="flex-1 text-base">{faq.question}</span>
                      <span className="ml-4 text-2xl text-primary-500 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>

              {/* Emergency Contact */}
              <div className="mt-8 rounded-[20px] border-2 border-red-200 bg-gradient-to-br from-red-50 to-orange-50 p-6">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚨</span>
                  <p className="font-bold text-slate-900">Besoin d'une réponse immédiate ?</p>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  Contactez notre centre de réponse aux incidents 24/7 :
                </p>
                <a
                  href="mailto:incident@innovatech-consulting.com"
                  className="mt-3 block text-base font-bold text-red-600 hover:text-red-700"
                >
                  incident@innovatech-consulting.com
                </a>
                <p className="mt-2 text-xs text-slate-600">
                  ⚡ Temps de réponse moyen : moins de 15 minutes
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact