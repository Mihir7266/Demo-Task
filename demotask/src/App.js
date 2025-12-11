import "./App.css";
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [page, setPage] = useState("register");

  return (
    <>
      {page === "register" && <Register goToLogin={() => setPage("login")} />}
      {page === "login" && <Login goToDashboard={() => setPage("dashboard")} />}
      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;
