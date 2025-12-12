import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "./employeeSlice";

function EmployeeForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [dept, setDept] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === "" || age === "" || dept === "") {
      alert("Please fill all fields");
      return;
    }

    dispatch(
      addEmployee({
        id: Date.now(),
        name,
        age,
        dept
      })
    );

    setName("");
    setAge("");
    setDept("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <input
        type="text"
        placeholder="Department"
        value={dept}
        onChange={(e) => setDept(e.target.value)}
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;