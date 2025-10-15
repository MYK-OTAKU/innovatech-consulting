import { motion } from 'framer-motion'
import { ContactHero } from '../sections/ContactHero'
import { contactInfo } from '../data/siteContent'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.19, 1, 0.22, 1] },
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
      'Nous répondons à toute sollicitation sous 2 heures ouvrées. Pour les incidents critiques, un canal de réponse prioritaire est activé instantanément avec une équipe dédiée disponible 24/7.',
    icon: '⏱️',
  },
  {
    question: 'Proposez-vous un audit cyber gratuit ?',
    answer:
      'Oui, un pré-audit de maturité cyber est offert pour qualifier vos enjeux et cartographier vos priorités à court terme. Cet audit inclut une analyse de vos vulnérabilités principales et des recommandations actionnables.',
    icon: '🔍',
  },
  {
    question: 'Peut-on externaliser notre SOC chez vous ?',
    answer:
      'Nous opérons un CyberSOC basé au Maroc, disponible 24/7, avec threat hunting proactif, réponse aux incidents en temps réel et reporting exécutif mensuel. Nos analystes sont certifiés et utilisent les technologies SIEM les plus avancées.',
    icon: '🛡️',
  },
  {
    question: 'Travaillez-vous avec des organisations internationales ?',
    answer:
      'Nous accompagnons des clients en Europe, en Afrique et au Moyen-Orient, avec des dispositifs conformes aux exigences réglementaires locales (RGPD, ISO 27001, PCI-DSS). Notre expertise multilingue facilite les échanges internationaux.',
    icon: '🌍',
  },
  {
    question: 'Quels sont vos tarifs et modes de facturation ?',
    answer:
      'Nos tarifs varient selon le type de service : forfait mensuel pour le MSSP/SOC, régie ou forfait pour les missions de conseil GRC, et tarifs dégressifs pour les formations. Nous proposons des devis personnalisés adaptés à votre budget et vos besoins.',
    icon: '💰',
  },
  {
    question: 'Offrez-vous des formations en cybersécurité ?',
    answer:
      'Oui, nous proposons des programmes de formation sur mesure : sensibilisation des collaborateurs, formation technique des équipes IT, préparation aux certifications (CISSP, CEH), et simulations d\'attaques (phishing, ingénierie sociale).',
    icon: '🎓',
  },
  {
    question: 'Comment gérez-vous la confidentialité de nos données ?',
    answer:
      'Nous appliquons des protocoles stricts de confidentialité : NDA systématique, chiffrement end-to-end, segmentation des environnements clients, et conformité ISO 27001. Vos données ne sont jamais partagées avec des tiers.',
    icon: '🔒',
  },
  {
    question: 'Quelles technologies utilisez-vous dans votre SOC ?',
    answer:
      'Notre SOC s\'appuie sur une stack technologique de pointe : SIEM (Splunk, QRadar), EDR (CrowdStrike, SentinelOne), SOAR pour l\'automatisation, Threat Intelligence feeds, et outils de forensics. Nous intégrons également vos solutions existantes.',
    icon: '⚙️',
  },
]

