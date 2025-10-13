import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: "Innovatech Consulting a transformé notre approche cybersécurité. Leur SOC hybride nous offre une visibilité sans précédent sur les menaces avec une réactivité remarquable. Le ROI s'est matérialisé dès les premiers mois.",
    author: "Adama Coulibaly",
    role: "RSSI",
    company: "Institution Financière Majeure",
    rating: 5,
    avatar: "/api/placeholder/60/60",
    results: [
      { metric: "-75%", label: "Incidents critiques" },
      { metric: "99.9%", label: "Uptime SOC" },
      { metric: "<3min", label: "Temps réponse" }
    ]
  },
  {
    id: 2,
    quote: "L'expertise locale combinée aux standards internationaux d'Innovatech fait vraiment la différence. Nos audits de conformité sont désormais automatisés et notre score sécurité a progressé de 40% en 6 mois.",
    author: "Fatima El Mansouri",
    role: "DSI",
    company: "Groupe Industriel Leader",
    rating: 5,
    avatar: "/api/placeholder/60/60",
    results: [
      { metric: "+40%", label: "Score sécurité" },
      { metric: "100%", label: "Conformité ISO" },
      { metric: "-60%", label: "Temps audit" }
    ]
  },
  {
    id: 3,
    quote: "La plateforme GRC d'Innovatech nous a permis d'obtenir notre certification PCI-DSS en seulement 6 semaines. Leur approche méthodique et leur support 24/7 ont été déterminants pour notre réussite.",
    author: "Youssef Bennani",
    role: "Directeur Conformité",
    company: "Fintech Innovante",
    rating: 5,
    avatar: "/api/placeholder/60/60",
    results: [
      { metric: "6 sem.", label: "Certification PCI" },
      { metric: "24/7", label: "Support expert" },
      { metric: "0", label: "Non-conformité" }
    ]
  },
  {
    id: 4,
    quote: "Grâce au SOC d'Innovatech, nous avons stoppé 3 tentatives d'intrusion majeures ce mois-ci. Leur intelligence artificielle détecte des patterns que nous n'aurions jamais identifiés manuellement.",
    author: "Khalid Alaoui",
    role: "CTO",
    company: "Scale-up Technologique",
    rating: 5,
    avatar: "/api/placeholder/60/60",
    results: [
      { metric: "3", label: "Intrusions stoppées" },
      { metric: "99.8%", label: "Précision IA" },
      { metric: "0", label: "Faux positifs" }
    ]
  },
  {
    id: 5,
    quote: "L'audit express 48h d'Innovatech nous a révélé des vulnérabilités critiques dont nous n'avions aucune idée. Leur plan d'actions nous a permis un ROI immédiat avec des quick wins impressionnants.",
    author: "Aicha Berrada",
    role: "VP Operations",
    company: "E-commerce National",
    rating: 5,
    avatar: "/api/placeholder/60/60",
    results: [
      { metric: "48h", label: "Audit complet" },
      { metric: "15", label: "Vulnérabilités critiques" },
      { metric: "ROI", label: "Immédiat" }
    ]
  }
]

const sectors = [
  { name: 'Banking & Finance', count: 12, icon: '🏦' },
  { name: 'Industry & Manufacturing', count: 8, icon: '🏭' },
  { name: 'Telecom & Tech', count: 15, icon: '📡' },
  { name: 'Healthcare & Pharma', count: 6, icon: '🏥' },
  { name: 'Retail & E-commerce', count: 9, icon: '🛒' },
  { name: 'Government & Public', count: 4, icon: '🏛️' }
]

export function TestimonialsSection({ withHero = false }) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section className={withHero ? 'bg-slate-900 py-24 text-white' : 'bg-white py-24'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 ${
            withHero 
              ? 'bg-blue-500/20 border border-blue-400/30 text-cyan-300'
              : 'bg-blue-100 text-blue-800'
          }`}>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Témoignages Clients Vérifiés
          </div>
          
          <h2 className={`text-4xl lg:text-5xl font-black mb-8 leading-tight ${
            withHero ? 'text-white' : 'text-slate-900'
          }`}>
            50+ Organisations{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Nous Font Confiance
            </span>
          </h2>
          
          <p className={`text-xl leading-relaxed ${
            withHero ? 'text-slate-200' : 'text-slate-600'
          }`}>
            Découvrez comment nos clients transforment leurs défis cybersécurité 
            en avantages compétitifs avec des résultats mesurables.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr,1fr] gap-12">
          
          {/* Featured Testimonial */}
          <div>
            {/* Navigation Pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveTestimonial(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTestimonial === index
                      ? withHero 
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : withHero
                        ? 'bg-white/10 text-slate-300 hover:bg-white/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {testimonial.author.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Main Testimonial Card */}
            <div className={`p-8 rounded-3xl shadow-xl ${
              withHero 
                ? 'bg-white/10 border border-white/20 backdrop-blur'
                : 'bg-white border border-slate-200'
            }`}>
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className={`text-lg leading-relaxed mb-8 italic ${
                withHero ? 'text-slate-100' : 'text-slate-700'
              }`}>
                "{currentTestimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-start gap-4 mb-6">
                <img 
                  src={currentTestimonial.avatar} 
                  alt={currentTestimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className={`font-bold text-lg ${
                    withHero ? 'text-white' : 'text-slate-900'
                  }`}>
                    {currentTestimonial.author}
                  </div>
                  <div className={`text-sm ${
                    withHero ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {currentTestimonial.role}
                  </div>
                  <div className="text-blue-400 text-sm font-medium">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-current/10">
                {currentTestimonial.results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-xl font-bold ${
                      withHero ? 'text-cyan-300' : 'text-blue-600'
                    }`}>
                      {result.metric}
                    </div>
                    <div className={`text-xs uppercase tracking-wide ${
                      withHero ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            {/* Sectors Served */}
            <div className={`p-8 rounded-3xl ${
              withHero 
                ? 'bg-white/5 border border-white/10' 
                : 'bg-slate-50 border border-slate-200'
            }`}>
              <h3 className={`text-xl font-bold mb-6 flex items-center gap-3 ${
                withHero ? 'text-white' : 'text-slate-900'
              }`}>
                <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Secteurs Protégés
              </h3>
              
              <div className="grid gap-3">
                {sectors.map((sector, index) => (
                  <div key={index} className={`flex items-center justify-between p-3 rounded-xl ${
                    withHero ? 'bg-white/5' : 'bg-white'
                  }`}>
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{sector.icon}</span>
                      <span className={`text-sm font-medium ${
                        withHero ? 'text-slate-200' : 'text-slate-700'
                      }`}>
                        {sector.name}
                      </span>
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      withHero 
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-blue-100 text-blue-600'
                    }`}>
                      {sector.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Metrics */}
            <div className={`p-8 rounded-3xl ${
              withHero 
                ? 'bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border border-cyan-400/30'
                : 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white'
            }`}>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Indicateurs de Confiance
              </h3>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-black text-white mb-2">96%</div>
                  <div className="text-sm text-blue-100">Satisfaction Client</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-2">4.8/5</div>
                  <div className="text-sm text-blue-100">Note Moyenne</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-2">100%</div>
                  <div className="text-sm text-blue-100">Renouvellement</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-white mb-2">24/7</div>
                  <div className="text-sm text-blue-100">Support Premium</div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white/10 rounded-xl text-center">
                <p className="text-sm text-white italic">
                  "La qualité est au cœur de notre ADN. Chaque client mérite l'excellence."
                </p>
                <div className="text-xs text-blue-200 mt-2">Direction Innovatech Consulting</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}