import React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, handleChange }: InputProps) => {
  // you can define onchange handle withing component
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const handlFocusChange = (e: React.FocusEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
