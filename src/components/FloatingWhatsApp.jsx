import { Icon } from '@iconify/react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <a 
      href="https://wa.me/56950669781" 
      className="floating-whatsapp" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <Icon icon="mdi:whatsapp" className="whatsapp-icon" />
    </a>
  );
};

export default FloatingWhatsApp;
