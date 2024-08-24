import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Importa el CSS de Swiper adecuado
import TestimonioCard from "./TestimoniosCard";
import photo1 from "../../../../public/kevinProfilePhoto.jpeg";
// Aquí defines tus testimonios
const testimonios = [
  {
    foto: photo1.src,
    texto:
      "Out of the hundreds of people I've managed, Jose has honestly been the best employee I've ever had the pleasure of managing. Always up for a challenge, very motivated, self-sufficient, bright, polite, and an extremely quick learner. I can't recommend him enough!",
    nombre: "Kevin Bissinger",
    lugar: "CEO NeuroUnify.",
  },
  {
    foto: "/path/to/photo2.jpg",
    texto: "Excelente servicio al cliente y un producto de alta calidad.",
    nombre: "Ana Gómez",
    lugar: "Tech Solutions",
  },
  // Añade más testimonios aquí
];

const TestimoniosCarousel: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper"
      >
        {testimonios.map((testimonio, index) => (
          <SwiperSlide key={index}>
            <TestimonioCard {...testimonio} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimoniosCarousel;
