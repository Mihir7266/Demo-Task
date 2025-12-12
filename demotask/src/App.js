import "./App.css";
import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./components/store";
import EmployeeForm from "./components/employeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [page, setPage] = useState("register");

  return (
    <>
    <Provider store={store}>
      {page === "register" && <Register goToLogin={() => setPage("login")} />}
      {page === "login" && <Login goToEmployeeForm={() => setPage("EmployeeForm")} />}
      {page === "EmployeeForm" && <EmployeeForm />}
      <EmployeeList />
      </Provider>
    </>
  );
}

export default App;
