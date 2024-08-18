import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { styled } from "@mui/material";

export const MainLayout = () => {
  return (
    <Wrapper>
      <Header />
      <Outlet />
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  backgroundImage:
    "url('https://img.goodfon.ru/wallpaper/nbig/e/65/zima-gory-alpy-sneg-vecher.webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
});
