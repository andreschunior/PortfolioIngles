import React from "react";
import { Subtexto } from "../../textoSecundario/TextoSecundario";
import { Titulo1 } from "../textoTitulo/TextoTitulo";
import ProfileImagen from "../../../../../public/profile photo andres.png";
import useIsMobile from "@/app/hook/hookmobile";

export const Presentacion: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`flex flex-col justify-center items-center h-screen bg-light-gray ${
        isMobile ? "p-4" : "p-8"
      } space-y-2`}
    >
      <Titulo1
        title={`Desarrollador Full Stack y diseñador ${isMobile ? "" : ""}`}
        className={`text-center  ${
          isMobile ? "text-2xl mt-0 text-center" : "text-4xl text-center"
        }`}
      />
      <Subtexto
        Subtexto={`Transformando Ideas en Realidades ${isMobile ? "" : ""}`}
        className={`text-center ${isMobile ? "text-md" : "text-lg"}`}
      />
      <br />
      <br />
      <img
        src={ProfileImagen.src}
        alt="Descripción de la imagen"
        className={`${
          isMobile ? "w-2/3 " : "w-1/6"
        } object-cover transition-transform duration-300 `}
      />
    </div>
  );
};
