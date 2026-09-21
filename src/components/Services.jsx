import './Services.css';
import { Icon } from '@iconify/react';

const Services = () => {
  const serviciosPrincipales = [
    { title: "Constitución de Sociedades", desc: "Asesoría para iniciar EIRL, SpA, o S.R.L.", icon: "mdi:domain-plus", bg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" },
    { title: "Representación Legal", desc: "Domicilio tributario y representación en Chile.", icon: "mdi:account-tie-hat", bg: "https://images.unsplash.com/photo-1556761175-5973dc0f32b7?auto=format&fit=crop&q=80" },
    { title: "Gestión Administrativa", desc: "Trámites en SII, patentes comerciales y permisos.", icon: "mdi:file-document-multiple-outline", bg: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" },
    { title: "Asesoría Corporativa", desc: "Redacción de contratos y juntas de accionistas.", icon: "mdi:handshake-outline", bg: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80" },
    { title: "Registro de Marcas", desc: "Protección de propiedad intelectual en INAPI.", icon: "mdi:trademark", bg: "https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&q=80" },
    { title: "Representación Judicial", desc: "Defensa y gestión de litigios en tribunales chilenos.", icon: "mdi:scale-balance", bg: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80" }
  ];

  return (
    <section id="servicios" className="section services-dark">
      <div className="container">
        
        <div className="services-dark-header">
          <div className="section-title-clean text-white">PORTAFOLIO LEGAL</div>
          <h2>Servicios Corporativos</h2>
          <p>
            Nuestro estudio jurídico brinda un portafolio completo de soluciones 
            diseñadas específicamente para inversionistas y empresas extranjeras.
          </p>
        </div>

        <div className="services-dark-grid">
          {serviciosPrincipales.map((srv, index) => (
            <div 
              className="service-dark-card" 
              key={index}
              style={{ backgroundImage: `url(${srv.bg})` }}
            >
              <div className="service-card-overlay"></div>
              <div className="service-card-content">
                <div className="srv-icon">
                  <Icon icon={srv.icon} />
                </div>
                <h4>{srv.title}</h4>
                <p>{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="services-dark-cta">
          <div className="cta-content">
            <h3>¿Qué tipo de sociedad se adapta a su proyecto?</h3>
            <p>SpA, Responsabilidad Limitada, o Agencia. Le ayudamos a tomar la decisión correcta.</p>
          </div>
          <a href="#contacto" className="btn btn-outline-white">Solicitar Asesoría</a>
        </div>

      </div>
    </section>
  );
};

export default Services;
