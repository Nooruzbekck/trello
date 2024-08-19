import { createSlice } from "@reduxjs/toolkit";
import { getTask } from "../thunks/TaskThunk";
import { Task } from "../../types/auth";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.tasks = action.payload;
    });
  },
});
