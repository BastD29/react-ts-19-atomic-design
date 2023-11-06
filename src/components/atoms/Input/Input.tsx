import React from "react";

type InputProps = {
  type: string;
  placeholder?: string;
  onInputChange?: (value: string) => void;
};

const Input: React.FC<InputProps> = ({ type, placeholder, onInputChange }) => (
  <input
    type={type}
    placeholder={placeholder}
    onChange={(event) => onInputChange && onInputChange(event.target.value)}
  />
);

export default Input;