export function Contact() {
  return (
    <div className="bg-gradient-to-br from-white via-[#C2C4C6]/30 to-white">
      <ContactHero />

      <section className="py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* Contact Channels Section */}
            <motion.div
              className="rounded-[28px] border border-slate-200  p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)]"
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
                    className="group rounded-[22px] border border-slate-200  p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_-10px_rgba(15,23,42,0.2)]"
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
                <div className="rounded-[22px] border border-slate-200 p-6">
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

            {/* FAQ Section Redesigned */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeIn}
            >
              {/* Header */}
              <div className="rounded-[28px] border border-slate-200  p-10 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)]">
                <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
                  Questions fréquentes
                </h2>
                <p className="mt-4 text-xl font-semibold text-slate-700 sm:text-2xl">
                  Anticipez vos prochains échanges avec nos équipes
                </p>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Trouvez rapidement les réponses aux questions les plus courantes sur nos services de cybersécurité
                </p>
              </div>

              {/* FAQ Grid - 2 colonnes */}
              <motion.div 
                className="grid gap-4 md:grid-cols-2"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {faqs.map((faq, index) => (
                  <motion.details
                    key={faq.question}
                    className="group rounded-[24px] border border-slate-200  p-6 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] transition-all hover:shadow-[0_12px_40px_-8px_rgba(15,23,42,0.18)]"
                    variants={cardVariants}
                  >
                    <summary className="flex cursor-pointer items-start justify-between gap-4 text-left">
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-primary-500/10 text-xl">
                          {faq.icon}
                        </span>
                        <h3 className="flex-1 text-sm font-bold text-slate-900">{faq.question}</h3>
                      </div>
                      <span className="flex h-6 w-6 flex-none items-center justify-center rounded-lg bg-slate-100 text-sm text-slate-600 transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="ml-13 mt-4 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                  </motion.details>
                ))}
              </motion.div>

              {/* Localisation avec Google Maps */}
              <motion.div
                className="rounded-[28px] border border-slate-200 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.2)] overflow-hidden"
                variants={fadeIn}
              >
                <div className="p-10 pb-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-2xl">
                      📍
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Notre localisation</h3>
                      <p className="text-sm text-slate-600">Visitez nos bureaux à Casablanca</p>
                    </div>
                  </div>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Adresse</p>
                        <p className="text-base leading-relaxed text-slate-900">{contactInfo.address}</p>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Téléphone</p>
                        <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="block text-base font-semibold text-slate-900 hover:text-primary-600">
                          {contactInfo.phone}
                        </a>
                        <a href={`tel:${contactInfo.phoneAlt.replace(/\s/g, '')}`} className="block text-base font-semibold text-slate-900 hover:text-primary-600">
                          {contactInfo.phoneAlt}
                        </a>
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Horaires</p>
                        <p className="text-base text-slate-900">{contactInfo.hours}</p>
                        <p className="text-sm font-semibold text-green-600 mt-1">SOC 24/7 disponible</p>
                      </div>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                      >
                        Itinéraire Google Maps
                        <span>↗</span>
                      </a>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.2258623756115!2d-7.6389570231093264!3d33.52151284556583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda62dba5bf1c4fd%3A0xf10f650ef3b3315e!2sFlorida%20Center%20Park!5e0!3m2!1sfr!2sma!4v1760391247691!5m2!1sfr!2sma" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Localisation Innovatech Consulting"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Emergency Contact Card */}
              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  className="rounded-[24px] border-2 border-red-300 bg-gradient-to-br from-red-50 via-orange-50 to-red-50 p-8"
                  variants={fadeIn}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-2xl shadow-lg">
                      🚨
                    </div>
                    <div>
                      <p className="text-lg font-bold text-slate-900">Urgence cyber</p>
                      <p className="text-sm text-slate-700">Incident critique en cours ?</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-700 mb-4">
                    Notre CSIRT est disponible 24/7 pour traiter vos urgences
                  </p>
                  <div className="space-y-2">
                    <a
                      href="mailto:incident@innovatech-consulting.com"
                      className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
                    >
                      <span>📧</span>
                      incident@innovatech-consulting.com
                    </a>
                    <a
                      href="tel:+212537778899"
                      className="flex items-center gap-2 text-sm font-bold text-red-600 hover:text-red-700"
                    >
                      <span>📞</span>
                      +212 5 37 77 88 99
                    </a>
                  </div>
                  <div className="mt-4 rounded-lg bg-white/60 px-4 py-2">
                    <p className="text-xs font-semibold text-slate-700">
                      ⚡ Réponse sous 15 minutes
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-8 text-white"
                  variants={fadeIn}
                >
                  <h3 className="text-xl font-bold mb-2">Besoin d'informations ?</h3>
                  <p className="text-sm text-white/80 mb-6">
                    Notre équipe est disponible pour répondre à toutes vos questions
                  </p>
                  <a
                    href="mailto:contact@innovatech-consulting.com"
                    className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-slate-100 w-full"
                  >
                    Contactez-nous
                  </a>
                  <div className="mt-6 pt-6 border-t border-white/20">
                    <p className="text-xs text-white/60 mb-3">Suivez-nous</p>
                    <div className="flex gap-3">
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20">
                        <span className="text-lg">📱</span>
                      </a>
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20">
                        <span className="text-lg">💼</span>
                      </a>
                      <a href="#" className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20">
                        <span className="text-lg">🐦</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact