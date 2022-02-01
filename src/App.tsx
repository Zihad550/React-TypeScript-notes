import React from "react";
import "./App.css";
import Person from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name={{ first: "Jehad", last: "Hossain" }}
        age={18}
        job="web developer"
      />
    </div>
  );
}

export default App;
