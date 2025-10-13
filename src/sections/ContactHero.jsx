import { useState } from 'react'
import { contactInfo } from '../data/siteContent'
import { emailService } from '../services/emailService'

export function ContactHero() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    sector: '',
    teamSize: '',
    solution: '',
    budget: '',
    message: '',
    consent: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [showForm, setShowForm] = useState(true)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation basique
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setErrorMessage('Veuillez remplir tous les champs obligatoires.')
      setSuccessMessage('')
      return
    }

    setIsSubmitting(true)
    setErrorMessage('')
    setSuccessMessage('')

    try {
      // Envoi de l'email via EmailJS
      await emailService.sendContactEmail(formData)

      // Sauvegarde locale
      emailService.saveContactRequest(formData)

      // Message de succès
      setSuccessMessage(`🎉 Message envoyé avec succès !

Merci ${formData.firstName}, votre demande a été transmise à notre équipe.

Vous recevrez une réponse personnalisée à l'adresse ${formData.email} sous 2h (jours ouvrés).

Notre expert cybersécurité prendra contact avec vous pour analyser vos besoins spécifiques.`)

      // Cacher le formulaire
      setShowForm(false)

    } catch (error) {
      console.error('Erreur d\'envoi:', error)
      setErrorMessage('Une erreur est survenue lors de l\'envoi. Veuillez réessayer ou nous contacter directement au +212 5 37 77 88 99.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      sector: '',
      teamSize: '',
      solution: '',
      budget: '',
      message: '',
      consent: false
    })
    setShowForm(true)
    setSuccessMessage('')
    setErrorMessage('')
  }
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-900 text-white">
      <div className="absolute inset-0 opacity-40">
        <img
          src="/Images/cybersecurity-interface.jpg"
          alt="Interface cybersécurité"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-32 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:px-8">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-200">
            Contactez-nous
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Nous sommes là pour répondre à vos enjeux de cybersécurité
          </h1>
          <p className="text-base text-slate-200">
            Discutons de vos besoins en MSSP, CyberDefense, GRC ou projets innovants. Notre équipe vous accompagne de l’audit à la mise en œuvre opérationnelle.
          </p>
          <div className="grid gap-4 text-sm text-slate-200">
            <p>
              <span className="font-semibold text-white">Adresse :</span> {contactInfo.address}
            </p>
            <p>
              <span className="font-semibold text-white">Téléphones :</span> {contactInfo.phone} · {contactInfo.phoneAlt}
            </p>
            <p>
              <span className="font-semibold text-white">Email :</span> {contactInfo.email}
            </p>
            <p>
              <span className="font-semibold text-white">Horaires :</span> {contactInfo.hours}
            </p>
          </div>
        </div>

        <div className="relative rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
          {showForm ? (
            <>
              <h2 className="text-lg font-semibold text-white">Formulaire de contact</h2>
              <p className="mt-2 text-sm text-slate-200">
                Laissez-nous un message, nous vous répondrons sous 24h ouvrées.
              </p>

              {errorMessage && (
                <div className="mt-4 rounded-xl border border-red-300 bg-red-50/90 p-4 text-sm text-red-800">
                  {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Prénom *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Nom *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
                  placeholder="Votre nom"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
                placeholder="votre.email@entreprise.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
                placeholder="+212 6 XX XX XX XX"
              />
            </div>
            <div>
              <label htmlFor="company" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Entreprise
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
                placeholder="Nom de votre entreprise"
              />
            </div>
            <div>
              <label htmlFor="solution" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Service souhaité
              </label>
              <select
                id="solution"
                name="solution"
                value={formData.solution}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
              >
                <option value="">Sélectionnez un service</option>
                <option value="SOC 24/7">SOC 24/7</option>
                <option value="Audit & GRC">Audit & GRC</option>
                <option value="Formation">Formation</option>
                <option value="Réponse à incidents">Réponse à incidents</option>
                <option value="Autre">Autre</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="mt-2 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/40 disabled:opacity-50"
                placeholder="Décrivez votre besoin en détail..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Envoi en cours...
                </span>
              ) : (
                'Envoyer votre message'
              )}
            </button>
          </form>
            </>
          ) : (
            <div className="space-y-6 text-center">
              <div className="text-6xl">🎉</div>
              <h2 className="text-2xl font-bold text-white">Message envoyé !</h2>
              <div className="whitespace-pre-line text-sm text-slate-200">
                {successMessage}
              </div>
              <button
                onClick={resetForm}
                className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Envoyer un autre message
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
