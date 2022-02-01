import React from "react";

type OptionalProps = {
  messageName?: string;
  messageCount?: number;
};
const Optional = ({ messageName, messageCount }: OptionalProps) => {
  return (
    <div>
      <h2>{messageName}</h2>
      <p>Total Message: {messageCount}</p>
    </div>
  );
};

export default Optional;
