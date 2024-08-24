"use client";
import Image from "next/image";
import { Titulo1 } from "./components/landingpage/textoTitulo/TextoTitulo";
import { Subtexto } from "./components/textoSecundario/TextoSecundario";
import ProfileImagen from "../../public/profile photo andres.png";
import Tarjeta from "./components/landingpage/skills/TarjetasSkills";
import { FaReact } from "react-icons/fa";
import TarjetasdeProyectos from "./components/landingpage/proyectos/Tarjetas";
import Boton from "./components/BotonTarjetas/Boton";
import BotonConIcono from "./components/BotonGeneral/BotonGeneral";
import { FaGithub } from "react-icons/fa";
import { Testimonios } from "./components/landingpage/Testimonios/Testimonios";
import { ContactoContenedor } from "./components/landingpage/Contactarme/Contacto";
import { Footer } from "./components/landingpage/footer/Footer";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-light-gray space-y-2">
        <Titulo1 title="Diseñador, Desarrollador Full Stack" />
        <Subtexto Subtexto="Transformando Ideas en Realidades" />
        <br />
        <br />
        <br />
        <img
          src={ProfileImagen.src}
          alt="Descripción de la imagen"
          className="w-1/6 object-cover"
        />
      </div>

      <div className="h-screen bg-white">
        <div className="h-3/4 bg-blue-gray flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold font-roboto text-white mt-0">
            Hola soy Jose. Encantado de conocerte
          </h1>
          <p className="text-lg font-bold font-roboto text-white w-1/2 mt-9 text-center">
            Desarrollador full stack de Venezuela, con experiencia en
            JavaScript, HTML, CSS, y tecnologías como Next.js, Node.js, React, y
            SQL. Trabajé en Neurounify en Fort Worth, Texas, donde gestioné
            sistemas Microsoft y brindé soporte al cliente. Además, tengo
            habilidades en edición gráfica y fotografía, lo que me permite
            aportar creatividad a mis proyectos. Soy resiliente, confiable, y
            siempre busco soluciones innovadoras en el desarrollo web, mi
            verdadera pasión.
          </p>
        </div>
        <div className="flex justify-between items-stretch h-screen bg-gray-100 p-4">
          <Tarjeta
            icono={<FaReact />} // Ejemplo de icono usando React Icons
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
          <Tarjeta
            icono={<FaReact />} // Ejemplo de icono usando React Icons
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
            icono={<FaReact />} // Ejemplo de icono usando React Icons
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
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="flex  justify-center mt-10 mb-10 ">
          <Titulo1 title="Mis Proyectos" />
        </div>
        <TarjetasdeProyectos />
        <div className="flex justify-center mt-10 ">
          <BotonConIcono
            texto=" Ver mas en GitHub"
            onClick={() => window.open("https://github.com", "_blank")}
            icono={FaGithub}
          />
        </div>
        <Testimonios />
        <ContactoContenedor />
        <Footer />
      </div>
    </>
  );
}
