import React from "react";

type PersonProps = {
  name: {
    first: string;
    last: string;
  };
  // you can also write array of stirng , numbers or booleans
  skills: { name: string; level: string }[];
};
const Person = ({ name, skills }: PersonProps) => {
  return (
    <div>
      <h1>
        {name.first} {name.last}
      </h1>

      {skills.map((d) => (
        <p>
          {d.name}
          {d.level}
        </p>
      ))}
    </div>
  );
};

export default Person;
