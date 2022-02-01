import React from "react";

type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
  id: number;
};
const Button2 = ({ handleClick, id }: ButtonProps) => {
  return (
    <div>
      <button onClick={(e) => handleClick(e, id)}>Click Me</button>
    </div>
  );
};

export default Button2;
