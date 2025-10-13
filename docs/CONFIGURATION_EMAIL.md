# Configuration de l'envoi d'emails

Ce document explique comment configurer l'envoi d'emails via EmailJS pour le formulaire de contact.

## 📧 Configuration EmailJS

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois)
3. Validez votre adresse email

### 2. Ajouter un service email

1. Dans le dashboard, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** généré (ex: `service_xnji5b4`)

### 3. Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez les variables suivantes dans votre template :

```
De : {{from_name}} ({{from_email}})
Entreprise : {{company}}
Téléphone : {{phone}}
Secteur : {{sector}}
Taille équipe : {{team_size}}
Service : {{solution}}
Budget : {{budget}}

Message :
{{message}}

---
Date : {{submission_date}}
```

4. Notez le **Template ID** généré (ex: `template_v7agaly`)

### 4. Récupérer la Public Key

1. Allez dans **"Account"** > **"General"**
2. Dans la section **"API Keys"**, copiez votre **Public Key** (ex: `zC0clFhq0s5Eg1mqa`)

### 5. Configurer les variables d'environnement

1. Copiez le fichier `.env.example` en `.env` :
   ```bash
   copy .env.example .env
   ```

2. Remplissez les valeurs dans le fichier `.env` :
   ```
   VITE_EMAILJS_SERVICE_ID=service_xnji5b4
   VITE_EMAILJS_TEMPLATE_ID=template_v7agaly
   VITE_EMAILJS_PUBLIC_KEY=zC0clFhq0s5Eg1mqa
   VITE_EMAIL_TO_ADDRESS=contact@innovatech-consulting.com
   ```

3. **Important** : Ne committez jamais le fichier `.env` dans Git !

### 6. Redémarrer le serveur de développement

```bash
yarn dev
```

## 🧪 Mode simulation

Si EmailJS n'est pas configuré (clés manquantes), le système fonctionne en **mode simulation** :

- Les données sont affichées dans la console
- Un délai de 2,5 secondes simule l'envoi
- Les données sont sauvegardées localement
- L'utilisateur voit le message de succès

Cela permet de développer et tester sans configurer EmailJS immédiatement.

## 📦 Sauvegarde locale

Toutes les demandes de contact sont automatiquement sauvegardées dans le LocalStorage du navigateur :

- Clé : `innovatech.contact.requests`
- Les 50 dernières demandes sont conservées
- Accessible depuis la console du navigateur :

```javascript
// Récupérer toutes les demandes
const requests = JSON.parse(localStorage.getItem('innovatech.contact.requests'))
console.log(requests)
```

## 🔧 Dépannage

### Les emails ne sont pas envoyés

1. Vérifiez que les variables d'environnement sont correctes
2. Vérifiez dans la console du navigateur s'il y a des erreurs
3. Vérifiez les logs EmailJS dans votre dashboard
4. Assurez-vous que votre service email est bien connecté

### Le formulaire ne se soumet pas

1. Ouvrez la console du navigateur (F12)
2. Vérifiez s'il y a des erreurs JavaScript
3. Vérifiez que tous les champs obligatoires sont remplis

### Mode simulation activé alors que EmailJS est configuré

1. Vérifiez que la Public Key fait au moins 10 caractères
2. Vérifiez que toutes les variables sont présentes dans `.env`
3. Redémarrez le serveur de développement

## 📚 Documentation

- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [React EmailJS Guide](https://www.emailjs.com/docs/examples/reactjs/)
- [Exemples de templates](https://www.emailjs.com/docs/user-guide/creating-email-templates/)

## 🎯 Prochaines étapes

- [ ] Créer un compte EmailJS
- [ ] Configurer un service email
- [ ] Créer un template d'email
- [ ] Remplir le fichier `.env`
- [ ] Tester l'envoi d'un email
- [ ] Personnaliser le template selon vos besoins
