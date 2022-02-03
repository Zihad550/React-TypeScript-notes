import React from "react";
import "./App.css";
import RandomNumber from "./components/RandomNumber";

function App() {
  return (
    <div>
      {/*  you cannot pass 3 you have to pass only one */}
      {/* <RandomNumber value={5} isPositive isNegative isZero /> */}
      {/* isPositive={true} and isPositive are same if the value is true then you don't have to write anything */}
      <RandomNumber value={5} isPositive />
    </div>
  );
}

export default App;
