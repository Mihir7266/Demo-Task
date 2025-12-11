import React, { useState } from "react";

export default function Login({goToDashboard}) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const storedData = JSON.parse(sessionStorage.getItem("formData"));

    if (!storedData) {
      alert("No registered user found!");
      return;
    }

    if (
      loginData.username === storedData.username &&
      loginData.password === storedData.password
    ) {
      alert("Login successful");
    } else {
      alert("Invalid username or password");
    }
    goToDashboard();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={loginData.username}
          onChange={handleChange}
        />
        <br />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
        />
        <br />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}
