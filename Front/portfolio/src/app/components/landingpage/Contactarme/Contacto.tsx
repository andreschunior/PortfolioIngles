import React from "react";
import BotonConIcono from "../../BotonGeneral/BotonGeneral";

export const ContactoContenedor: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 bg-white shadow-lg max-w-full mx-auto">
        <h2 className="text-2xl font-bold text-center mb-2 text-black !important">
          Ready to Create Together? Connect with Me!
        </h2>
        <p className="text-gray-600 text-center">
          I am always available to talk about product design projects or new
          professional opportunities.
        </p>
        <div className="mt-10">
          <a
            href="/contacto" // Change the link according to your needs
          >
            <BotonConIcono texto="Contact Me" />
          </a>
        </div>
      </div>
    </>
  );
};
