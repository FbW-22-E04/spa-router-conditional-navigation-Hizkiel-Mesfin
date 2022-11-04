import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [{ userName, password, error }, setData] = useState({
    userName: "",
    password: "",
    error: false,
  });

  console.log(error);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setData((prev) => ({ ...prev, userName: "", password: "" }));
    if (userName === "john doe" && password === "re@we") {
      return navigate("/home");
    }

    if (userName !== "john doe" || password !== "re@we") {
      setData((prev) => ({ ...prev, error: true }));
    } else {
      setData((prev) => ({ ...prev, error: false }));
    }
  };

  return (
    <div>
      <h1>Login</h1>

      {error ? (
        <p className="error">The username or password is incorrect!</p>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          value={userName}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                userName: e.target.value,
              };
            })
          }
          onFocus={() => setData((prev) => ({ ...prev, error: false }))}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setData((prev) => {
              return {
                ...prev,
                password: e.target.value,
              };
            })
          }
          onFocus={() => setData((prev) => ({ ...prev, error: false }))}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Login;
