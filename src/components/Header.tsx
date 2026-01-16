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
    <>
      {/* HEADER DESKTOP - Mayor a 1199px */}
      <header className="hidden xl:block bg-rebeca-bg sticky top-0 z-50" style={{ height: '80px', width: '100%' }}>
        <nav className="flex items-center h-full">
          {/* Logo */}
          <div 
            className="cursor-pointer"
            style={{ paddingTop: '8px', paddingBottom: '8px', marginLeft: '41px', marginRight: 'auto' }}
            onClick={scrollToTop}
          >
            <img 
              src="/logo.jpg" 
              alt="Retacería Rebeca Logo" 
              style={{ width: '80px', height: '80px' }}
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 font-inter items-center" style={{ marginRight: '41px', fontSize: '15px' }}>
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
        </nav>
      </header>

      {/* HEADER TABLET/MOBILE - Menor a 1199px */}
      <header className="block xl:hidden bg-rebeca-bg sticky top-0 z-50" style={{ height: '80px', width: '100%' }}>
        <nav className="flex items-center h-full px-4">
          {/* Hamburger Menu - Izquierda */}
          <button
            className="z-50 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-rebeca-brand transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-rebeca-brand transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-rebeca-brand transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>

          {/* Logo - Derecha */}
          <div 
            className="cursor-pointer ml-auto"
            style={{ paddingTop: '8px', paddingBottom: '8px' }}
            onClick={scrollToTop}
          >
            <img 
              src="/logo.jpg" 
              alt="Retacería Rebeca Logo" 
              style={{ width: '80px', height: '80px' }}
            />
          </div>

          {/* Mobile Menu Dropdown */}
          <div 
            className={`fixed top-20 right-0 bg-rebeca-bg shadow-lg transition-all duration-300 ${
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
    </>
  );
};

export default Header;
