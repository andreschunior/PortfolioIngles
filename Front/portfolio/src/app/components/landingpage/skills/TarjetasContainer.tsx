import useIsMobile from "@/app/hook/hookmobile";
import Tarjeta from "./TarjetasSkills";

export const TarjetasContainer: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div
      className={`flex ${
        isMobile ? "flex-col" : "flex-row"
      } justify-center items-center`}
    ></div>
  );
};
