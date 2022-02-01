import React from "react";
import "./App.css";
import Greets from "./components/Greets";
import Person from "./components/Person";

function App() {
  const skills = [
    {
      name: "JavaScript",
      level: "Pro",
    },
    {
      name: "React",
      level: "Intermediate",
    },
    {
      name: "Typescript",
      level: "Pro",
    },
  ];
  return (
    <div className="App">
      <Greets name="Jehad" />
      <Person name={{ first: "Jehad", last: "Hossain" }} skills={skills} />
    </div>
  );
}

export default App;
