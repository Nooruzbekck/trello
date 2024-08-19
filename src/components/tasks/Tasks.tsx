import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux";
import { IconButton } from "../UI/IconButton";
import { Icons } from "../../assets";
import { TaskForm } from "./TaskForm";
import { styled } from "@mui/material";
import { TaskList } from "./TaskList";
import { getTask } from "../../redux/thunks/TaskThunk";

export const Tasks = () => {
  const { tasks } = useSelector((state: RootState) => state.tasks);

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getTask());
  }, []);

  const textBtn =
    tasks.length < 0 ? "Добавить еще одну колонку" : "Добавить список";

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledIconButton>
      <TaskList tasks={tasks} />

      {isOpen ? (
        <TaskForm onClose={handleClick} />
      ) : (
        <IconButton Icon={Icons.PlusIcon} onClick={handleClick}>
          {textBtn}
        </IconButton>
      )}
    </StyledIconButton>
  );
};

const StyledIconButton = styled("div")({
  display: "flex",
  gap: "10px",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",

  "&::-webkit-scrollbar": {
    display: "none",
  },
  padding: "15px 0 0 15px",

  "& .MuiButtonBase-root": {
    backgroundColor: "#ffffff3d",
    color: "#FFFFFF",
    minWidth: "272px",
    maxWidth: "272px",
    height: "45px",
    display: "flex",
    justifyContent: "flex-start",
    borderRadius: "10px",
    fontSize: "14px",
    fontWeight: "400",
    border: "none",
    padding: "10px 10px 10px 13px",
  },
  svg: {
    fill: "#FFFFFF",
  },
});
