import React, { useState, FC, InputHTMLAttributes, ChangeEvent } from "react";import { InputStyle } from "./Input.ts";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event) => void;
  value: string | number;
  className?: string;
}

const Input: FC<InputProps> = ({ value, className, onChange, ...rest }) => {
  const [innerValue, setInnerValue] = useState(value || "");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <InputStyle
      value={innerValue}
      onChange={handleChange}
      className={className}
      {...rest}
    />
  );
};
export default Input;
