import React from "react";
import "./App.css";
import ConditionalType from "./components/ConditionalType";
import Heading from "./components/Heading";
import Optional from "./components/Optional";
import Parent from "./components/Parent";

function App() {
  return (
    <div className="App">
      <ConditionalType status="success" />
      <Heading>Welcome to my website</Heading>
      <Parent>
        <Heading>Welcome to my website</Heading>
      </Parent>
      <Optional messageName="Jehad's messages" />
    </div>
  );
}

export default App;
