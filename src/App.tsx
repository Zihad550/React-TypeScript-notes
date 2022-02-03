import React from "react";
import "./App.css";
import Private from "./components/Private";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Private isLoggedIn={true} component={Profile} />
    </div>
  );
}

export default App;
