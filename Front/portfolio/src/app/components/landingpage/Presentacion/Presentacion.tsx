import React from "react";
import { Subtexto } from "../../textoSecundario/TextoSecundario";
import { Titulo1 } from "../textoTitulo/TextoTitulo";
import ProfileImagen from "../../../../../public/profile photo andres.png";
import useIsMobile from "@/app/hook/hookmobile";
import elementos from "../../../../../public/elementosDesarrolloWeb.png";

export const Presentacion: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <>
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
            isMobile ? "w-3/5" : "w-1/4"
          } object-cover transition-transform duration-300 `}
        />
      </div>
      <div className=" flex justify-center bg-light-gray">
        <img
          src={elementos.src}
          alt="React Logo"
          className="w-2/3  bg-light-gray"
        />
      </div>
    </>
  );
};
