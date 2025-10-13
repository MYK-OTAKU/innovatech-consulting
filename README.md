# Innovatech Consulting - Site Web

Site vitrine moderne pour Innovatech Consulting, spécialiste en cybersécurité.

## 🚀 Technologies

- **React 19** - Framework JavaScript moderne
- **Vite** - Build tool ultra-rapide
- **Tailwind CSS** - Framework CSS utility-first
- **Framer Motion** - Animations fluides
- **EmailJS** - Envoi d'emails sans backend

## 📦 Installation

```bash
# Installer les dépendances
yarn install

# Configurer les variables d'environnement
copy .env.example .env
# Puis remplissez les valeurs dans .env

# Lancer le serveur de développement
yarn dev
```

## 🔧 Configuration

### Variables d'environnement

Créez un fichier `.env` à la racine du projet avec les variables suivantes :

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAIL_TO_ADDRESS=contact@innovatech-consulting.com
```

Consultez [docs/CONFIGURATION_EMAIL.md](docs/CONFIGURATION_EMAIL.md) pour la configuration détaillée d'EmailJS.

## 📧 Formulaire de contact

Le formulaire de contact utilise **EmailJS** pour l'envoi d'emails :

- ✅ Envoi d'emails sans serveur backend
- ✅ Mode simulation si EmailJS non configuré
- ✅ Sauvegarde locale automatique (LocalStorage)
- ✅ Messages de succès/erreur UX-friendly
- ✅ Validation des champs obligatoires
- ✅ État de chargement pendant l'envoi

### Mode simulation

Si EmailJS n'est pas configuré, le système fonctionne automatiquement en mode simulation :
- Les données s'affichent dans la console
- Un délai simule l'envoi réel
- L'utilisateur voit le message de succès
- Les données sont sauvegardées localement

## 📁 Structure du projet

```
innovatech-consulting/
├── src/
│   ├── components/      # Composants réutilisables
│   ├── sections/        # Sections de pages
│   ├── pages/          # Pages complètes
│   ├── services/       # Services (EmailJS, etc.)
│   ├── config/         # Configuration
│   └── data/           # Données du site
├── public/
│   ├── Images/         # Images et logos
│   └── Videos/         # Vidéos
├── docs/              # Documentation
└── .env               # Variables d'environnement (ne pas commiter)
```

## 🛠️ Scripts disponibles

```bash
# Développement
yarn dev

# Build production
yarn build

# Preview du build
yarn preview

# Linting
yarn lint
```

## 🎨 Design System

- **Couleurs principales** : Slate (dark), Blue (accent), White (backgrounds)
- **Typography** : Font Geist (sans-serif moderne)
- **Bordures** : `rounded-[26px]`, `rounded-[28px]`, `rounded-[20px]`
- **Animations** : Framer Motion avec easing personnalisé
- **Responsive** : Mobile-first avec breakpoints Tailwind

## 📄 Pages

- **Accueil** (`/`) - Hero, Services, Mission, Histoire, CTA
- **À propos** (`/about`) - Histoire détaillée, équipe, valeurs
- **Services** (`/services`) - Catalogue complet des services
- **Témoignages** (`/testimonials`) - Avis clients avec filtres
- **Contact** (`/contact`) - Formulaire + informations de contact

## 🔒 Sécurité

- ❌ Le fichier `.env` est dans `.gitignore`
- ✅ Utilisation de variables d'environnement
- ✅ Validation côté client
- ✅ Fallback en mode simulation

## 📚 Documentation

- [Configuration Email](docs/CONFIGURATION_EMAIL.md) - Guide complet EmailJS
- [Structure des données](src/data/siteContent.js) - Contenu du site

## 🤝 Contribution

1. Créer une branche : `git checkout -b feature/nouvelle-fonctionnalite`
2. Commit : `git commit -m "Ajout d'une nouvelle fonctionnalité"`
3. Push : `git push origin feature/nouvelle-fonctionnalite`
4. Créer une Pull Request

## 📞 Support

Pour toute question : contact@innovatech-consulting.com

## 📝 License

© 2024 Innovatech Consulting. Tous droits réservés.
