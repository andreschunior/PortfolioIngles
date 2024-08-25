import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa el CSS de Swiper adecuado
import "swiper/css/pagination"; // Importa el CSS de la paginación si deseas personalizarlo

import TestimonioCard from "./TestimoniosCard";
import photo1 from "../../../../../public/kevinProfilePhoto.jpeg";
import photo2 from "../../../../../public/gabrielProfilePhoto.png";
import { Pagination } from "swiper/modules";

// Aquí defines tus testimonios
const testimonios = [
  {
    foto: photo1.src,
    texto:
      "Out of the hundreds of people I've managed, Jose has honestly been the best employee I've ever had the pleasure of managing. Always up for a challenge, very motivated, self-sufficient, bright, polite, and an extremely quick learner. I can't recommend him enough!",
    nombre: "Kevin Bissinger",
    lugar: "CEO NeuroUnify.",
    link: "https://www.linkedin.com/company/neurounify/posts/?feedView=all",
  },
  {
    foto: photo2.src,
    texto:
      "José Andrés trabajó conmigo durante varios meses y demostró ser muy creativo, responsable y dedicado con todos los proyectos que desarrollamos para mi canal de Youtube. Estoy muy contento con su trabajo, de hecho mi video más popular lo hizo él. Sin duda recomiendo 100% a José Andrés.",
    nombre: "Gabriel Lopez",
    lugar: "JakepokerVegas",
    link: "https://www.instagram.com/jakepokervegas?igsh=ZXV4OGx0NDFsNXFi",
  },
  // Añade más testimonios aquí
];

const TestimoniosCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".custom-swiper-pagination" }} // Usa una clase personalizada para la paginación
        navigation
        modules={[Pagination]} // Registra el módulo de paginación
        className="mySwiper"
      >
        {testimonios.map((testimonio, index) => (
          <SwiperSlide key={index}>
            <TestimonioCard {...testimonio} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="custom-swiper-pagination flex justify-center gap-2 mt-3" />
    </div>
  );
};

export default TestimoniosCarousel;
