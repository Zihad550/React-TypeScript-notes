import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
const User = () => {
  // for type assertion as keyword is used
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
      name: "Jehad",
      email: "jehad@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Log In</button>
      <p>User name is {user.name}</p>
      <p>User email is {user.email}</p>
    </div>
  );
};

export default User;
