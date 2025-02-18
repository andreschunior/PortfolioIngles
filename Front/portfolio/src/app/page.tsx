"use client";
import React from "react";

import Tarjeta from "./components/landingpage/skills/TarjetasSkills";
import { FaNodeJs, FaPencilRuler, FaReact } from "react-icons/fa";
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

      <div className="bg-mint-green max-h-4">
        <br />
      </div>

      <div className="h-screen bg-white">
        {/* Sección About Me */}
        <div id="about-me">
          <AboutMe />
        </div>

        {/* Sección Habilidades */}
        <div id="habilidades">
          <div
            className={`flex ${
              isMobile ? "flex-col" : "flex-row"
            } justify-between items-stretch h-auto bg-gray-100 p-4`}
          >
            <Tarjeta
              icono={<FaReact />}
              titulo="Front End"
              texto="Front-end developer with experience in Next.js, React, Redux, Tailwind CSS, Bootstrap, HTML, CSS, and JavaScript. I transform ideas into interactive and attractive interfaces with a focus on efficiency and responsive design."
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
              titutloTecnologias="Front End Technologies"
            />
            <Tarjeta
              icono={<FaNodeJs />}
              titulo="Back End"
              texto="Back-end developer with experience in PostgreSQL, MongoDB, Mongoose, TypeORM, Node.js, Express, Cloudinary, and AJAX. I develop robust and scalable solutions, managing databases, APIs, and cloud services efficiently."
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
              titutloTecnologias="Back End Technologies"
            />
            <Tarjeta
              icono={<FaPencilRuler />}
              titulo="Graphic Design"
              texto="I am a graphic designer with skills in photography, image editing, vectorization, and 2D design. I transform ideas into impactful visuals with creativity and technical precision."
              lista={[
                "Affinity Designer",
                "Affinity Photo",
                "Photoshop",
                "Lightroom",
                "Illustrator",
              ]}
              titutloTecnologias="Design Tools"
            />
          </div>
        </div>

        {/* Sección Proyectos */}
        <div id="proyectos" className="bg-gray-200 mt-10">
          <div className="flex justify-center mb-10">
            <h1 className="text-4xl font-bold bg-clip-text text-mint-green font-roboto mb-6">
              Proyectos
            </h1>
          </div>
          <TarjetasdeProyectos />
          <div className="flex justify-center mt-10">
            <BotonConIcono
              texto="See more on GitHub"
              onClick={() => window.open("https://github.com/andreschunior")}
              icono={FaGithub}
            />
          </div>
        </div>

        {/* Sección Testimonios */}
        <div id="testimonios">
          <Testimonios />
        </div>

        {/* Sección Contacto y Footer */}
        <ContactoContenedor />
        <Footer />
      </div>
    </>
  );
}
