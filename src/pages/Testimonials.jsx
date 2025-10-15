import { useState } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Laila Bennouds',
    role: 'Directrice IT, Attijariwafa Bank Maghreb',
    category: 'SOC 24/7',
    rating: 5,
    verified: true,
    date: '18 personnes ont trouvé cela utile',
    title: 'Réactivité exceptionnelle',
    content: "« Depuis la mise en place du SOC d'Innovatech, l'équipe a détecté 8 tentatives d'intrusion en 6 mois. Incidents maîtrisés avec impact zéro sur nos opérations. »",
  },
  {
    id: 2,
    name: 'Ahmed Tazi',
    role: 'CEO, TechNet Maroc',
    category: 'SOC 24/7',
    rating: 5,
    verified: true,
    date: '16 personnes ont trouvé cela utile',
    title: 'Formation adaptée aux équipes',
    content: '« Les formations cybersécurité proposées sont sensiblement plus claires et pratiques que les formations classiques. L\'apprentissage des concepts est accéléré. »',
  },
  {
    id: 3,
    name: 'Omar Alaoui',
    role: 'Responsable Sécurité, Banque Centrale Populaire',
    category: 'Audit & GRC',
    rating: 5,
    verified: true,
    date: '18 personnes ont trouvé cela utile',
    title: 'Surveillance continue et efficace',
    content: '« Le SOC d\'Innovatech surveille nos infrastructures critiques 24/7/365. Leurs analyses préventives nous ont évité plusieurs incidents techniques cette année. »',
  },
  {
    id: 4,
    name: 'Fatima El Mansouri',
    role: 'RSSI, OCP Industries',
    category: 'Formation',
    rating: 5,
    verified: true,
    date: '18 personnes ont trouvé cela utile',
    title: 'Une expertise qui transforme la sécurité',
    content: '« L\'audit de sécurité d\'Innovatech nous a permis d\'identifier et corriger 47 vulnérabilités critiques. Leur approche méthodique et leurs recommandations pratiques ont transformé notre posture sécuritaire. »',
  },
  {
    id: 5,
    name: 'Karim Bennani',
    role: 'DSI, Groupe Industriel',
    category: 'Réponse à incidents',
    rating: 5,
    verified: true,
    date: '26 personnes ont trouvé cela utile',
    title: 'Un partenaire qui sécurise notre croissance',
    content: '« Innovatech a structuré notre démarche cyber de A à Z avec une vision proactive et fiable. Rapports détaillés et livrés dans les meilleurs délais. Aucun incident majeur depuis 18 mois. »',
  },
  {
    id: 6,
    name: 'Youssef Alami',
    role: 'CTO, E-Commerce Leader',
    category: 'SOC 24/7',
    rating: 5,
    verified: true,
    date: '22 personnes ont trouvé cela utile',
    title: 'Protection continue de notre plateforme',
    content: '« Grâce au SOC d\'Innovatech, notre plateforme e-commerce est surveillée en temps réel. Leur réactivité nous a permis de bloquer plusieurs attaques DDoS avant impact. »',
  },
]

const filters = [
  { id: 'all', label: 'Tous les avis' },
  { id: 'SOC 24/7', label: 'SOC 24/7' },
  { id: 'Audit & GRC', label: 'Audit & GRC' },
  { id: 'Formation', label: 'Formation' },
  { id: 'Réponse à incidents', label: 'Réponse à incidents' },
]

const highlights = [
  { icon: '✓', text: 'InfoAgilité SOC certifiée ISO 27001' },
  { icon: '✓', text: 'Temps de réponse moyen < 15 min' },
  { icon: '✓', text: '0 incident majeur depuis 18 mois' },
]

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
      staggerChildren: 0.15,
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

export function Testimonials() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.category === activeFilter)

  return (
    <div className="bg-gradient-to-br from-white via-[#C2C4C6]/30 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl lg:text-6xl">
              Ce que nos clients disent<br />d'Innovatech Consulting
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">
              150+ organisations marocaines sécurisent leurs opérations<br />
              avec nos équipes cyber. Découvrez leurs retours<br />
              d'expérience et la valeur qu'elles obtiennent en continu.
            </p>

            {/* Rating */}
            <div className="mt-12 flex flex-col items-center gap-3">
              <div className="flex items-center gap-4">
                <span className="text-6xl font-bold text-slate-900">4.8</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-7 w-7 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-base font-semibold text-slate-700">95% de clients satisfaits</p>
              <p className="text-sm text-slate-500">Basé sur 57 avis vérifiés</p>
            </div>

            {/* Highlights */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-xs font-bold text-white">
                    {highlight.icon}
                  </span>
                  <span>{highlight.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-y border-slate-200">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto py-5">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`whitespace-nowrap rounded-full px-6 py-2.5 text-sm font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-slate-900 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
            <select 
              className="ml-auto rounded-lg border border-slate-300px-4 py-2 text-sm font-medium text-slate-700"
              defaultValue="recent"
            >
              <option value="recent">Plus récents</option>
              <option value="rating">Mieux notés</option>
              <option value="helpful">Plus utiles</option>
            </select>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className=" py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid gap-6 md:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {filteredTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="group rounded-[26px] border border-slate-200  p-8 shadow-[0_8px_30px_-8px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.25)]"
                variants={cardVariants}
              >
                {/* Header */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-lg font-bold text-white shadow-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                      {testimonial.verified && (
                        <span className="rounded-full bg-green-500 px-2.5 py-1 text-xs font-semibold text-white">
                          Vérifié
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-slate-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <div className="mt-5">
                  <h4 className="font-semibold text-slate-900">{testimonial.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{testimonial.content}</p>
                </div>

                {/* Footer */}
                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <span className="text-xs text-slate-500">👍 {testimonial.date}</span>
                  <button className="text-xs font-semibold text-slate-700 transition hover:text-slate-900">
                    Utile
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className=" py-20">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Un retour d'expérience qui fait référence
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              « Innovatech, c'est une équipe engagée, transparente et disponible »
            </p>

            <div className="mt-12 rounded-[28px] border border-slate-200  p-10 text-left shadow-[0_30px_60px_-25px_rgba(15,23,42,0.25)] sm:p-12">
              <div className="mb-8 flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-7 w-7 fill-yellow-400" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-center text-lg italic leading-9 text-slate-700 sm:text-xl">
                « Innovatech a complètement révolutionné notre approche de la cybersécurité. Leur expertise et leur réactivité nous ont permis de réduire de 63% notre temps de réponse aux incidents, tout en renforçant la confiance de nos équipes et de nos clients. Une performance remarquable. »
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 text-xl font-bold text-white shadow-lg">
                  ME
                </div>
                <div className="text-left">
                  <p className="font-semibold text-slate-900">Mohamed El Idrissi</p>
                  <p className="text-sm text-slate-600">CEO, DigitalFinance Africa</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Des résultats concrets</h2>
            <p className="mt-4 text-lg text-slate-600">
              La performance de nos équipes cybersécurité mesurée par nos clients
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: '99.9%', label: 'Disponibilité SOC depuis 2009' },
              { value: '15 min', label: 'Temps moyen de réponse incidents' },
              { value: '47', label: 'Vulnérabilités critiques corrigées / client' },
              { value: '150+', label: 'Organisations accompagnées' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="rounded-[26px] border border-slate-200  p-8 text-center shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <p className="text-5xl font-bold text-slate-900">{stat.value}</p>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Testimonials