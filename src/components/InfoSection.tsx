import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <section style={{ background: '#FFFFFF' }}>
      {/* Título principal */}
      <div className="text-center flex flex-col justify-center items-center relative z-20" style={{ width: '100%', height: '256px', background: 'linear-gradient(to bottom, #FFFAE4 0%, #FFFFFF 100%)' }}>
        <h2 
          className="font-inter text-rebeca-brand mb-2"
          style={{ fontSize: 'clamp(32px, 8vw, 64px)', fontWeight: 700, lineHeight: '1.2' }}
        >
          Más de 40 años
        </h2>
        <p 
          className="font-inter text-rebeca-gray"
          style={{ fontSize: 'clamp(16px, 4vw, 22px)', fontWeight: 600 }}
        >
          acompañándote en tus proyectos
        </p>
      </div>

      {/* Contenedor de Mapa e Información */}
      <div id="ubicacion" className="bg-rebeca-bg" style={{ width: '100%' }}>
        <div className="flex justify-center py-12 px-4 md:px-0">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0"
            style={{
              justifyContent: 'center',
              alignItems: 'start',
            }}
          >
            <style>{`
              @media (min-width: 768px) {
                .info-grid {
                  column-gap: 90px !important;
                  transform: translateX(10px) !important;
                  grid-template-columns: auto auto !important;
                }
              }
            `}</style>
            {/* Mapa de Google Maps */}
            <div className="w-full flex justify-center md:justify-start">
              <div style={{ width: '100%', maxWidth: '382px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.7946299999995!2d-58.4089!3d-34.7201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcd3bfef7e1c1d%3A0x1234567890abcdef!2sSan%20Nicol%C3%A1s%20520%2C%20B2700%20Pergamino%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar"
                  style={{ border: 0, width: '100%', height: '253px' }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Retacería Rebeca"
                />
              </div>
            </div>

            {/* Información de contacto */}
            <div className="space-y-8 text-center md:text-left">
            {/* Horarios de Atención */}
            <div>
              <h3 
                className="font-inter text-rebeca-dark mb-3"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                Horarios de Atención
              </h3>
              <p 
                className="font-inter"
                style={{ fontSize: '15px', fontWeight: 500, color: '#777777' }}
              >
                Lunes a Sábados
              </p>
              <p 
                className="font-inter"
                style={{ fontSize: '15px', fontWeight: 500, color: '#777777' }}
              >
                8:30 a 12:45 hs - 17:00 a 20:45 hs.
              </p>
            </div>

            {/* Contacto */}
            <div>
              <h3 
                className="font-inter text-rebeca-dark mb-3"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                Contacto
              </h3>
              <p 
                className="font-inter"
                style={{ fontSize: '15px', fontWeight: 500, color: '#777777' }}
              >
                2477 12345678
              </p>
            </div>

            {/* Ubicación */}
            <div>
              <h3 
                className="font-inter text-rebeca-dark mb-3"
                style={{ fontSize: '15px', fontWeight: 500 }}
              >
                Ubicación
              </h3>
              <p 
                className="font-inter"
                style={{ fontSize: '15px', fontWeight: 500, color: '#777777' }}
              >
                San Nicolás 520, B2700 Pergamino, Provincia de Buenos Aires, Argentina
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default InfoSection;
