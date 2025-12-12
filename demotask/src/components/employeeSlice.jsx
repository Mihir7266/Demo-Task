import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        addEmployee: (state, action) => {
            state.push(action.payload);
        },
        deleteEmployee: (state, action) => {
            return state.filter((emp) => emp.id !== action.payload);
        }
    }
});
export const {addEmployee,deleteEmployee} =employeeSlice.actions;
export default employeeSlice.reducer;