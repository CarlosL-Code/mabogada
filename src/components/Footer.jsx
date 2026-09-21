import './Footer.css';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo-icon-small">C</span>
            <h3>CLAUDIA MENDOZA</h3>
            <p>Especialista en derecho societario y corporativo.</p>
          </div>
          
          <div className="footer-links">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#perfil">Perfil</a></li>
              <li><a href="#propuesta">Por qué Chile</a></li>
              <li><a href="#proceso">Proceso</a></li>
              <li><a href="#servicios">Servicios</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p><Icon icon="mdi:whatsapp" className="f-icon"/> +56 9 5066 9781</p>
            <p><Icon icon="mdi:email-outline" className="f-icon"/> contacto@mabogada.com</p>
            <p><Icon icon="mdi:map-marker-outline" className="f-icon"/> Temuco, Chile</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Claudia Mendoza Melo. Todos los derechos reservados.</p>
          <p className="developer-credit">
            Desarrollado por <a href="https://carloslozanodev.com/" target="_blank" rel="noopener noreferrer">Carlos Lozano</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
