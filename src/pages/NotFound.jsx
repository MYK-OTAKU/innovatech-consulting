export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-slate-50 px-4 text-center">
      <div className="max-w-xl space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-500">404</p>
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          Oups, cette page est introuvable
        </h1>
        <p className="text-sm text-slate-600">
          Revenez à l’accueil pour découvrir comment Innovatech Consulting sécurise votre transformation numérique.
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Retour à l’accueil
        </a>
      </div>
    </div>
  )
}
