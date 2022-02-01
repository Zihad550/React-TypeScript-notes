import React from "react";
import "./App.css";
import Container from "./components/Container";

function App() {
  return (
    <div className="App">
      <Container
        styles={{
          padding: "20px 5px",
          border: "1px solid lightblue",
          background: "lightgreen",
          margin: "10px 5px",
          borderRadius: "5px",
          boxShadow: "0px 0px 9px 0px gray",
          color: "purple",
        }}
      />
    </div>
  );
}

export default App;
