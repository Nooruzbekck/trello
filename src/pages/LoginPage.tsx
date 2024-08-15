import { styled } from "@mui/material";
import React from "react";
import { Login } from "../components/auth/Login";
import { LoginImageLeft, LoginImageRight } from "../assets";

export const LoginPage = () => {
  return (
    <div>
      <Login />
      <ImageRight src={LoginImageRight} alt="LoginImageRight" />
      <ImageLeft src={LoginImageLeft} alt="LoginImageLeft" />
    </div>
  );
};

const ImageLeft = styled("img")(({ theme }) => ({
  position: "fixed",
  bottom: "0",
  left: "0",
  width: "25vw",
  height: "auto",
  zIndex: "-1",
  opacity: "0.9",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const ImageRight = styled("img")(({ theme }) => ({
  position: "fixed",
  bottom: "0",
  right: "0",
  width: "25vw",
  height: "auto",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));
