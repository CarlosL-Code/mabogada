import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Expertos legales en constitución de empresas",
      desc: "Constituimos sociedades extranjeras en Chile. Trabajamos de manera estrecha con el cliente en cada etapa.",
      bg: "/images/hero-1.jpg"
    },
    {
      title: "Asesoría integral para inversión extranjera",
      desc: "Representación legal y judicial de confianza para operar en cualquier región del país mediante servicios integrales.",
      bg: "/images/hero-2.jpg"
    },
    {
      title: "Procesos ágiles y con total seguridad",
      desc: "Gestión experta ante SII, municipalidades y entidades gubernamentales para iniciar sus operaciones rápidamente.",
      bg: "/images/hero-3.jpg"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section id="inicio" className="hero-section">
      
      {/* Slider horizontal infinito sin efecto de rebobinado */}
      <div className="hero-slider-container">
        {slides.map((slide, index) => {
          let positionClass = 'slide-hidden';
          if (index === currentSlide) {
            positionClass = 'slide-active';
          } else if (index === (currentSlide - 1 + slides.length) % slides.length) {
            positionClass = 'slide-prev';
          } else {
            positionClass = 'slide-next';
          }

          return (
            <div 
              key={index}
              className={`hero-slide-bg ${positionClass}`} 
              style={{ backgroundImage: `url(${slide.bg})` }}
            ></div>
          );
        })}
      </div>
      
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-text-container">
          <div className="hero-blue-box"></div>
          {/* El key forza a que la animación CSS se reinicie, sutil hacia el lado */}
          <div className="hero-text fade-in-side" key={currentSlide}>
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].desc}</p>
          </div>
        </div>

        <div className="hero-bullets">
          {slides.map((_, index) => (
            <span 
              key={index} 
              className={`bullet ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
