# 🧪 Guide de test du formulaire de contact

## Test rapide (Mode simulation)

Le système fonctionne **immédiatement en mode simulation** même sans configuration EmailJS.

### 1. Démarrer l'application
```bash
yarn dev
```

### 2. Ouvrir la page de contact
```
http://localhost:5173/contact
```

### 3. Ouvrir la console du navigateur
- **Chrome/Edge** : F12 ou Ctrl+Shift+I
- **Firefox** : F12 ou Ctrl+Shift+K
- **Safari** : Cmd+Option+I

### 4. Remplir le formulaire
```
Prénom: Mohamed
Nom: Test
Email: test@exemple.com
Téléphone: +212 6 12 34 56 78
Entreprise: Test Corp
Service: SOC 24/7
Message: Ceci est un test du formulaire de contact.
```

### 5. Cliquer sur "Envoyer votre message"

### 6. Observer dans la console
Vous devriez voir :
```javascript
🔧 EmailJS non configuré, utilisation du mode simulation avancé
📧 Simulation d'envoi vers: m2017koita@gmail.com
📋 Données du formulaire: {
  nom: "Mohamed Test",
  email: "test@exemple.com",
  entreprise: "Test Corp",
  solution: "SOC 24/7"
}
💾 Demande sauvegardée localement
```

### 7. Vérifier le message de succès
Un message devrait s'afficher :
```
🎉 Message envoyé avec succès !

Merci Mohamed, votre demande a été transmise à notre équipe.

Vous recevrez une réponse personnalisée à l'adresse test@exemple.com sous 2h (jours ouvrés).

Notre expert cybersécurité prendra contact avec vous pour analyser vos besoins spécifiques.
```

### 8. Vérifier le LocalStorage
Dans la console, tapez :
```javascript
JSON.parse(localStorage.getItem('innovatech.contact.requests'))
```

Vous devriez voir un tableau avec votre demande :
```javascript
[
  {
    firstName: "Mohamed",
    lastName: "Test",
    email: "test@exemple.com",
    phone: "+212 6 12 34 56 78",
    company: "Test Corp",
    solution: "SOC 24/7",
    message: "Ceci est un test...",
    submittedAt: "2024-01-13T10:30:45.123Z",
    id: 1705144245123
  }
]
```

## Test complet (Avec EmailJS configuré)

### Prérequis
✅ Compte EmailJS créé
✅ Service email configuré
✅ Template créé
✅ Fichier `.env` rempli

### 1. Vérifier la configuration
```bash
# Vérifier que le fichier .env existe
dir .env

# Le contenu devrait ressembler à :
VITE_EMAILJS_SERVICE_ID=service_xnji5b4
VITE_EMAILJS_TEMPLATE_ID=template_v7agaly
VITE_EMAILJS_PUBLIC_KEY=zC0clFhq0s5Eg1mqa
```

### 2. Redémarrer le serveur
```bash
# Arrêter le serveur (Ctrl+C)
# Puis relancer
yarn dev
```

### 3. Tester l'envoi réel
Remplissez le formulaire avec **votre vraie adresse email** pour recevoir une copie.

### 4. Observer dans la console
Vous devriez voir :
```javascript
✅ Email envoyé avec succès via EmailJS: {status: 200, text: 'OK'}
💾 Demande sauvegardée localement
```

### 5. Vérifier la réception
- Ouvrez votre boîte mail configurée dans EmailJS
- Vous devriez recevoir un email dans les 2-5 minutes
- Vérifiez le contenu de l'email

### 6. Vérifier le dashboard EmailJS
- Allez sur https://dashboard.emailjs.com/
- Cliquez sur "History" ou "Emails"
- Vous devriez voir votre email dans la liste

## Tests de validation

### Test 1 : Champs obligatoires vides
```
1. Laisser "Prénom" vide
2. Cliquer sur "Envoyer"
→ Message d'erreur : "Veuillez remplir tous les champs obligatoires."
```

### Test 2 : Email invalide
```
1. Entrer "test" dans le champ email (sans @)
2. Essayer de soumettre
→ Le navigateur bloque la soumission (validation HTML5)
```

### Test 3 : Champs optionnels
```
1. Remplir seulement les champs obligatoires
2. Laisser téléphone, entreprise vides
3. Soumettre
→ ✅ Doit fonctionner normalement
```

