import React, { useState } from "react";
import { styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { Button } from "../UI/Button";
import { Icons } from "../../assets";

import { Input } from "../UI/Input";
import { sendTask } from "../../redux/thunks/TaskThunk";
import { AppDispatch } from "../../redux";

export const TaskForm = ({ onClose }) => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    const newTask = {
      id: Date.now().toString(),
      title: value,
      columns: [],
    };
    dispatch(sendTask(newTask));
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <StyledInput
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        placeholder="Введите задачу"
      />
      <ActionsButton>
        <Button type="submit">Добавить список</Button>
        <span onClick={onClose}>
          <Icons.CloseIcon />
        </span>
      </ActionsButton>
    </Form>
  );
};

const Form = styled("form")({
  background: "#000",
  borderRadius: "8px",
  minWidth: "272px !important",
  maxWidth: "272px",

  height: "fit-content",
  padding: "12px",
});

const ActionsButton = styled("div")({
  display: "flex",
  gap: "10px",
  alignItems: "center",
  marginTop: "12px",

  "& .MuiButtonBase-root": {
    padding: "4px 13px",
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "4px",
    textTransform: "initial",
    color: "#172b4d",
    background: "#579dff",
    minWidth: "102px",
    height: "35px",
    ":hover": {
      background: "#85B8FF",
    },
  },
  span: {
    padding: "6px",
    display: "flex",
    alignItems: "center",
    borderRadius: "4px",

    ":hover": {
      background: "#A6C5E229",
    },
  },

  "& svg": {
    width: "19px",
    height: "19px",
  },
});

const StyledInput = styled(Input)({
  height: "32px",
  background: "#22272B",
  fontSize: "15px",
  fontWeight: "600",
  borderRadius: "4px",
  paddingLeft: "0px",

  "&:active": {
    border: "1px solid #579dff",
  },

  "& .MuiInputBase-root": {
    color: "#f3f6f7",

    "& ::placeholder": {
      color: "#f3f6f7",
      fontSize: "14px",
      fontWeight: "600",
    },
  },
});
