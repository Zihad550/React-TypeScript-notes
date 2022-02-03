import { useContext } from "react";
import { UserContext } from "./UserContext";
const User = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "jehad",
      email: "dev.jehadhossain@gmail.com",
    });
  };
  const handleLogOut = () => {
    userContext.setUser(null);
  };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>Log Out</button>
      <h3>User name is: {userContext.user?.name}</h3>
      <p>User email is: {userContext.user?.email}</p>
    </div>
  );
};

export default User;
