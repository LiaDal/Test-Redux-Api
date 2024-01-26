import React, { useState, FC, InputHTMLAttributes, ChangeEvent } from "react";
import { Title } from "../product/card/product-card.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: (event) => void;
  value: string;
  className?: string;
}

const Input: FC<InputProps> = ({ value, className, onChange, ...rest }) => {
  const [innerValue, setInnerValue] = useState(value || "");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInnerValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <input
      value={innerValue}
      onChange={handleChange}
      className={className}
      {...rest}
    />
  );
};
export default Input;
