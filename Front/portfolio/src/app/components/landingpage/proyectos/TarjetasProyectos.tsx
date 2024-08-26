import React from "react";
import TarjetaProyectosProps from "./types";
import Boton from "../../BotonTarjetas/Boton";

const Tarjeta: React.FC<TarjetaProyectosProps> = ({
  imagen,
  logo,
  texto,
  url,
}) => {
  return (
    <div className="relative w-full h-64 md:w-1/4 rounded-2xl overflow-hidden group">
      <div
        className="w-full h-full bg-cover bg-center rounded-lg transition-transform duration-500 transform group-hover:scale-105"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-100 transition-all duration-500 flex flex-col justify-center items-center">
          <div className="text-white text-center">
            <div className="absolute inset-0 flex justify-center items-center transition-opacity duration-500 group-hover:opacity-0">
              {logo && <div className="text-6xl">{logo}</div>}{" "}
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-500 opacity-0 group-hover:opacity-100 ">
              {texto && (
                <div className="text-lg text-center font-bold mb-5 w-10/12">
                  {texto}
                </div>
              )}
              <Boton texto="Visitar Página" url={url} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tarjeta;
