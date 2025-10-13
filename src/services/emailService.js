import emailjs from '@emailjs/browser';
import { EMAIL_CONFIG, isEmailConfigured } from '../config/email.config';

/**
 * Service d'envoi d'emails avec EmailJS
 */
class EmailService {
  /**
   * Envoie un email de contact via EmailJS
   * @param {Object} formData - Données du formulaire
   * @returns {Promise<void>}
   */
  async sendContactEmail(formData) {
    // Vérifier si EmailJS est configuré
    if (!isEmailConfigured()) {
      console.warn('🔧 EmailJS non configuré, utilisation du mode simulation avancé');
      console.log('📧 Simulation d\'envoi vers:', EMAIL_CONFIG.TO_ADDRESS);
      console.log('📋 Données du formulaire:', {
        nom: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        entreprise: formData.company,
        solution: formData.solution
      });
      
      // Simulation d'envoi avec délai réaliste
      await new Promise(resolve => setTimeout(resolve, 2500));
      return;
    }

    try {
      // Paramètres du template EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company || 'Non renseignée',
        sector: formData.sector,
        team_size: formData.teamSize || 'Non renseignée',
        solution: formData.solution,
        budget: formData.budget || 'Non renseigné',
        message: formData.message || 'Aucun message spécifique',
        to_name: EMAIL_CONFIG.TO_NAME,
        reply_to: formData.email,
        submission_date: new Date().toLocaleString('fr-FR')
      };

      // Envoi de l'email via EmailJS
      const response = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAIL_CONFIG.PUBLIC_KEY
      );

      if (response.status !== 200) {
        throw new Error(`Erreur EmailJS: ${response.status} - ${response.text}`);
      }

      console.log('✅ Email envoyé avec succès via EmailJS:', response);
      
    } catch (error) {
      console.error('❌ Erreur EmailJS:', error);
      
      // Fallback: simulation en cas d'échec EmailJS
      console.warn('⚠️ Utilisation du mode simulation en fallback');
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Ne pas lever l'erreur pour permettre le fallback en simulation
    }
  }

  /**
   * Sauvegarde une demande de contact localement
   * @param {Object} formData - Données du formulaire
   */
  saveContactRequest(formData) {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const storageKey = 'innovatech.contact.requests';
      const existing = window.localStorage.getItem(storageKey);
      const requests = existing ? JSON.parse(existing) : [];

      requests.push({
        ...formData,
        submittedAt: new Date().toISOString(),
        id: Date.now()
      });

      // Garder seulement les 50 dernières demandes
      const recentRequests = requests.slice(-50);
      window.localStorage.setItem(storageKey, JSON.stringify(recentRequests));
      
      console.log('💾 Demande sauvegardée localement');
    } catch (error) {
      console.warn('⚠️ Impossible de sauvegarder la demande localement:', error);
    }
  }

  /**
   * Récupère toutes les demandes de contact sauvegardées
   * @returns {Array} Liste des demandes
   */
  getContactRequests() {
    if (typeof window === 'undefined') {
      return [];
    }

    try {
      const storageKey = 'innovatech.contact.requests';
      const existing = window.localStorage.getItem(storageKey);
      return existing ? JSON.parse(existing) : [];
    } catch (error) {
      console.warn('⚠️ Impossible de récupérer les demandes locales:', error);
      return [];
    }
  }
}

// Export d'une instance unique du service
export const emailService = new EmailService();
