import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../utils/constants/api";
import axios from "axios";
import { Task } from "../../types/auth";

interface ColumnUpdate {
  id: string;
  columns: Array<{ columnTitle: string; columnId: string }>;
}

export const sendTask = createAsyncThunk<void, Task>(
  "task/sendTask",
  async (task, { dispatch }) => {
    try {
      await axios.post(`${BASE_URL}/columns`, task);
      dispatch(getTask());
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const getTask = createAsyncThunk("task/getTask", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/columns`);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
});

export const sendColumn = createAsyncThunk<void, ColumnUpdate>(
  "task/sendColumn",
  async ({ id, columns }, { dispatch }) => {
    try {
      await axios.patch(`${BASE_URL}/columns/${id}`, { columns: columns });
      dispatch(getTask());
      throw new Error("taskId and column data are required for sendColumn");
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
