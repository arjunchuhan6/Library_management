import { createSlice } from "@reduxjs/toolkit";
import { Books } from "./mockData";

const FormSlice = createSlice({
    name: "Form",
    initialState: Books,
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        }
    }
});

export const { addItem } = FormSlice.actions;
export default FormSlice.reducer;