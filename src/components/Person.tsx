import React from "react";
import { PersonProps } from "./Person.types";

const Person = ({ name, age, job }: PersonProps) => {
  const { first, last } = name;
  return (
    <div>
      <h2>
        {first} {last}
      </h2>
      <p>{age}</p>
      <p>{job}</p>
    </div>
  );
};

export default Person;
