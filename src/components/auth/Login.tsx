import React from "react";
import { Input } from "../UI/Input";
import { styled } from "@mui/material";

export const Login = () => {
  return (
    <Form>
      <ImageLogo
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzM0e_L6ZSK-vssbPHu9js-6_q_JaXBrwxHw&s"
        alt=""
      />
      <Input type="text" onChange={() => {}} value="" />
    </Form>
  );
};

const Form = styled("form")({
  width: "400px",
  height: "fit-content",
  padding: "32px 40px",
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ImageLogo = styled("img")({
  width: "170px",
  height: "40px",
});
