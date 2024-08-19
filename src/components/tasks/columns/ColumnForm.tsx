import React, { useState } from "react";
import { styled } from "@mui/material";
import { Button } from "../../UI/Button";
import { Icons } from "../../../assets";

export const ColumnForm = ({ onClose, onColumnData }) => {
  const [columnTitle, setColumnTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!columnTitle.trim()) return;
    const newTask = {
      columnId: Date.now().toString(),
      columnTitle,
    };
    onColumnData(newTask);
    setColumnTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <StyledInput
        onChange={(e) => setColumnTitle(e.target.value)}
        value={columnTitle}
        placeholder="Введите задачу"
      />
      <ActionsButton>
        <Button type="submit">Добавить список</Button>
        <span onClick={onClose}>
          <Icons.CloseIcon />
        </span>
      </ActionsButton>
    </form>
  );
};

const ActionsButton = styled("div")({
  display: "flex",
  gap: "4px",
  alignItems: "center",
  marginTop: "10px",

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

const StyledInput = styled("textarea")({
  background: "#22272B",
  fontSize: "15px",
  fontWeight: "600",
  borderRadius: "6px 6px 0px 0px",
  paddingLeft: "0px",
  border: "none",
  minHeight: "36px",
  maxHeight: "180px",
  minWidth: "248px",
  maxWidth: "248px",
  padding: "10px",
  resize: "none",
  overflow: "hidden",
  color: "#f3f6f7",
  overflowY: "scroll",

  "&:active": {
    border: "1px solid #579dff",
  },

  "& ::placeholder": {
    color: "#f3f6f7",
    fontSize: "14px",
    fontWeight: "600",
  },
});
