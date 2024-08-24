import React from "react";
import TarjetaProps from "./types";

const Tarjeta: React.FC<TarjetaProps> = ({ icono, titulo, texto, lista }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 max-w-sm mx-auto">
      <div className="flex justify-center items-center mb-4">
        <div className="text-4xl">{icono}</div>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">{titulo}</h2>
      <p className="text-center text-md mb-6">{texto}</p>
      <ul className="list-none text-center space-y-2">
        {lista.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tarjeta;
