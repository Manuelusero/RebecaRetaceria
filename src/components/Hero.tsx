import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      {/* HERO DESKTOP - Mayor a 1199px */}
      <section className="hidden xl:block relative overflow-visible" style={{ background: '#FFFAE4' }}>
        <div className="flex relative items-start" style={{ height: '716px', paddingLeft: '100px', paddingTop: '60px' }}>
          {/* Contenedor de la imagen con decoraciones */}
          
          <div className="relative" style={{ width: '530px', height: '483px' }}>
            {/* Imagen con border-radius solo arriba */}
            <img 
              src="/image1.jpeg" 
              alt="Interior de Retacería Rebeca" 
              className="relative z-10"
              style={{ 
                width: '530px', 
                height: '583px',
                objectFit: 'cover',
                borderTopLeftRadius: '90px',
                borderTopRightRadius: '90px',
              }}
            />
            
            {/* Círculo rojo sólido en la parte inferior derecha */}
            <div 
              className="absolute"
              style={{
                width: '170px',
                height: '170px',
                backgroundColor: '#B30505',
                borderRadius: '50%',
                bottom: '-120px',
                right: '-35px',
                zIndex: 15,
              }}
            />
              {/* Línea punteada circular en la esquina derecha superior */}
            <svg 
              className="absolute"
              style={{
                top: '-250px',
                right: '-600px',
                width: '350px',
                height: '350px',
                zIndex: 5,
              }}
              viewBox="0 0 250 250"
            >
              <circle
                cx="125"
                cy="125"
                r="120"
                fill="none"
                stroke="#777777"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
            </svg>

            {/* Tijeras para el círculo superior */}
            <div 
              className="absolute"
              style={{
                top: '-40px',
                right: '-283px',
                zIndex: 6,
                fontSize: '32px',
                color: '#0F0F0F',
                transform: 'rotate(148deg)',
              }}
            >
              <i className="bi bi-scissors"></i>
            </div>

            {/* Línea punteada circular alrededor del círculo rojo */}
            <svg 
              className="absolute"
              style={{
                bottom: '-230px',
                right: '-182px',
                width: '490px',
                height: '490px',
                
              }}
              viewBox="0 0 250 250"
            >
              <circle
                cx="125"
                cy="125"
                r="120"
                fill="none"
                stroke="#777777"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
            </svg>

            {/* Tijeras para el círculo inferior */}
            <div 
              className="absolute"
              style={{
                right: '-143px',
                zIndex: 16,
                fontSize: '34px',
                color: '#0F0F0F',
                transform: 'rotate(36deg)',
              }}
            >
              <i className="bi bi-scissors"></i>
            </div>

          </div>
          
          {/* Textos - centrados a la altura de la foto */}
          <div className="flex items-center justify-center flex-1 relative z-10">
            <div className="text-center" style={{marginTop:170}}>
              <h1 
                className="font-passionone text-rebeca-brand"
                style={{ fontSize: '80px', lineHeight: '1.2', margin: 0 , fontWeight: 'regular' }}
              >
                REBECA
              </h1>
              
              <h2 
                className="font-inter text-rebeca-subtitle"
                style={{ fontSize: '32px', lineHeight: '1.4', margin: 0, marginTop: '24px' }}
              >
                Tu retacería de confianza
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* HERO TABLET - Entre 810px y 1199px */}
      <section className="hidden md:block xl:hidden relative overflow-visible" style={{ background: '#FFFAE4' }}>
        <div className="flex flex-col items-center justify-center py-12 px-8" style={{ minHeight: '600px' }}>
          {/* Textos arriba */}
          <div className="text-center mb-8">
            <h1 
              className="font-passionone text-rebeca-brand"
              style={{ fontSize: '64px', lineHeight: '1.2', margin: 0, fontWeight: 'regular' }}
            >
              REBECA
            </h1>
            
            <h2 
              className="font-inter text-rebeca-subtitle"
              style={{ fontSize: '24px', lineHeight: '1.4', margin: 0, marginTop: '16px' }}
            >
              Tu retacería de confianza
            </h2>
          </div>

          {/* Imagen con círculo rojo */}
          <div className="relative" style={{ width: '400px', maxWidth: '100%' }}>
            <img 
              src="/image1.jpeg" 
              alt="Interior de Retacería Rebeca" 
              className="relative z-10"
              style={{ 
                width: '100%', 
                height: 'auto',
                objectFit: 'cover',
                borderTopLeftRadius: '70px',
                borderTopRightRadius: '70px',
              }}
            />
            
            {/* Círculo rojo */}
            <div 
              className="absolute"
              style={{
                width: '120px',
                height: '120px',
                backgroundColor: '#B30505',
                borderRadius: '50%',
                bottom: '-60px',
                right: '-30px',
                zIndex: 15,
              }}
            />
          </div>
        </div>
      </section>

      {/* HERO MOBILE - Menor a 810px */}
      <section className="block md:hidden relative overflow-visible" style={{ background: '#FFFAE4' }}>
        <div className="flex flex-col items-center justify-center py-8 px-4" style={{ minHeight: '500px' }}>
          {/* Textos arriba */}
          <div className="text-center mb-6">
            <h1 
              className="font-passionone text-rebeca-brand"
              style={{ fontSize: '48px', lineHeight: '1.2', margin: 0, fontWeight: 'regular' }}
            >
              REBECA
            </h1>
            
            <h2 
              className="font-inter text-rebeca-subtitle"
              style={{ fontSize: '18px', lineHeight: '1.4', margin: 0, marginTop: '12px' }}
            >
              Tu retacería de confianza
            </h2>
          </div>

          {/* Imagen con círculo rojo */}
          <div className="relative" style={{ width: '320px', maxWidth: '100%' }}>
            <img 
              src="/image1.jpeg" 
              alt="Interior de Retacería Rebeca" 
              className="relative z-10"
              style={{ 
                width: '100%', 
                height: 'auto',
                maxHeight: '350px',
                objectFit: 'cover',
                borderTopLeftRadius: '60px',
                borderTopRightRadius: '60px',
              }}
            />
            
            {/* Círculo rojo */}
            <div 
              className="absolute"
              style={{
                width: '90px',
                height: '90px',
                backgroundColor: '#B30505',
                borderRadius: '50%',
                bottom: '-15px',
                right: '-20px',
                zIndex: 15,
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
