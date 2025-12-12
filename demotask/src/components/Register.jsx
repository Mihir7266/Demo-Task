import React, { useState } from "react";
import "./register.css";

export default function Register({ goToLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const valiDate = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.username.trim()) {
      formErrors.username = "Username is Required";
      isValid = false;
    } else if (formData.username.length < 4) {
      formErrors.username = "Username Must Be Atlist 4 Charcaters ";
      isValid = false;
    }

    if (!formData.email.trim()) {
      formErrors.email = "Email is Required";
      isValid = false;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      formErrors.email = "Please enter a valid email ";
      isValid = false;
    }

    if (!formData.password.trim()) {
      formErrors.password = "Username is Required";
      isValid = false;
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    if (!formData.confirmPassword.trim()) {
      formErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match ";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  function handleSubmit(e) {
    e.preventDefault();
    if (valiDate()) {
      alert("Registration Successful! Please Login.");
      console.log("Form data", formData);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      sessionStorage.setItem("formData", JSON.stringify(formData));
      goToLogin();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Register</h1>
        <div>
          <label>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
          <br />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}

          <br />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}

          <br />
        </div>
        <div>
          <label>ConfirmPassword:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

          <br />
        </div>
        <button type="subnit">Submit</button>
      </div>
    </form>
  );
}
