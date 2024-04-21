import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}

export interface ServiceCardProps {
  IconComponent: IconType;
  label: string;
  subtext: string;
}

export interface ContactCardProps {
  imgURL: string;
  name: string;
  linkedinURL: string;
  feedback: string;
  role: string;
}
