import { useState } from 'react';
import './ConstitutionProcess.css';
import { Icon } from '@iconify/react';

const ConstitutionProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: "Documentación y Poderes", desc: "Redacción, apostillado y traducción de documentos societarios desde el extranjero para acreditar la existencia de la sociedad original. Es el paso base para iniciar.", icon: "mdi:file-document-edit-outline" },
    { title: "Inscripción en Chile", desc: "Se protocolizan los documentos en notaría, se publica el extracto en el Diario Oficial y se inscribe debidamente en el Conservador de Bienes Raíces respectivo.", icon: "mdi:bank-outline" },
    { title: "Inicio de Actividades", desc: "Gestión experta ante el Servicio de Impuestos Internos (SII) para la obtención del RUT de empresa e inicio formal de actividades en el país.", icon: "mdi:domain" },
    { title: "Domicilio Tributario", desc: "Asesoría para arrendamiento de local comercial o contratación de domicilio virtual, un requisito fundamental del SII para operar.", icon: "mdi:map-marker-radius-outline" },
    { title: "Régimen Tributario", desc: "Análisis y selección del régimen tributario más idóneo para su modelo de negocio, y posterior solicitud de autorización para emitir facturas.", icon: "mdi:calculator" },
    { title: "Permisos y Patentes", desc: "Tramitación de patentes comerciales en la municipalidad correspondiente y autorizaciones sanitarias en SEREMI si su actividad lo requiere.", icon: "mdi:certificate-outline" },
    { title: "Trámites Operativos", desc: "Última fase: Apertura de cuentas bancarias corporativas, contratos laborales, inscripciones en Dirección del Trabajo y representación continua.", icon: "mdi:briefcase-check-outline" }
  ];

  return (
    <section id="proceso" className="process-dynamic-section">
      <div className="container">
        
        <div className="process-dynamic-header">
          <div className="section-title-clean">PROCESO PASO A PASO</div>
          <h2>Un proceso claro y estructurado</h2>
          <p>Para no abrumarle con trámites, hemos consolidado la constitución de su empresa en 7 etapas. Conózcalas a continuación.</p>
        </div>

        <div className="process-tabs-container">
          {/* Left Column: Tab List */}
          <div className="process-tabs-list">
            {steps.map((step, index) => (
              <button 
                key={index} 
                className={`process-tab-btn ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="tab-number">0{index + 1}</span>
                <span className="tab-title">{step.title}</span>
                <Icon icon="mdi:chevron-right" className="tab-arrow" />
              </button>
            ))}
          </div>

          {/* Right Column: Active Content */}
          <div className="process-tab-content">
            <div className="tab-content-inner fade-in">
              <Icon icon={steps[activeStep].icon} className="content-icon" />
              <h3><span>0{activeStep + 1}.</span> {steps[activeStep].title}</h3>
              <p>{steps[activeStep].desc}</p>
            </div>
            
            <div className="rep-legal-mini">
              <Icon icon="mdi:shield-check" className="mini-shield" />
              <div>
                <strong>Representante Legal Obligatorio:</strong> Asumimos este rol para que pueda operar directamente desde el extranjero.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConstitutionProcess;
