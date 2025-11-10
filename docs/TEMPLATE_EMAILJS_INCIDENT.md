# Template EmailJS pour la Déclaration d'Incident

## 📋 Vue d'ensemble

Ce document explique comment créer et configurer un template EmailJS dédié aux déclarations d'incident de sécurité.

## 🎯 Variables du template

Voici les variables disponibles dans le formulaire de déclaration d'incident :

### Informations de contact
- `{{from_name}}` - Nom complet du déclarant (prénom + nom)
- `{{from_email}}` - Email du déclarant
- `{{phone}}` - Téléphone du déclarant
- `{{company}}` - Entreprise/Organisation

### Détails de l'incident
- `{{incident_type}}` - Type d'incident (ransomware, phishing, ddos, etc.)
- `{{urgency}}` - Niveau d'urgence (critical, high, medium, low)
- `{{description}}` - Description détaillée de l'incident
- `{{impacted_systems}}` - Systèmes/données impactés
- `{{when_occurred}}` - Date et heure de l'incident
- `{{current_status}}` - État actuel de la situation

### Métadonnées
- `{{to_name}}` - Nom du destinataire (Équipe Innovatech)
- `{{reply_to}}` - Adresse email pour la réponse
- `{{submission_date}}` - Date et heure de la soumission

## 📧 Template HTML recommandé

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #1e293b;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
      color: white;
      padding: 30px;
      border-radius: 12px 12px 0 0;
      text-align: center;
    }
    .urgency-badge {
      display: inline-block;
      padding: 8px 16px;
      border-radius: 20px;
      font-weight: bold;
      font-size: 14px;
      margin-top: 10px;
    }
    .critical { background-color: #dc2626; color: white; }
    .high { background-color: #ea580c; color: white; }
    .medium { background-color: #f59e0b; color: white; }
    .low { background-color: #3b82f6; color: white; }
    .content {
      background: white;
      padding: 30px;
      border: 1px solid #e2e8f0;
      border-top: none;
      border-radius: 0 0 12px 12px;
    }
    .section {
      margin-bottom: 25px;
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
      border-left: 4px solid #dc2626;
    }
    .label {
      font-weight: 600;
      color: #475569;
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .value {
      font-size: 15px;
      color: #1e293b;
      margin-bottom: 15px;
    }
    .description {
      background: white;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #e2e8f0;
      white-space: pre-wrap;
      font-size: 14px;
    }
    .footer {
      margin-top: 30px;
      padding: 20px;
      background: #f8fafc;
      border-radius: 8px;
      font-size: 13px;
      color: #64748b;
      text-align: center;
    }
    .alert {
      background: #fef2f2;
      border: 2px solid #dc2626;
      border-radius: 8px;
      padding: 15px;
      margin-bottom: 20px;
      text-align: center;
      font-weight: bold;
      color: #dc2626;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1 style="margin: 0; font-size: 24px;">🚨 Déclaration d'Incident de Sécurité</h1>
    <div class="urgency-badge {{urgency}}">
      Urgence: {{urgency}}
    </div>
  </div>

  <div class="content">
    <div class="alert">
      ⚡ INTERVENTION REQUISE - Nouvelle déclaration d'incident
    </div>

    <!-- Informations de contact -->
    <div class="section">
      <h2 style="margin-top: 0; color: #dc2626; font-size: 18px;">👤 Informations du déclarant</h2>
      
      <div class="label">Nom complet</div>
      <div class="value">{{from_name}}</div>
      
      <div class="label">Email</div>
      <div class="value"><a href="mailto:{{from_email}}">{{from_email}}</a></div>
      
      <div class="label">Téléphone</div>
      <div class="value"><a href="tel:{{phone}}">{{phone}}</a></div>
      
      <div class="label">Entreprise</div>
      <div class="value">{{company}}</div>
    </div>

    <!-- Détails de l'incident -->
    <div class="section">
      <h2 style="margin-top: 0; color: #dc2626; font-size: 18px;">🔍 Détails de l'incident</h2>
      
      <div class="label">Type d'incident</div>
      <div class="value">{{incident_type}}</div>
      
      <div class="label">Date et heure de l'incident</div>
      <div class="value">{{when_occurred}}</div>
      
      <div class="label">Niveau d'urgence</div>
      <div class="value" style="font-weight: bold; color: #dc2626;">{{urgency}}</div>
    </div>

    <!-- Description -->
    <div class="section">
      <div class="label">Description détaillée</div>
      <div class="description">{{description}}</div>
    </div>

    <!-- Systèmes impactés -->
    <div class="section">
      <div class="label">Systèmes/Données impactés</div>
      <div class="description">{{impacted_systems}}</div>
    </div>

    <!-- État actuel -->
    <div class="section">
      <div class="label">État actuel de la situation</div>
      <div class="description">{{current_status}}</div>
    </div>

    <div class="footer">
      <p><strong>Date de soumission:</strong> {{submission_date}}</p>
      <p>Cette déclaration a été envoyée depuis le site web Innovatech Consulting</p>
      <p style="margin-top: 15px; font-size: 12px;">
        🔒 Ce message contient des informations confidentielles
      </p>
    </div>
  </div>
</body>
</html>
```

## 📝 Template Texte (Plain Text)

```
🚨 DÉCLARATION D'INCIDENT DE SÉCURITÉ 🚨

NIVEAU D'URGENCE: {{urgency}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 INFORMATIONS DU DÉCLARANT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Entreprise: {{company}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🔍 DÉTAILS DE L'INCIDENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Type d'incident: {{incident_type}}
Date/Heure: {{when_occurred}}
Urgence: {{urgency}}

DESCRIPTION DÉTAILLÉE:
{{description}}

SYSTÈMES IMPACTÉS:
{{impacted_systems}}

ÉTAT ACTUEL:
{{current_status}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📅 MÉTADONNÉES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Date de soumission: {{submission_date}}
Source: Site Web Innovatech Consulting

⚡ ACTION REQUISE - Veuillez traiter cette déclaration dans les meilleurs délais
```

## ⚙️ Configuration dans EmailJS

### Étape 1: Créer un nouveau template

1. Connectez-vous à [EmailJS](https://www.emailjs.com/)
2. Allez dans "Email Templates"
3. Cliquez sur "Create New Template"
4. Donnez un nom: "Déclaration d'Incident - Innovatech"

### Étape 2: Configurer le template

**Subject (Objet):**
```
🚨 [{{urgency}}] Nouveau rapport d'incident - {{company}}
```

**Content (Contenu HTML):**
- Collez le template HTML ci-dessus

**Alternative Text:**
- Collez le template texte ci-dessus

### Étape 3: Paramètres du template

- **To Email**: incident@innovatech-consulting.com (ou votre email)
- **From Name**: Site Web Innovatech - Incidents
- **Reply To**: {{from_email}}

### Étape 4: Récupérer l'ID du template

1. Sauvegardez le template
2. Copiez le Template ID (ex: `template_xyz123`)
3. Ajoutez-le dans votre fichier `.env`:

```env
VITE_EMAILJS_INCIDENT_TEMPLATE_ID=template_xyz123
```

## 🎨 Personnalisation des couleurs d'urgence

Les badges d'urgence utilisent les couleurs suivantes:

- **Critical** (🚨): Rouge foncé `#dc2626`
- **High** (⚠️): Orange `#ea580c`
- **Medium** (📊): Jaune `#f59e0b`
- **Low** (📌): Bleu `#3b82f6`

## 🔔 Notifications supplémentaires

Pour les incidents critiques, vous pouvez configurer:

1. **Webhook** vers Slack/Teams
2. **SMS** via Twilio
3. **Appel automatique** pour les incidents critiques
4. **Escalade automatique** si pas de réponse sous 15 min

## 📊 Suivi des déclarations

Les déclarations sont également sauvegardées localement dans le navigateur pour permettre un suivi même en cas d'échec d'envoi email.

Accès via la console:
```javascript
emailService.getContactRequests()
```

## 🔒 Sécurité et confidentialité

- Les données sont chiffrées en transit (HTTPS)
- Conformité RGPD
- Stockage local limité à 50 entrées
- Pas de partage avec des tiers

## 📞 Support

Pour toute question sur la configuration:
- Email: support@innovatech-consulting.com
- Tél: +212 5 37 77 88 99
