import React, { useState } from "react";

const Loggedin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <button onClick={(e) => setIsLoggedIn(true)}>Log In</button>
      <button onClick={(e) => setIsLoggedIn(false)}>Log Out</button>
      <p>User is {isLoggedIn ? "Logged in" : "Logged out"}</p>
    </div>
  );
};

export default Loggedin;
