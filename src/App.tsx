import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button
        onClick={() => console.log("print on the console")}
        variant="primary"
      >
        Click me
      </Button>
    </div>
  );
}

export default App;
