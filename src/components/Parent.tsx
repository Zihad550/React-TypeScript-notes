import React from "react";

type ParentProps = {
  children: React.ReactNode;
};
const Parent = ({ children }: ParentProps) => {
  return <div>{children}</div>;
};

export default Parent;
