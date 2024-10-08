"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../../../public/LogoJA.png";
import { FaBars, FaTimes } from "react-icons/fa";
import useIsMobile from "@/app/hook/hookmobile";

export const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Añadir el tipo string para sectionId
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-dark-blue text-white p-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <a href="/">
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </a>
      </div>

      {/* Menú hamburguesa en pantallas móviles */}
      {isMobile ? (
        <div>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
          {isOpen && (
            <div className="absolute top-16 left-0 w-full bg-dark-blue text-center space-y-4 py-4">
              <a
                onClick={() => scrollToSection("about-me")}
                className="block hover:underline cursor-pointer"
              >
                About Me
              </a>
              <a
                onClick={() => scrollToSection("habilidades")}
                className="block hover:underline cursor-pointer"
              >
                Habilidades
              </a>
              <a
                onClick={() => scrollToSection("proyectos")}
                className="block hover:underline cursor-pointer"
              >
                Proyectos
              </a>
              <a
                onClick={() => scrollToSection("testimonios")}
                className="block hover:underline cursor-pointer"
              >
                Testimonios
              </a>
              <a
                href="/contacto"
                className="block bg-mint-green text-gray-900 px-4 py-2 rounded hover:bg-opacity-80 transition"
              >
                Contáctame
              </a>
            </div>
          )}
        </div>
      ) : (
        // Menú completo en pantallas grandes
        <div className="flex-grow text-center space-x-8">
          <a
            onClick={() => scrollToSection("about-me")}
            className="hover:underline cursor-pointer"
          >
            About Me
          </a>
          <a
            onClick={() => scrollToSection("habilidades")}
            className="hover:underline cursor-pointer"
          >
            Habilidades
          </a>
          <a
            onClick={() => scrollToSection("proyectos")}
            className="hover:underline cursor-pointer"
          >
            Proyectos
          </a>
          <a
            onClick={() => scrollToSection("testimonios")}
            className="hover:underline cursor-pointer"
          >
            Testimonios
          </a>
        </div>
      )}

      {/* Botón Contáctame para pantallas grandes */}
      {!isMobile && (
        <div>
          <a
            href="/contacto"
            className="bg-mint-green text-gray-900 px-4 py-2 rounded hover:bg-opacity-80 transition"
          >
            Contáctame
          </a>
        </div>
      )}
    </nav>
  );
};
