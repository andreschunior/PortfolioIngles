import BotonProps from "../BotonTarjetas/types";
import { IconType } from "react-icons"; 

export default interface BotonConIconoProps extends BotonProps {
    icono?: IconType; // Prop adicional para el ícono
  }