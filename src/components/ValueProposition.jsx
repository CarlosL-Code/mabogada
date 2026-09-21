import './ValueProposition.css';
import { Icon } from '@iconify/react';

const ValueProposition = () => {
  const stats = [
    { num: "01", title: "ESTABILIDAD ECONÓMICA", icon: "mdi:bank-outline" },
    { num: "02", title: "ENTORNO FAVORABLE", icon: "mdi:domain" },
    { num: "03", title: "MECANISMOS CLAROS", icon: "mdi:scale-balance" },
    { num: "04", title: "PROCESOS ÁGILES", icon: "mdi:rocket-launch-outline" }
  ];

  return (
    <section id="propuesta" className="split-section vp-section">
      <div className="split-left vp-blue-wrapper">
        <div className="vp-blue-content">
          <div className="section-title-clean text-white">POR QUÉ CHILE</div>
          <h2>Trabajo estrecho con el cliente en cada etapa de la constitución.</h2>
          
          <div className="vp-list">
            <div className="vp-list-item">
              <Icon icon="mdi:briefcase-outline" className="vp-list-icon" />
              <div>
                <h4>DEDICACIÓN EXCLUSIVA</h4>
                <p>Constitución de sociedades extranjeras en Chile mediante servicios integrales a su medida.</p>
              </div>
            </div>
            
            <div className="vp-list-item">
              <Icon icon="mdi:map-marker-radius" className="vp-list-icon" />
              <div>
                <h4>ALCANCE NACIONAL</h4>
                <p>Permite operar en el sur o en cualquier región del país sin limitaciones.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="split-right vp-white-wrapper">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <Icon icon={stat.icon} className="stat-icon" />
              <div className="stat-number">{stat.num}</div>
              <div className="stat-title">{stat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
