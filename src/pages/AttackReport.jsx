import { useState } from 'react'
import { motion } from 'framer-motion'
import { emailService } from '../services/emailService'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const INCIDENT_TYPES = [
  { value: 'malware', label: 'Malware / Ransomware' },
  { value: 'phishing', label: 'Phishing / Email suspect' },
  { value: 'intrusion', label: 'Intrusion / Compromission de compte' },
  { value: 'data-breach', label: 'Fuite de données' },
  { value: 'ddos', label: 'Attaque DDoS' },
  { value: 'other', label: 'Autre (à préciser)' },
]

const IMPACT_LEVELS = [
  { value: 'low', label: 'Faible' },
  { value: 'medium', label: 'Moyen' },
  { value: 'critical', label: 'Critique' },
]

const URGENCY_LEVELS = [
  { value: 'non-urgent', label: 'Non urgente' },
  { value: 'urgent', label: 'Urgente' },
  { value: 'critical', label: 'Critique' },
]

export function AttackReport() {
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    position: '',
    phone: '',
    email: '',
    detectionDate: '',
    incidentTypes: [],
    otherIncidentType: '',
    impactedSystem: '',
    description: '',
    actionsTaken: '',
    impact: '',
    urgency: '',
    attestation: false,
  })

  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox' && name === 'incidentTypes') {
      const currentTypes = formData.incidentTypes
      if (checked) {
        setFormData((prev) => ({ ...prev, incidentTypes: [...currentTypes, value] }))
      } else {
        setFormData((prev) => ({ ...prev, incidentTypes: currentTypes.filter(t => t !== value) }))
      }
    } else if (type === 'checkbox') {
      setFormData((prev) => ({ ...prev, [name]: checked }))
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    try {
      // Envoi via le service email
      await emailService.sendIncidentReport(formData)
      
      // Sauvegarde locale
      emailService.saveContactRequest({
        ...formData,
        type: 'incident_report',
        fullName: `${formData.firstName} ${formData.lastName}`
      })

      setStatus({
        type: 'success',
        message: '✅ Votre déclaration a été reçue. Notre équipe CSIRT la traitera dans un délai maximum de 4 heures ouvrées.',
      })

      // Réinitialiser le formulaire après succès
      setTimeout(() => {
        setFormData({
          fullName: '',
          company: '',
          position: '',
          phone: '',
          email: '',
          detectionDate: '',
          incidentTypes: [],
          otherIncidentType: '',
          impactedSystem: '',
          description: '',
          actionsTaken: '',
          impact: '',
          urgency: '',
          attestation: false,
        })
      }, 1000)
      
    } catch (error) {
      console.error('❌ Erreur lors de l\'envoi:', error)
      setStatus({
        type: 'error',
        message: '❌ Une erreur est survenue. Contactez-nous directement au +212 5 37 77 88 99',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const selectedUrgency = URGENCY_LEVELS.find(level => level.value === formData.urgency)

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Hero Section */}
      <motion.section
        className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-orange-700 py-20 sm:py-24"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              variants={fadeIn}
            >
              <span className="text-xl">🚨</span>
              <span>Assistance Urgente 24/7</span>
            </motion.div>
            
            <motion.h1
              className="mb-6 text-4xl font-bold text-white sm:text-5xl lg:text-6xl"
              variants={fadeIn}
            >
              Déclarez un incident de sécurité
            </motion.h1>
            
            <motion.p
              className="mx-auto max-w-2xl text-lg text-white/90 sm:text-xl"
              variants={fadeIn}
            >
              Notre équipe CSIRT est disponible 24/7 pour vous accompagner dans la gestion et la résolution de votre incident cybersécurité
            </motion.p>

            {/* Contact rapide */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-4"
              variants={fadeIn}
            >
              <a
                href="tel:+212537778899"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-red-600 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>📞</span>
                <span>+212 5 37 77 88 99</span>
              </a>
              <a
                href="mailto:incident@innovatech-consulting.com"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                <span>📧</span>
                <span>incident@innovatech-consulting.com</span>
              </a>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Informations importantes */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 md:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={fadeIn}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-2xl">
                ⚡
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Réponse rapide</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Votre rapport sera traité dans un délai maximum de 4 heures ouvrées par notre CSIRT
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={fadeIn}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                🔒
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Confidentialité totale</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Vos informations sont traitées avec la plus stricte confidentialité et conformément au RGPD
              </p>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              variants={fadeIn}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                🎯
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">Expertise certifiée</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                Prise en charge par des experts certifiés en réponse à incident et forensics
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Formulaire principal */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl sm:p-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeIn}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-slate-900">Formulaire de déclaration</h2>
              <p className="mt-2 text-slate-600">
                Remplissez ce formulaire avec le maximum de détails pour nous permettre d'intervenir efficacement
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Informations du déclarant */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🔹</span>
                  <span>Informations du déclarant</span>
                </h3>
                
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-700">
                      Nom et prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ex: Jean Dupont"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="company" className="mb-2 block text-sm font-semibold text-slate-700">
                      Entreprise / Organisation <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Nom de votre entreprise ou organisation"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label htmlFor="position" className="mb-2 block text-sm font-semibold text-slate-700">
                      Fonction <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ex: Responsable IT, DSI, Manager..."
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-slate-700">
                      Téléphone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="+212 6 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-slate-700">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="votre.email@entreprise.com"
                    />
                  </div>
                </div>
              </div>

              {/* Informations sur l'incident */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🔹</span>
                  <span>Informations sur l'incident</span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <label htmlFor="detectionDate" className="mb-2 block text-sm font-semibold text-slate-700">
                      Date et heure de détection <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="datetime-local"
                      id="detectionDate"
                      name="detectionDate"
                      value={formData.detectionDate}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                    />
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-700">
                      Type d'incident <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2">
                      {INCIDENT_TYPES.map((type) => (
                        <label
                          key={type.value}
                          className="flex cursor-pointer items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition hover:border-red-300 hover:bg-red-50/30"
                        >
                          <input
                            type="checkbox"
                            name="incidentTypes"
                            value={type.value}
                            checked={formData.incidentTypes.includes(type.value)}
                            onChange={handleChange}
                            className="h-5 w-5 rounded border-slate-300 text-red-600 focus:ring-2 focus:ring-red-500/20"
                          />
                          <span className="text-sm font-medium text-slate-700">{type.label}</span>
                        </label>
                      ))}
                    </div>
                    {formData.incidentTypes.includes('other') && (
                      <input
                        type="text"
                        name="otherIncidentType"
                        value={formData.otherIncidentType}
                        onChange={handleChange}
                        placeholder="Précisez le type d'incident..."
                        className="mt-3 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      />
                    )}
                  </div>

                  <div>
                    <label htmlFor="impactedSystem" className="mb-2 block text-sm font-semibold text-slate-700">
                      Système ou service impacté <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="impactedSystem"
                      name="impactedSystem"
                      value={formData.impactedSystem}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ex: serveur mail, poste utilisateur, application métier..."
                    />
                  </div>

                  <div>
                    <label htmlFor="description" className="mb-2 block text-sm font-semibold text-slate-700">
                      Description de l'incident <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Décrivez les symptômes observés, messages d'erreur, utilisateurs touchés, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="actionsTaken" className="mb-2 block text-sm font-semibold text-slate-700">
                      Actions déjà entreprises
                    </label>
                    <textarea
                      id="actionsTaken"
                      name="actionsTaken"
                      value={formData.actionsTaken}
                      onChange={handleChange}
                      rows={4}
                      className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500/20"
                      placeholder="Ex: déconnexion du poste, changement de mot de passe, notification interne, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Évaluation initiale */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🔹</span>
                  <span>Évaluation initiale</span>
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-700">
                      Impact estimé <span className="text-red-500">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {IMPACT_LEVELS.map((level) => (
                        <label
                          key={level.value}
                          className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 p-4 transition ${
                            formData.impact === level.value
                              ? 'border-red-500 bg-red-50 text-red-700'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="impact"
                            value={level.value}
                            checked={formData.impact === level.value}
                            onChange={handleChange}
                            required
                            className="h-4 w-4"
                          />
                          <span className="text-sm font-semibold">{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-3 block text-sm font-semibold text-slate-700">
                      Urgence estimée <span className="text-red-500">*</span>
                    </label>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {URGENCY_LEVELS.map((level) => (
                        <label
                          key={level.value}
                          className={`flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 p-4 transition ${
                            formData.urgency === level.value
                              ? 'border-orange-500 bg-orange-50 text-orange-700'
                              : 'border-slate-200 bg-white hover:border-slate-300'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleChange}
                            required
                            className="h-4 w-4"
                          />
                          <span className="text-sm font-semibold">{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Déclaration et attestation */}
              <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-900">
                  <span>🔹</span>
                  <span>Déclaration</span>
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-700">
                  Je confirme que les informations ci-dessus sont exactes et transmises à des fins d'analyse par le CSIRT Innovatech.
                </p>
                <label className="flex cursor-pointer items-start gap-3 rounded-lg border-2 border-blue-300 bg-white p-4 transition hover:border-blue-400">
                  <input
                    type="checkbox"
                    name="attestation"
                    checked={formData.attestation}
                    onChange={handleChange}
                    required
                    className="mt-0.5 h-5 w-5 rounded border-slate-300 text-blue-600 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <span className="text-sm font-semibold text-slate-900">
                    J'atteste l'exactitude des informations fournies <span className="text-red-500">*</span>
                  </span>
                </label>
                <p className="mt-4 text-xs text-slate-600">
                  💡 Votre rapport sera traité dans un délai maximum de 4 heures ouvrées par notre CSIRT.
                </p>
              </div>

              {/* Message de statut */}
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`rounded-xl border-2 p-4 ${
                    status.type === 'success'
                      ? 'border-green-300 bg-green-50 text-green-800'
                      : 'border-red-300 bg-red-50 text-red-800'
                  }`}
                >
                  <p className="text-sm font-semibold">{status.message}</p>
                </motion.div>
              )}

              {/* Bouton de soumission */}
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-slate-500">
                  <span className="text-red-500">*</span> Champs obligatoires
                </p>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.attestation}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold text-white shadow-lg transition ${
                    isSubmitting || !formData.attestation
                      ? 'cursor-not-allowed bg-slate-400'
                      : 'bg-gradient-to-r from-red-600 to-orange-600 hover:-translate-y-0.5 hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>📤</span>
                      <span>Soumettre la déclaration</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

          {/* Informations complémentaires */}
          <motion.div
            className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-blue-600 text-xl text-white">
                💡
              </div>
              <div className="flex-1">
                <h3 className="mb-2 text-lg font-bold text-blue-900">Conseils en attendant notre intervention</h3>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-none">•</span>
                    <span>Ne payez JAMAIS de rançon sans consulter des experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-none">•</span>
                    <span>Isolez les systèmes compromis du réseau (débranchez le câble réseau ou désactivez le Wi-Fi)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-none">•</span>
                    <span>Ne redémarrez pas les machines affectées (cela pourrait effacer des preuves)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-none">•</span>
                    <span>Documentez tout ce que vous observez (captures d'écran, messages, logs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 flex-none">•</span>
                    <span>Changez les mots de passe des comptes critiques depuis un appareil sain</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AttackReport
