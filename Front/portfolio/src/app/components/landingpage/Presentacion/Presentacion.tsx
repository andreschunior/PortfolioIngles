"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Subtexto } from "../../textoSecundario/TextoSecundario";
import { Titulo1 } from "../textoTitulo/TextoTitulo";
import ProfileImagen from "../../../../../public/profile photo andres.png";
import useIsMobile from "@/app/hook/hookmobile";
import elementos from "../../../../../public/elementosDesarrolloWeb.png";

export const Presentacion: React.FC = () => {
  const isMobile = useIsMobile();
  const controlsTitle = useAnimation();
  const controlsSubtext = useAnimation();

  useEffect(() => {
    const titleTimeout = setTimeout(
      () => controlsTitle.start({ opacity: 1, y: 0 }),
      300
    );
    const subtextTimeout = setTimeout(
      () => controlsSubtext.start({ opacity: 1, y: 0 }),
      600
    );

    return () => {
      clearTimeout(titleTimeout);
      clearTimeout(subtextTimeout);
    };
  }, [controlsTitle, controlsSubtext]);

  return (
    <>
      <div
        className={`flex flex-col justify-center items-center h-screen bg-light-gray ${
          isMobile ? "p-4" : "p-8"
        } space-y-2`}
      >
        <motion.div
          animate={controlsTitle}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Titulo1
            title={`Full Stack Developer ${isMobile ? "" : ""}`}
            className={`text-center ${isMobile ? "text-2xl mt-0" : "text-4xl"}`}
          />
        </motion.div>
        <motion.div
          animate={controlsSubtext}
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Subtexto
            Subtexto={`Transforming Ideas into Realities ${isMobile ? "" : ""}`}
            className={`text-center ${isMobile ? "text-md" : "text-lg"}`}
          />
        </motion.div>
        <br />
        <br />
        <img
          src={ProfileImagen.src}
          alt="Image Description"
          className={`${
            isMobile ? "w-3/5" : "w-1/4"
          } object-cover transition-transform duration-300`}
        />
      </div>
      <div className="flex justify-center bg-light-gray">
        <img
          src={elementos.src}
          alt="React Logo"
          className="w-2/3 bg-light-gray"
        />
      </div>
    </>
  );
};
