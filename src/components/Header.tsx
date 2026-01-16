import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-rebeca-bg sticky top-0 z-50" style={{ height: '80px', width: '100%' }}>
      <nav className="flex items-center h-full justify-between md:justify-between px-4 md:px-0">
        {/* Logo - Centrado en mobile, a la izquierda en desktop */}
        <div 
          className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none cursor-pointer"
          style={{ paddingTop: '8px', paddingBottom: '8px', marginLeft: '0', ...(window.innerWidth >= 768 ? { marginLeft: '41px' } : {}) }}
          onClick={scrollToTop}
        >
          <img 
            src="/logo.jpg" 
            alt="Retacería Rebeca Logo" 
            style={{ width: '80px', height: '80px' }}
          />
        </div>
        
        {/* Hamburger Button - Solo visible en mobile */}
        <button
          className="md:hidden ml-auto z-50 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-rebeca-brand transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-rebeca-brand transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block h-0.5 w-full bg-rebeca-brand transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>

        {/* Navigation Links - Desktop (siempre visible) */}
        <div className="hidden md:flex gap-8 font-inter items-center" style={{ marginRight: '41px', fontSize: '15px' }}>
          <a 
            href="#ubicacion" 
            className="text-rebeca-nav hover:text-rebeca-brand transition-colors"
            style={{ textDecoration: 'none' }}
          >
            Ubicación
          </a>
          <a 
            href="#contacto" 
            className="text-rebeca-nav hover:text-rebeca-brand transition-colors"
            style={{ textDecoration: 'none' }}
          >
            Contacto
          </a>
        </div>

        {/* Mobile Menu - Solo visible cuando está abierto */}
        <div 
          className={`md:hidden fixed top-20 right-0 bg-rebeca-bg shadow-lg transition-all duration-300 ${
            isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
          }`}
          style={{ width: '200px' }}
        >
          <div className="flex flex-col p-6 gap-4 font-inter" style={{ fontSize: '15px' }}>
            <a 
              href="#ubicacion" 
              className="text-rebeca-nav hover:text-rebeca-brand transition-colors py-2"
              style={{ textDecoration: 'none' }}
              onClick={handleLinkClick}
            >
              Ubicación
            </a>
            <a 
              href="#contacto" 
              className="text-rebeca-nav hover:text-rebeca-brand transition-colors py-2"
              style={{ textDecoration: 'none' }}
              onClick={handleLinkClick}
            >
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