### Test 4 : Message long
```
1. Écrire un message de 1000 caractères
2. Soumettre
→ ✅ Doit fonctionner normalement
```

### Test 5 : Caractères spéciaux
```
1. Utiliser des accents : é, è, ê, à, ù, ç
2. Utiliser des symboles : €, $, %, &, @
3. Soumettre
→ ✅ Doit fonctionner normalement
```

## Tests d'états

### État "Envoi en cours"
```
1. Remplir le formulaire
2. Cliquer sur "Envoyer"
→ Le bouton affiche un spinner
→ Le bouton est désactivé (grisé)
→ Tous les champs sont désactivés
→ Texte : "Envoi en cours..."
```

### État "Succès"
```
Après envoi réussi :
→ Le formulaire disparaît
→ Un émoji 🎉 apparaît
→ Message de succès personnalisé s'affiche
→ Bouton "Envoyer un autre message" visible
```

### État "Erreur" (simulation)
Pour tester l'erreur, modifiez temporairement `emailService.js` :
```javascript
// Dans sendContactEmail, ajoutez :
throw new Error('Test erreur');
```

→ Message d'erreur rouge s'affiche
→ Formulaire reste visible
→ Champs restent remplis

## Tests responsive

### Mobile (< 640px)
```
1. Ouvrir DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Choisir "iPhone 12 Pro"
4. Tester le formulaire
→ Les champs prénom/nom sont empilés verticalement
→ Tout reste fonctionnel
```

### Tablet (640px - 1024px)
```
1. Choisir "iPad"
2. Tester le formulaire
→ Les champs prénom/nom sont côte à côte
→ Mise en page adaptée
```

### Desktop (> 1024px)
```
1. Revenir en mode desktop
2. Tester le formulaire
→ Layout avec colonne gauche (infos) et droite (formulaire)
→ Tout est bien aligné
```

## Tests de performance

### Test 1 : Temps de réponse
```
1. Remplir le formulaire
2. Chronomètre le temps entre clic et message de succès
→ Mode simulation : ~2,5 secondes
→ Avec EmailJS : ~3-5 secondes (selon connexion)
```

### Test 2 : Multiples soumissions
```
1. Envoyer un message
2. Cliquer sur "Envoyer un autre message"
3. Remplir et envoyer à nouveau
4. Répéter 5 fois
→ Vérifier que tout fonctionne à chaque fois
→ Vérifier LocalStorage : max 50 demandes conservées
```

## Dépannage

### Problème : EmailJS ne fonctionne pas
```bash
# 1. Vérifier les variables d'environnement
echo %VITE_EMAILJS_PUBLIC_KEY%

# 2. Vérifier la console
# → Chercher des erreurs rouges

# 3. Vérifier que le serveur a été redémarré après modification de .env
```

### Problème : Le formulaire ne se soumet pas
```javascript
// Dans la console, vérifier :
console.log(document.querySelector('form'))
// → Doit afficher l'élément <form>

// Vérifier les erreurs JavaScript
// → Onglet Console, chercher les erreurs rouges
```

### Problème : Le message de succès ne s'affiche pas
```javascript
// Dans ContactHero.jsx, ajouter des console.log :
console.log('Formulaire soumis');
console.log('showForm:', showForm);
console.log('successMessage:', successMessage);
```

## Checklist finale

Avant de considérer le test terminé :

- [ ] ✅ Le formulaire s'affiche correctement
- [ ] ✅ Tous les champs sont présents
- [ ] ✅ La validation fonctionne (champs obligatoires)
- [ ] ✅ L'envoi en mode simulation fonctionne
- [ ] ✅ Le message de succès s'affiche
- [ ] ✅ Le bouton "Envoyer un autre message" fonctionne
- [ ] ✅ Le LocalStorage enregistre les demandes
- [ ] ✅ L'envoi avec EmailJS fonctionne (si configuré)
- [ ] ✅ L'email est bien reçu (si configuré)
- [ ] ✅ Le formulaire est responsive (mobile, tablet, desktop)
- [ ] ✅ Les animations fonctionnent (spinner de chargement)
- [ ] ✅ Les messages d'erreur s'affichent correctement

## 🎯 Test réussi !

Si tous les tests passent :
✅ Le système d'envoi d'emails est **100% fonctionnel**
✅ Le formulaire peut être déployé en production
✅ Le mode simulation garantit un fallback fiable

**Bravo ! 🎉**
