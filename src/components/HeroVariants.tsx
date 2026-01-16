import React from 'react';

// Opción 1: Bordes redondeados suaves
export const HeroRounded: React.FC = () => {
  return (
    <section className="bg-rebeca-bg">
      <div className="flex" style={{ height: '716px' }}>
        <div>
          <img 
            src="/image1.jpeg" 
            alt="Interior de Retacería Rebeca" 
            style={{ 
              width: '637px', 
              height: '716px',
              objectFit: 'cover',
              borderRadius: '0 24px 24px 0' // Redondeado solo en el lado derecho
            }}
          />
        </div>
        <div className="flex items-center justify-center flex-1" style={{ marginLeft: '12px' }}>
          <div className="text-center">
            <h1 className="font-roboto text-rebeca-brand" style={{ fontSize: '64px', lineHeight: '1.2', margin: 0, fontWeight: 'bold' }}>
              Rebeca
            </h1>
            <h2 className="font-inter text-rebeca-subtitle" style={{ fontSize: '32px', lineHeight: '1.4', margin: 0, marginTop: '24px' }}>
              Tu retacería de confianza
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

// Opción 2: Con sombra y elevación
export const HeroShadow: React.FC = () => {
  return (
    <section className="bg-rebeca-bg">
      <div className="flex" style={{ height: '716px' }}>
        <div>
          <img 
            src="/image1.jpeg" 
            alt="Interior de Retacería Rebeca" 
            style={{ 
              width: '637px', 
              height: '716px',
              objectFit: 'cover',
              boxShadow: '20px 20px 60px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px'
            }}
          />
        </div>
        <div className="flex items-center justify-center flex-1" style={{ marginLeft: '12px' }}>
          <div className="text-center">
            <h1 className="font-roboto text-rebeca-brand" style={{ fontSize: '64px', lineHeight: '1.2', margin: 0, fontWeight: 'bold' }}>
              Rebeca
            </h1>
            <h2 className="font-inter text-rebeca-subtitle" style={{ fontSize: '32px', lineHeight: '1.4', margin: 0, marginTop: '24px' }}>
              Tu retacería de confianza
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

// Opción 3: Forma orgánica con curva
export const HeroOrganic: React.FC = () => {
  return (
    <section className="bg-rebeca-bg">
      <div className="flex" style={{ height: '716px' }}>
        <div>
          <img 
            src="/image1.jpeg" 
            alt="Interior de Retacería Rebeca" 
            style={{ 
              width: '637px', 
              height: '716px',
              objectFit: 'cover',
              clipPath: 'ellipse(95% 100% at 0% 50%)',
            }}
          />
        </div>
        <div className="flex items-center justify-center flex-1" style={{ marginLeft: '12px' }}>
          <div className="text-center">
            <h1 className="font-roboto text-rebeca-brand" style={{ fontSize: '64px', lineHeight: '1.2', margin: 0, fontWeight: 'bold' }}>
              Rebeca
            </h1>
            <h2 className="font-inter text-rebeca-subtitle" style={{ fontSize: '32px', lineHeight: '1.4', margin: 0, marginTop: '24px' }}>
              Tu retacería de confianza
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

// Opción 4: Diagonal inclinada
export const HeroDiagonal: React.FC = () => {
  return (
    <section className="bg-rebeca-bg">
      <div className="flex" style={{ height: '716px' }}>
        <div>
          <img 
            src="/image1.jpeg" 
            alt="Interior de Retacería Rebeca" 
            style={{ 
              width: '637px', 
              height: '716px',
              objectFit: 'cover',
              clipPath: 'polygon(0 0, 100% 0, 95% 100%, 0 100%)',
            }}
          />
        </div>
        <div className="flex items-center justify-center flex-1" style={{ marginLeft: '12px' }}>
          <div className="text-center">
            <h1 className="font-roboto text-rebeca-brand" style={{ fontSize: '64px', lineHeight: '1.2', margin: 0, fontWeight: 'bold' }}>
              Rebeca
            </h1>
            <h2 className="font-inter text-rebeca-subtitle" style={{ fontSize: '32px', lineHeight: '1.4', margin: 0, marginTop: '24px' }}>
              Tu retacería de confianza
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

// Opción 5: Con borde decorativo estilo costura
export const HeroStitched: React.FC = () => {
  return (
    <section className="bg-rebeca-bg">
      <div className="flex" style={{ height: '716px' }}>
        <div style={{ position: 'relative' }}>
          <img 
            src="/image1.jpeg" 
            alt="Interior de Retacería Rebeca" 
            style={{ 
              width: '637px', 
              height: '716px',
              objectFit: 'cover',
              border: '4px dashed rgba(179, 5, 5, 0.3)',
              borderRadius: '12px',
              padding: '8px',
              backgroundColor: 'white'
            }}
          />
        </div>
        <div className="flex items-center justify-center flex-1" style={{ marginLeft: '12px' }}>
          <div className="text-center">
            <h1 className="font-roboto text-rebeca-brand" style={{ fontSize: '64px', lineHeight: '1.2', margin: 0, fontWeight: 'bold' }}>
              Rebeca
            </h1>
            <h2 className="font-inter text-rebeca-subtitle" style={{ fontSize: '32px', lineHeight: '1.4', margin: 0, marginTop: '24px' }}>
              Tu retacería de confianza
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
