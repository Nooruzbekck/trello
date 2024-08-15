import { styled } from "@mui/material";
import React from "react";
import { LoginImageLeft, LoginImageRight } from "../assets";
import { Register } from "../components/auth/Register";

export const RegisterPage = () => {
  return (
    <div>
      <Register />
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
