# 📧 Templates EmailJS - Exemples

Ce document contient des exemples de templates EmailJS pour le formulaire de contact.

---

## 📝 Template 1 : Simple et professionnel

### Sujet de l'email
```
Nouvelle demande de contact - {{from_name}}
```

### Corps de l'email (HTML)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9fafb;
    }
    .header {
      background: linear-gradient(135deg, #0f172a, #1e3a8a);
      color: white;
      padding: 30px;
      border-radius: 10px 10px 0 0;
    }
    .content {
      background: white;
      padding: 30px;
      border-radius: 0 0 10px 10px;
    }
    .info-box {
      background-color: #f1f5f9;
      padding: 15px;
      margin: 10px 0;
      border-left: 4px solid #3b82f6;
    }
    .label {
      font-weight: bold;
      color: #64748b;
      font-size: 12px;
      text-transform: uppercase;
    }
    .value {
      color: #0f172a;
      font-size: 16px;
      margin-top: 5px;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      color: #64748b;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🔔 Nouvelle demande de contact</h1>
      <p>Innovatech Consulting - Formulaire de contact</p>
    </div>
    
    <div class="content">
      <h2>Informations du client</h2>
      
      <div class="info-box">
        <div class="label">Nom complet</div>
        <div class="value">{{from_name}}</div>
      </div>
      
      <div class="info-box">
        <div class="label">Adresse email</div>
        <div class="value">
          <a href="mailto:{{from_email}}">{{from_email}}</a>
        </div>
      </div>
      
      <div class="info-box">
        <div class="label">Téléphone</div>
        <div class="value">{{phone}}</div>
      </div>
      
      <div class="info-box">
        <div class="label">Entreprise</div>
        <div class="value">{{company}}</div>
      </div>
      
      <h2>Service demandé</h2>
      <div class="info-box">
        <div class="value">{{solution}}</div>
      </div>
      
      <h2>Message</h2>
      <div class="info-box">
        <div class="value">{{message}}</div>
      </div>
      
      <div class="footer">
        <p>Demande reçue le {{submission_date}}</p>
        <p>© 2024 Innovatech Consulting</p>
      </div>
    </div>
  </div>
</body>
</html>
```

---

## 📝 Template 2 : Moderne avec CTA

### Sujet de l'email
```
🔒 Nouvelle demande {{solution}} - {{from_name}}
```

### Corps de l'email (HTML)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      background-color: #f1f5f9;
      padding: 20px;
    }
    .email-wrapper {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    .header {
      background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%);
      padding: 40px 30px;
      text-align: center;
    }
    .header h1 {
      color: white;
      font-size: 28px;
      margin-bottom: 10px;
    }
    .header p {
      color: #cbd5e1;
      font-size: 14px;
    }
    .content {
      padding: 40px 30px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section-title {
      font-size: 18px;
      color: #0f172a;
      margin-bottom: 15px;
      font-weight: 600;
    }
    .field {
      background: #f8fafc;
      padding: 15px 20px;
      border-radius: 10px;
      margin-bottom: 12px;
      border-left: 4px solid #3b82f6;
    }
    .field-label {
      font-size: 11px;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .field-value {
      font-size: 16px;
      color: #0f172a;
      font-weight: 500;
    }
    .message-box {
      background: #f1f5f9;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #10b981;
    }
    .message-box p {
      color: #334155;
      line-height: 1.6;
      white-space: pre-wrap;
    }
    .cta-section {
      text-align: center;
      padding: 30px;
      background: #f8fafc;
      border-radius: 10px;
      margin-top: 30px;
    }
    .cta-button {
      display: inline-block;
      background: linear-gradient(135deg, #3b82f6, #2563eb);
      color: white;
      padding: 14px 28px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      margin: 10px;
    }
    .footer {
      text-align: center;
      padding: 30px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
    }
    .footer p {
      color: #64748b;
      font-size: 13px;
      margin: 5px 0;
    }
    .urgent-badge {
      display: inline-block;
      background: #ef4444;
      color: white;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
      margin-left: 10px;
    }
  </style>
</head>
<body>
  <div class="email-wrapper">
    <div class="header">
      <h1>🔔 Nouvelle demande de contact</h1>
      <p>Un client a rempli le formulaire de contact sur votre site web</p>
    </div>
    
    <div class="content">
      <div class="section">
        <div class="section-title">👤 Informations du client</div>
        
        <div class="field">
          <div class="field-label">Nom complet</div>
          <div class="field-value">{{from_name}}</div>
        </div>
        
        <div class="field">
          <div class="field-label">Email</div>
          <div class="field-value">
            <a href="mailto:{{from_email}}" style="color: #3b82f6;">{{from_email}}</a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Téléphone</div>
          <div class="field-value">
            <a href="tel:{{phone}}" style="color: #3b82f6;">{{phone}}</a>
          </div>
        </div>
        
        <div class="field">
          <div class="field-label">Entreprise</div>
          <div class="field-value">{{company}}</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">
          🛡️ Service demandé
          <span class="urgent-badge">URGENT</span>
        </div>
        <div class="field">
          <div class="field-value">{{solution}}</div>
        </div>
      </div>
      
      <div class="section">
        <div class="section-title">💬 Message du client</div>
        <div class="message-box">
          <p>{{message}}</p>
        </div>
      </div>
      
      <div class="cta-section">
        <p style="margin-bottom: 20px; color: #0f172a; font-weight: 500;">
          Répondez rapidement pour maximiser vos chances de conversion
        </p>
        <a href="mailto:{{from_email}}?subject=Re: Votre demande - Innovatech Consulting" class="cta-button">
          📧 Répondre par email
        </a>
        <a href="tel:{{phone}}" class="cta-button" style="background: linear-gradient(135deg, #10b981, #059669);">
          📞 Appeler le client
        </a>
      </div>
    </div>
    
    <div class="footer">
      <p><strong>Innovatech Consulting</strong></p>
      <p>Demande reçue le {{submission_date}}</p>
      <p>© 2024 Tous droits réservés</p>
    </div>
  </div>
</body>
</html>
```

---

## 📝 Template 3 : Minimaliste (texte simple)

### Sujet de l'email
```
Contact depuis le site web - {{from_name}}
```

### Corps de l'email (Texte simple)

```text
Nouvelle demande de contact - Innovatech Consulting
═══════════════════════════════════════════════════

INFORMATIONS CLIENT
-------------------
Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Entreprise : {{company}}

SERVICE DEMANDÉ
---------------
{{solution}}

MESSAGE
-------
{{message}}

═══════════════════════════════════════════════════
Date : {{submission_date}}

---
Cet email a été envoyé automatiquement depuis le formulaire de contact de innovatech-consulting.com
```

---

## 📝 Template 4 : Email de confirmation au client

### Sujet de l'email
```
✅ Demande reçue - Innovatech Consulting
```

### Corps de l'email (HTML)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
    }
    .header {
      background: linear-gradient(135deg, #0f172a, #1e3a8a);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
      margin-bottom: 30px;
    }
    .check-icon {
      font-size: 60px;
      margin-bottom: 20px;
    }
    .content {
      background: white;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .highlight {
      background: #f0f9ff;
      padding: 20px;
      border-left: 4px solid #3b82f6;
      margin: 20px 0;
      border-radius: 5px;
    }
    .contact-info {
      background: #f8fafc;
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
    }
    .footer {
      text-align: center;
      margin-top: 30px;
      padding-top: 20px;
      border-top: 1px solid #e2e8f0;
      color: #64748b;
      font-size: 14px;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="check-icon">✅</div>
    <h1>Demande bien reçue !</h1>
  </div>
  
  <div class="content">
    <p>Bonjour <strong>{{from_name}}</strong>,</p>
    
    <p>Nous avons bien reçu votre demande concernant <strong>{{solution}}</strong>.</p>
    
    <div class="highlight">
      <p><strong>⏱️ Nos engagements :</strong></p>
      <ul>
        <li>Réponse sous <strong>2 heures</strong> (jours ouvrés)</li>
        <li>Analyse personnalisée de vos besoins</li>
        <li>Expert cybersécurité dédié</li>
      </ul>
    </div>
    
    <p>Voici un récapitulatif de votre demande :</p>
    
    <div class="contact-info">
      <p><strong>Email :</strong> {{from_email}}</p>
      <p><strong>Téléphone :</strong> {{phone}}</p>
      <p><strong>Entreprise :</strong> {{company}}</p>
      <p><strong>Service :</strong> {{solution}}</p>
    </div>
    
    <p><strong>Votre message :</strong></p>
    <p style="background: #f8fafc; padding: 15px; border-radius: 8px;">{{message}}</p>
    
    <p>Notre équipe va analyser votre demande et vous contacter très prochainement.</p>
    
    <h3>🚨 Besoin urgent ?</h3>
    <p>Pour une urgence cybersécurité, contactez-nous immédiatement :</p>
    <p style="text-align: center;">
      <strong style="font-size: 20px; color: #ef4444;">☎️ +212 5 37 77 88 99</strong>
    </p>
  </div>
  
  <div class="footer">
    <p><strong>Innovatech Consulting</strong></p>
    <p>Votre partenaire en cybersécurité</p>
    <p>📧 contact@innovatech-consulting.com</p>
    <p>🌐 innovatech-consulting.com</p>
  </div>
</body>
</html>
```

---

## 🔧 Configuration dans EmailJS

### 1. Créer le template

1. Allez sur https://dashboard.emailjs.com/
2. Cliquez sur "Email Templates"
3. Cliquez sur "Create New Template"
4. Copiez-collez un des templates ci-dessus

### 2. Variables disponibles

Toutes ces variables sont automatiquement envoyées par le formulaire :

| Variable | Description | Exemple |
|----------|-------------|---------|
| `{{from_name}}` | Nom complet (prénom + nom) | "Mohamed El Idrissi" |
| `{{from_email}}` | Email du client | "client@exemple.com" |
| `{{phone}}` | Téléphone | "+212 6 12 34 56 78" |
| `{{company}}` | Nom de l'entreprise | "Tech Corp" |
| `{{sector}}` | Secteur d'activité | "Finance" |
| `{{team_size}}` | Taille de l'équipe | "50-100" |
| `{{solution}}` | Service demandé | "SOC 24/7" |
| `{{budget}}` | Budget envisagé | "10k-50k" |
| `{{message}}` | Message du client | "Nous avons besoin..." |
| `{{to_name}}` | Destinataire | "Équipe Innovatech" |
| `{{reply_to}}` | Email de réponse | (= from_email) |
| `{{submission_date}}` | Date de soumission | "13/10/2024, 14:30:45" |

### 3. Tester le template

1. Dans EmailJS, cliquez sur "Test"
2. Remplissez les variables de test
3. Cliquez sur "Send Test Email"
4. Vérifiez votre boîte mail

### 4. Activer le template

1. Notez le Template ID (ex: `template_v7agaly`)
2. Mettez-le dans votre fichier `.env` :
   ```
   VITE_EMAILJS_TEMPLATE_ID=template_v7agaly
   ```
3. Redémarrez le serveur

---

## 💡 Conseils

### Pour un email professionnel
- ✅ Utilisez le Template 1 (simple et clair)
- ✅ Logo de votre entreprise en en-tête
- ✅ Couleurs de votre charte graphique

### Pour maximiser les conversions
- ✅ Utilisez le Template 2 (avec CTA)
- ✅ Boutons d'action rapides (répondre, appeler)
- ✅ Badge "URGENT" pour inciter à répondre vite

### Pour l'expérience client
- ✅ Créez un 2ème template pour la confirmation au client
- ✅ Rassurez sur les délais de réponse
- ✅ Donnez un numéro d'urgence

---

## 🎨 Personnalisation

### Couleurs Innovatech

Remplacez dans les templates :

```css
/* Couleurs actuelles → Vos couleurs */
#0f172a  →  Votre couleur principale (dark)
#3b82f6  →  Votre couleur accent (blue)
#10b981  →  Votre couleur succès (green)
#ef4444  →  Votre couleur urgence (red)
```

### Ajouter votre logo

```html
<img src="https://votre-site.com/logo.png" 
     alt="Logo Innovatech" 
     style="max-width: 200px; margin-bottom: 20px;">
```

---

## ✅ Checklist

Avant de mettre en production :

- [ ] Template créé dans EmailJS
- [ ] Variables testées
- [ ] Email de test envoyé et reçu
- [ ] Design responsive vérifié
- [ ] Template ID dans `.env`
- [ ] Serveur redémarré
- [ ] Formulaire testé en conditions réelles

---

**Bon template ! 📧**
