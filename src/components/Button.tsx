import React from "react";

type ButtonProps = {
  handleClick: () => void;
};
const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default Button;
