import React from "react";
import TextoSecundario from "./type";

export const Subtexto: React.FC<TextoSecundario> = ({ Subtexto }) => {
  return (
    <>
      <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-mint-green font-roboto">
        {Subtexto}
      </p>
    </>
  );
};
