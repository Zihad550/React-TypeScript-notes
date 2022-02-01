import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  const [user, setUser] = useState<null | AuthUser>({ email: "", name: "" });
  const handleLogin = () => {
    setUser({
      name: "Jehad",
      email: "jehad@gmail.com",
    });
  };
  const handleLogOut = () => {
    setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <button onClick={handleLogOut}>Log Out</button>
      <p>User name is {user?.name}</p>
      <p>User email is {user?.email}</p>
    </div>
  );
};

export default User;
