import React from "react";

import { FaReact, FaNode, FaJs } from "react-icons/fa"; // Asegúrate de importar los íconos necesarios
import imagen1 from "../../../../../public/proyecto1.jpeg";
import imagen2 from "../../../../../public/proyecto2.jpeg";
import imagen3 from "../../../../../public/proyecto3.jpeg";
import Tarjeta from "./TarjetasProyectos";

const TarjetasdeProyectos: React.FC = () => {
  return (
    <div className="p-4">
      <div className="flex flex-wrap  justify-center gap-20">
        <Tarjeta
          imagen={imagen1.src}
          logo={<FaReact />} // Puedes usar un ícono o texto aquí
          texto="mi primer proyecto donde aprendi mis primeros pasos en la programacion"
        />
        <Tarjeta
          imagen={imagen2.src}
          logo={<FaNode />} // Puedes usar un ícono o texto aquí
          texto="Proyecto 2"
        />
        <Tarjeta
          imagen={imagen3.src}
          logo={<FaJs />} // Puedes usar un ícono o texto aquí
          texto="Proyecto 3"
        />
        <Tarjeta
          imagen={imagen1.src}
          logo={<FaReact />} // Puedes usar un ícono o texto aquí
          texto="Proyecto 4"
        />
        <Tarjeta
          imagen={imagen1.src}
          logo={<FaReact />} // Puedes usar un ícono o texto aquí
          texto="Proyecto 5"
        />
        <Tarjeta
          imagen={imagen1.src}
          logo={<FaReact />} // Puedes usar un ícono o texto aquí
          texto="Proyecto 6"
        />
      </div>
    </div>
  );
};

export default TarjetasdeProyectos;
