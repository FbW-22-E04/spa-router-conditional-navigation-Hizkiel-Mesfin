import React, { useState } from "react";

export const Login = () => {
  const [data, setData] = useState({
    userName: "john doe",
    password: "r3@ct",
  });

  return (
    <>
      <h1>Login</h1>
      <p>The username or password is incorrect!</p>
      <form>
        <input type="text" name="userName" placeholder="Username" />

        <input type="password" name="password" placeholder="Password" />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
