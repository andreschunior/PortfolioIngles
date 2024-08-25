import React from "react";
import Image from "next/image";
import logo from "../../../../../public/LogoJA.png";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-dark-blue text-white p-4 flex items-center justify-between">
      <div className="flex-shrink-0">
        <a
          href="/" // Cambia el enlace según tus necesidades
        >
          <Image
            src={logo}
            alt="Logo"
            width={60}
            height={60}
            className="cursor-pointer"
          />
        </a>
      </div>

      {/* Botón */}
      <div>
        <a
          href="/contacto" // Cambia el enlace según tus necesidades
          className="bg-mint-green text-gray-900 px-4 py-2 rounded hover:bg-opacity-80 transition"
        >
          Contáctame
        </a>
      </div>
    </nav>
  );
};
