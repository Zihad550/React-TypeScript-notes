import React from "react";
import "./App.css";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeContext";
import User from "./components/context/User";
import UserContextProvider from "./components/context/UserContext";

function App() {
  return (
    <UserContextProvider>
      <ThemeContextProvider>
        <Box />
        <User />
      </ThemeContextProvider>
    </UserContextProvider>
  );
}

export default App;
