import { createAsyncThunk } from "@reduxjs/toolkit";

export interface Data {
  email: string;
  password: string;
  role?: string;
}

export const postLoginThunk = createAsyncThunk(
  "auth/postLogin",
  async (data: Data) => {
    const newData = {
      ...data,
    };

    if (data.email === "admin@gmail.com" && data.password === "Admin123") {
      newData.role = "ADMIN";
    } else {
      newData.role = "USER";
    }
    try {
      const response = await fetch("https://4f45b312fd699b94.mokky.dev/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const postRegisterThunk = createAsyncThunk(
  "auth/postRegister",
  async (data: Data) => {
    const newData = {
      ...data,
    };

    if (data.email === "admin@gmail.com" && data.password === "Admin123") {
      newData.role = "ADMIN";
    } else {
      newData.role = "USER";
    }

    try {
      const response = await fetch(
        "https://4f45b312fd699b94.mokky.dev/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newData),
        }
      );
      const jsonResponse = await response.json();
      return jsonResponse;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
