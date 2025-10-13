// Configuration EmailJS
export const EMAIL_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  TO_NAME: import.meta.env.VITE_EMAIL_TO_NAME || 'Équipe Innovatech Consulting',
  FROM_NAME: import.meta.env.VITE_EMAIL_FROM_NAME || 'Site Web Innovatech',
  REPLY_TO: import.meta.env.VITE_EMAIL_REPLY_TO || 'm2017koita@gmail.com',
  TO_ADDRESS: import.meta.env.VITE_EMAIL_TO_ADDRESS || 'm2017koita@gmail.com'
};

// Validation de la configuration
export const isEmailConfigured = () => {
  return EMAIL_CONFIG.PUBLIC_KEY && 
         EMAIL_CONFIG.SERVICE_ID && 
         EMAIL_CONFIG.TEMPLATE_ID &&
         EMAIL_CONFIG.PUBLIC_KEY.length >= 10;
};
