import './Profile.css';
import { Icon } from '@iconify/react';

const Profile = () => {
  return (
    <section id="perfil" className="split-section profile-section">
      <div className="split-left profile-content-wrapper">
        <div className="profile-content">
          <div className="icon-badge">
            <Icon icon="mdi:bookmark-outline" width="40" />
          </div>
          
          <div className="section-title-clean">PERFIL PROFESIONAL</div>
          
          <h2>Especialista en derecho societario y corporativo.</h2>
          
          <div className="profile-text">
            <p><strong>Mg. Claudia Mendoza Melo</strong> - Abogada, Magíster en Derecho de la Empresa.</p>
            <p>
              Asesora a empresas chilenas y extranjeras en materias administrativas, laborales, derecho de consumo, 
              derecho societario, redacción y revisión de contratos y registros de marcas.
            </p>
          </div>
          
          <a href="#contacto" className="btn btn-primary">VER MÁS</a>
        </div>
      </div>
      
      <div className="split-right profile-image-wrapper">
        {/* Utilizamos la imagen real proporcionada por el usuario */}
        <img 
          src="/images/claudia.jpg" 
          alt="Claudia Mendoza Melo" 
          className="profile-img-real" 
        />
      </div>
    </section>
  );
};

export default Profile;
