import React from "react";
import BotonConIcono from "../../BotonGeneral/BotonGeneral";

export const ContactoContenedor: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg max-w-full mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 text-black !important">
          ¿Listo para Crear Juntos? ¡Conéctate Conmigo!
        </h2>
        <p className="text-gray-600 text-center">
          Siempre estoy disponible para hablar sobre proyectos de diseño de
          productos o nuevas oportunidades profesionales.
        </p>
        <div className="mt-10">
          <a
            href="/contacto" // Cambia el enlace según tus necesidades
          >
            <BotonConIcono texto="Contáctame" />
          </a>
        </div>
      </div>
    </>
  );
};
