import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-visible" style={{ 
      background: '#FFFAE4'
    }}>
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
          
          {/* Círculo rojo en esquina inferior derecha - sobre la foto */}
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

        </div>
        
        {/* Textos - centrados a la altura de la foto */}
        <div className="flex items-center justify-center flex-1 relative z-10">
          <div className="text-center" style={{marginTop:170}}>
            <h1 
              className="font-roboto text-rebeca-brand"
              style={{ fontSize: '64px', lineHeight: '1.2', margin: 0 , fontWeight: 'bold' }}
            >
              Rebeca
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
  );
};

export default Hero;
