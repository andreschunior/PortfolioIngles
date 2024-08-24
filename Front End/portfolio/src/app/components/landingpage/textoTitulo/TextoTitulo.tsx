import React from "react";
import TextoTitulo from "./type";

export const Titulo1: React.FC<TextoTitulo> = ({ title }) => {
  return (
    <>
      <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 font-roboto mb-6">
        {title}
      </h1>
    </>
  );
};
