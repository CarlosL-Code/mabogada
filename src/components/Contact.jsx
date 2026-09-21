import './Contact.css';
import { Icon } from '@iconify/react';

const Contact = () => {
  return (
    <section id="contacto" className="contact-cta-section">
      <div className="contact-cta-bg"></div>
      <div className="contact-cta-overlay"></div>
      
      <div className="container contact-cta-container">
        
        <div className="contact-cta-info">
          <div className="section-title-clean text-white">CONTÁCTANOS</div>
          <h2>Dé el primer paso hacia su expansión</h2>
          <p>
            Complete el formulario para recibir asesoría personalizada. 
            También puede comunicarse de forma directa a través de nuestros canales.
          </p>
          
          <div className="contact-channels">
            <div className="channel">
              <Icon icon="mdi:whatsapp" className="channel-icon" />
              <div>
                <h5>WhatsApp / Teléfono</h5>
                <a href="https://wa.me/56950669781" target="_blank" rel="noopener noreferrer">
                  +56 9 5066 9781
                </a>
              </div>
            </div>
            
            <div className="channel">
              <Icon icon="mdi:email-outline" className="channel-icon" />
              <div>
                <h5>Correo Electrónico</h5>
                <a href="mailto:contacto@mabogada.com">contacto@mabogada.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-cta-form-card">
          <h3>Formulario de Contacto</h3>
          <p>Responderemos a su consulta a la brevedad posible.</p>
          
          <form className="real-contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label>Nombre y Apellido</label>
              <input type="text" placeholder="Ej. Juan Pérez" required />
            </div>
            
            <div className="form-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="ejemplo@empresa.com" required />
            </div>
            
            <div className="form-group">
              <label>Empresa / Sociedad</label>
              <input type="text" placeholder="Opcional" />
            </div>
            
            <div className="form-group">
              <label>Su mensaje</label>
              <textarea rows="4" placeholder="¿En qué podemos ayudarle?" required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary form-submit-btn">
              ENVIAR MENSAJE <Icon icon="mdi:send" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
