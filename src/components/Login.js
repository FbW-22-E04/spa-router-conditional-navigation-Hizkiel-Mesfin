import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [data, setData] = useState({
    username: "john doe",
    password: "r3@ct",
    identical: false,
    showError: false,
  });
  const { username, password, identical, showError } = data;

  const navigate = useNavigate();

  const inputUsername = useRef();
  const inputPassword = useRef();

  const handleChange = () =>
    inputUsername.current.value === username &&
    inputPassword.current.value === password &&
    setData({ ...data, identical: true });

  const handleSubmit = (e) => {
    e.preventDefault();
    identical ? navigate("/home") : setData({ ...data, showError: true });
    inputUsername.current.value = "";
    inputPassword.current.value = "";
  };

  return (
    <>
      <h1>Login</h1>

      <p style={{ opacity: showError ? "1" : "0" }}>
        The username or password is incorrect!
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          ref={inputUsername}
          placeholder="Username"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          ref={inputPassword}
          placeholder="Password"
          onChange={handleChange}
        />

        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
