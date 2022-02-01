import React from "react";

type GreetProps = {
  // the number and boolean are similar as string
  name: string;
};

const Greets = ({ name }: GreetProps) => {
  return (
    <div>
      <h2>Welcome back {name}</h2>
    </div>
  );
};

export default Greets;
