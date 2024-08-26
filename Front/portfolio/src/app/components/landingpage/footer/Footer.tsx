import React from "react";
import Image from "next/image";
import logo from "../../../../../public/LogoJA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"; // Corrección aquí
export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 min-h-[200px] flex flex-col justify-between">
      <div className="container mx-auto text-center mt-10">
        {/* Logo */}
        <div className="flex justify-center">
          <div className="mb-4 w-20">
            <a
              href="/" // Cambia el enlace según tus necesidades
            >
              <Image
                src={logo}
                alt="Logo"
                width={80}
                height={80}
                className="mx-auto"
              />
            </a>
          </div>
        </div>

        {/* Eslogan */}
        <p className="text-lg font-semibold mb-4">
          Transformemos Ideas en Realidades.
        </p>

        {/* Íconos de Redes Sociales */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/andreschunior"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              className="hover:text-gray-400"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-andrés-borrero-labrador-050b47225/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              className="hover:text-gray-400"
            />
          </a>
          <a href="andres23540575@gmail.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              className="hover:text-gray-400"
            />
          </a>
        </div>
      </div>

      {/* Información de Derechos de Autor */}
      <div className="text-center text-sm text-gray-500 mb-4">
        © 2024 José Andrés Borrero. Todos los derechos reservados.
      </div>
    </footer>
  );
};
