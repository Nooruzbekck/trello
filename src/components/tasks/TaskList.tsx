import React from "react";
import { TaskListItem } from "./TaskListItem";
import { styled } from "@mui/material";

interface Props {
  tasks: Array<{
    id: string;
    title: string;
    columns: Array<{ columnId: string; columnTitle: string }>;
  }>;
}

export const TaskList: React.FC<Props> = ({ tasks = [] }) => {
  return (
    <ListContainer>
      {tasks.map((task) => (
        <TaskListItem key={task.id} {...task} />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled("ul")({
  listStyle: "none",
  display: "flex",
  gap: "10px",
});
