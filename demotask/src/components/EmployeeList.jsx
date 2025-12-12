import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteEmployee } from "./employeeSlice";

function EmployeeList() {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-3">
      {employees.map((emp) => (
        <li
          key={emp.id}
          className="flex justify-between items-center p-3 rounded-md bg-gray-100 shadow"
        >
          
          <span className="text-red-600 font-medium">
            {emp.name} — {emp.age} — {emp.dept}
          </span>

          <button
            onClick={() => dispatch(deleteEmployee(emp.id))}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default EmployeeList;
