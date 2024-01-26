import React from "react";
import { CustomButton } from "./CustomButton.ts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className, ...rest }) => {
  return <CustomButton className={className} {...rest} />;
};

export default Button;
