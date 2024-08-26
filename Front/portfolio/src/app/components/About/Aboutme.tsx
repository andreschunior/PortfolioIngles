import useIsMobile from "@/app/hook/hookmobile";
import React from "react";

export const AboutMe: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`h-3/4 bg-blue-gray flex flex-col justify-center items-center p-6 ${
        isMobile ? "text-center" : "text-left"
      }`}
    >
      <h1
        className={`text-4xl font-bold font-roboto text-white mt-0 ${
          isMobile ? "text-2xl" : "text-4xl"
        }`}
      >
        ¡Hola!
      </h1>
      <h1
        className={`text-4xl font-bold font-roboto text-white mt-0 ${
          isMobile ? "text-2xl" : "text-4xl"
        }`}
      >
        Soy José, encantado de conocerte
      </h1>
      <p
        className={`text-lg font-bold font-roboto text-white mt-9 ${
          isMobile ? "w-full" : "w-1/2"
        }`}
      >
        Desarrollador full stack de Venezuela, con experiencia en JavaScript,
        HTML, CSS, y tecnologías como Next.js, Node.js, React, y SQL. Trabajé en
        Neurounify en Fort Worth, Texas, donde gestioné sistemas Microsoft y
        brindé soporte al cliente. Además, tengo habilidades en edición gráfica
        y fotografía, lo que me permite aportar creatividad a mis proyectos. Soy
        resiliente, confiable, y siempre busco soluciones innovadoras en el
        desarrollo web, mi verdadera pasión.
      </p>
    </div>
  );
};
