import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Button2 from "./components/Button2";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("Jehad");
  const num = 5;
  console.log(value);

  return (
    <div className="App">
      {/* no event button */}
      <Button handleClick={() => console.log("Button clicked")} />

      {/* with event button */}
      <Button2
        id={5}
        handleClick={(e, id) => console.log("Button clicked", e, id)}
      />
      <Input value={value} handleChange={(e) => setValue(e.target.value)} />
    </div>
  );
}

export default App;
