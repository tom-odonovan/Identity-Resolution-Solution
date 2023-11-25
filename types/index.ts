import { type } from "os";
import { MouseEventHandler } from "react";

export interface ButtonProps {
  label?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}