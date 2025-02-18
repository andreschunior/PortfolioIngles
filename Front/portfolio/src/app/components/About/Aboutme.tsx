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
        Hello!
      </h1>
      <h1
        className={`text-4xl font-bold font-roboto text-white mt-0 ${
          isMobile ? "text-2xl" : "text-4xl"
        }`}
      >
        I am José, nice to meet you
      </h1>
      <p
        className={`text-lg font-bold font-roboto text-white mt-9 ${
          isMobile ? "w-full" : "w-1/2"
        }`}
      >
        Full stack developer from Venezuela, with experience in JavaScript,
        HTML, CSS, and technologies like Next.js, Node.js, React, and SQL. I
        worked at Neurounify in Fort Worth, Texas, where I managed Microsoft
        systems and provided customer support. Additionally, I have skills in
        graphic editing and photography, which allow me to bring creativity to
        my projects. I am resilient, reliable, and always seek innovative
        solutions in web development, my true passion.
      </p>
    </div>
  );
};
