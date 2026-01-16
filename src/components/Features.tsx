import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-white py-8 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8" style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
        
        {/* Card 1: Variedad y Calidad */}
        <div 
          className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-rebeca-brand mx-auto"
          style={{ width: '100%', maxWidth: '960px', height: 'auto', minHeight: '300px' }}
        >
          {/* Texto - En mobile arriba, en desktop izquierda */}
          <div className="flex flex-col justify-center items-start bg-white p-8 md:p-12 order-2 md:order-1" style={{ width: '100%', minHeight: '200px' }}>
            <h3 
              className="font-inter text-rebeca-brand mb-4"
              style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700 }}
            >
              Variedad y Calidad
            </h3>
            <p 
              className="font-inter text-rebeca-gray"
              style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 400 }}
            >
              Telas de temporada y clásicos
            </p>
          </div>
          {/* Imagen - En mobile abajo, en desktop derecha */}
          <div className="order-1 md:order-2" style={{ width: '100%', minHeight: '250px' }}>
            <img 
              src="/image2.jpg" 
              alt="Interior de la retacería con variedad de telas"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '250px' }}
            />
          </div>
        </div>

        {/* Card 2: Atención Personalizada - SIN BORDE */}
        <div 
          className="flex flex-col md:flex-row rounded-lg mx-auto relative"
          style={{ width: '100%', maxWidth: '960px', height: 'auto', minHeight: '300px' }}
        >
          {/* Semicírculo punteado decorativo */}
          <svg 
            className="absolute hidden xl:block"
            style={{
              top: '405px',
              right: '-17px',
              width: '400px',
              height: '400px',
              zIndex: 1,
            }}
            viewBox="0 0 200 200"
          >
            <path
              d="M 10 100 A 90 90 0 0 1 190 100"
              fill="none"
              stroke="#777777"
              strokeWidth="1"
              strokeDasharray="4,4"
            />
          </svg>

          {/* Tijeras para el semicírculo */}
          <div 
            className="absolute hidden xl:block"
            style={{
              top: '566px',
              right: '347px',
              zIndex: 2,
              fontSize: '32px',
              color: '#0F0F0F',
              transform: 'rotate(10deg)',
            }}
          >
            <i className="bi bi-scissors"></i>
          </div>

          {/* Imagen - En mobile arriba, en desktop izquierda */}
          <div className="order-1 overflow-hidden rounded-l-lg" style={{ width: '100%', minHeight: '250px' }}>
            <img 
              src="/image3.jpeg" 
              alt="Atención personalizada"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '250px' }}
            />
          </div>
          
          {/* Texto - En mobile abajo, en desktop derecha con fondo clarito */}
          <div className="flex flex-col justify-center items-start bg-rebeca-bg p-8 md:p-12 order-2" style={{ width: '100%', minHeight: '200px' }}>
            <h3 
              className="font-inter text-rebeca-brand mb-4"
              style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700, lineHeight: '1.3' }}
            >
              Atención<br />
              Personalizada
            </h3>
            <p 
              className="font-inter text-rebeca-gray"
              style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 400, lineHeight: '1.5' }}
            >
              Por parte de personal<br />
              experimentado
            </p>
          </div>
        </div>

        {/* Card 3: Confecciones únicas */}
        <div 
          className="flex flex-col md:flex-row rounded-lg overflow-hidden border border-rebeca-brand mx-auto"
          style={{ width: '100%', maxWidth: '960px', height: 'auto', minHeight: '300px' }}
        >
          {/* Texto - En mobile arriba, en desktop izquierda */}
          <div className="flex flex-col justify-center items-start bg-white p-8 md:p-12 order-2 md:order-1" style={{ width: '100%', minHeight: '200px' }}>
            <h3 
              className="font-inter text-rebeca-brand mb-4"
              style={{ fontSize: 'clamp(24px, 5vw, 32px)', fontWeight: 700 }}
            >
              Confecciones únicas
            </h3>
            <p 
              className="font-inter text-rebeca-gray"
              style={{ fontSize: 'clamp(16px, 3vw, 18px)', fontWeight: 400, lineHeight: '1.6' }}
            >
              Repasadores, almohadones,<br />
              delantales y otras<br />
              creaciones de calidad
            </p>
          </div>
          {/* Imagen - En mobile abajo, en desktop derecha */}
          <div className="order-1 md:order-2" style={{ width: '100%', minHeight: '250px' }}>
            <img 
              src="/image4.jpeg" 
              alt="Confecciones únicas"
              style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: '250px' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
