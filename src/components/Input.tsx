import React from "react";

type InputProps = React.ComponentProps<"input">;
const Input = (props: InputProps) => {
  return (
    <div>
      return <input {...props} />
    </div>
  );
};

export default Input;
