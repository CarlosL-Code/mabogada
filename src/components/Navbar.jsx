import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio' },
    { name: 'PERFIL', href: '#perfil' },
    { name: '¿POR QUÉ CHILE?', href: '#propuesta' },
    { name: 'PROCESO', href: '#proceso' },
    { name: 'SERVICIOS', href: '#servicios' },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-left">
        <div className="navbar-logo">
          <a href="#inicio">
            <span className="logo-icon">C</span>
            <h2>CLAUDIA MENDOZA</h2>
          </a>
        </div>
      </div>
      
      <div className="navbar-center">
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-right">
        <a href="tel:+56950669781" className="phone-block">
          <div className="phone-icon-wrapper">
            <Icon icon="mdi:phone" width="20" />
          </div>
          <span className="phone-text">+56 9 5066 9781</span>
        </a>
        
        <button 
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} width="28" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
