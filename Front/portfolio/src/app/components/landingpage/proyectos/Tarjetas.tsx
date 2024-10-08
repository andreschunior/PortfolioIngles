import React from "react";

import { FaReact, FaNode, FaJs } from "react-icons/fa"; // Asegúrate de importar los íconos necesarios
import imagen1 from "../../../../../public/ultranet.png";
import imagen2 from "../../../../../public/astraResidential.png";
import imagen3 from "../../../../../public/LuckyThor.png";
import imagen4 from "../../../../../public/bannerpublicidadpalesvertical.png";
import Tarjeta from "./TarjetasProyectos";
import logo from "../../../../../public/LogoJA.png";

const TarjetasdeProyectos: React.FC = () => {
  return (
    <div className="p-4 bg-gray-200">
      <div className="flex flex-wrap  justify-center gap-20">
        <Tarjeta
          imagen={imagen1.src}
          logo={<img src={logo.src} alt="React Logo" className="w-12 h-12" />} // Puedes usar un ícono o texto aquí
          texto="Intranet servicios de ISP "
          url="https://frontend-swart-sigma.vercel.app"
        />
        <Tarjeta
          imagen={imagen2.src}
          logo={<img src={logo.src} alt="React Logo" className="w-12 h-12" />} // Puedes usar un ícono o texto aquí
          texto="Astra Residentialn inmobiliaria ubicada en Texas"
          url="https://www.astraresidential.com"
        />
        <Tarjeta
          imagen={imagen4.src}
          logo={<img src={logo.src} alt="React Logo" className="w-12 h-12" />} // Puedes usar un ícono o texto aquí
          texto="Dr Pales HealthCare"
          url="https://www.drpaleshealthcare.com"
        />
        <Tarjeta
          imagen={imagen3.src}
          logo={<img src={logo.src} alt="React Logo" className="w-12 h-12" />} // Puedes usar un ícono o texto aquí
          texto="LuckyThor Marca de Hidromiel"
          url="https://andreschunior.github.io/LuckyThorWebsite/HomePage/index.html"
        />
      </div>
    </div>
  );
};

export default TarjetasdeProyectos;
