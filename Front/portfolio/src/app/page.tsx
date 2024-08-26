"use client";
import React from "react";

import Tarjeta from "./components/landingpage/skills/TarjetasSkills";
import { FaReact } from "react-icons/fa";
import TarjetasdeProyectos from "./components/landingpage/proyectos/Tarjetas";
import BotonConIcono from "./components/BotonGeneral/BotonGeneral";
import { FaGithub } from "react-icons/fa";
import { Testimonios } from "./components/landingpage/Testimonios/Testimonios";
import { ContactoContenedor } from "./components/landingpage/Contactarme/Contacto";
import { Footer } from "./components/landingpage/footer/Footer";
import useIsMobile from "./hook/hookmobile";
import { AboutMe } from "./components/About/Aboutme";
import { Presentacion } from "./components/landingpage/Presentacion/Presentacion";

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <>
      <Presentacion />
      <div className="h-screen bg-white">
        <AboutMe />
        <div
          className={`flex ${
            isMobile ? "flex-col" : "flex-row"
          } justify-between items-stretch h-auto bg-gray-100 p-4`}
        >
          <Tarjeta
            icono={<FaReact />}
            titulo="Front End"
            texto="Desarrollador front-end con experiencia en Next.js, React, Redux, Tailwind CSS, Bootstrap, HTML, CSS y JavaScript. Transformo ideas en interfaces interactivas y atractivas con un enfoque en la eficiencia y el diseño responsivo."
            lista={[
              "Next.js",
              "React",
              "Redux",
              "Tailwind CSS",
              "Bootstrap",
              "HTML",
              "CSS",
              "JavaScript",
            ]}
            titutloTecnologias="Tecnologias Front End"
          />
          <Tarjeta
            icono={<FaReact />}
            titulo="Back End"
            texto="Desarrollador back-end con experiencia en PostgreSQL, MongoDB, Mongoose, TypeORM, Node.js, Express, Cloudinary y AJAX. Desarrollo soluciones robustas y escalables, gestionando bases de datos, APIs y servicios en la nube con eficiencia."
            lista={[
              "PostgreSQL",
              "MongoDB",
              "Mongoose",
              "TypeORM",
              "Node.js",
              "Express",
              "Cloudinary",
              "AJAX",
            ]}
            titutloTecnologias="Tecnologias Back End"
          />
          <Tarjeta
            icono={<FaReact />}
            titulo="Diseño Gráfico"
            texto="Soy diseñador gráfico con habilidades en fotografía, edición de imágenes, vectorización, y diseño 2D. Transformo ideas en visuales impactantes con creatividad y precisión técnica."
            lista={[
              "Affinity Designer",
              "Affinity Photo",
              "Photoshop",
              "Lightroom",
              "Illustrator",
            ]}
            titutloTecnologias="Herramientas de diseño"
          />
        </div>

        <div className="flex justify-center  mb-10 bg-gray-200 mt-10  ">
          <h1 className="text-4xl font-bold  bg-clip-text text-mint-green font-roboto mb-6">
            Mis Proyectos
          </h1>
        </div>
        <TarjetasdeProyectos />
        <div className="bg-gray-200 ">
          <div className="flex justify-center mt-10 ">
            <BotonConIcono
              texto="Ver más en GitHub"
              onClick={() => window.open("https://github.com/andreschunior")}
              icono={FaGithub}
            />
          </div>
        </div>
        <Testimonios />
        <ContactoContenedor />
        <Footer />
      </div>
    </>
  );
}
