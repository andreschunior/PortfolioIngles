import React from "react";
import TarjetaProps from "./types";
import useIsMobile from "@/app/hook/hookmobile";

const Tarjeta: React.FC<TarjetaProps> = ({
  icono,
  titulo,
  texto,
  lista,
  titutloTecnologias,
}) => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto transform transition duration-300 hover:scale-105 hover:shadow-lg mt-10 mb-10 ${
        isMobile ? "w-full" : "w-auto"
      }`}
    >
      <div className="flex justify-center items-center mb-4">
        <div className="text-4xl transition-transform duration-300 hover:rotate-12">
          {icono}
        </div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4 text-dark-blue transition-colors duration-300 hover:text-mint-green">
        {titulo}
      </h2>
      <p className="text-center text-md mb-6 transition-opacity duration-300 hover:opacity-75">
        {texto}
      </p>
      <h2 className="text-xl font-bold text-center mb-4 text-mint-green">
        {titutloTecnologias}
      </h2>
      <ul className="list-none text-center space-y-2">
        {lista.map((item, index) => (
          <li
            key={index}
            className="text-gray-700 transition-colors duration-300 hover:text-dark-blue"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarjeta;
