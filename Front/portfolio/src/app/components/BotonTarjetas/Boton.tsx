import React from "react";
import BotonProps from "./types";

const Boton: React.FC<BotonProps> = ({ texto, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-6 rounded-full text-sm font-semibold border-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{
        borderImage: "linear-gradient(45deg, #6ee7b7, #3b82f6) 1",
        borderColor: "transparent",
        backgroundColor: "transparent",
      }}
    >
      {texto}
    </button>
  );
};

export default Boton;
