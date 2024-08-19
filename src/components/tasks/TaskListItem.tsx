import { styled, Typography } from "@mui/material";
import React, { useState } from "react";
import { Icons } from "../../assets";
import { IconButton } from "../UI/IconButton";
import { ColumnForm } from "./columns/ColumnForm";
import { useDispatch } from "react-redux";
import { ColumnItem } from "./columns/ColumnItem";
import { sendColumn } from "../../redux/thunks/TaskThunk";
import { AppDispatch } from "../../redux";
import { Column } from "../../types/auth";

interface TaskListItemProps {
  id: string;
  title: string;
  columns: Column[];
}

export const TaskListItem: React.FC<TaskListItemProps> = ({
  id,
  title,
  columns,
}) => {
  const [isOpenColumn, setIsOpenColumn] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  const handleShowColumn = () => {
    setIsOpenColumn(!isOpenColumn);
  };

  const handleAddColumn = (columnData: Column) => {
    dispatch(sendColumn({ id, columns: [...columns, columnData] }));
  };

  return (
    <Wrapper>
      <FirstWrapper>
        <StyledTypography variant="body2">{title}</StyledTypography>
        <span>
          <Icons.OptionsIcon />
        </span>
      </FirstWrapper>

      <ColumnList>
        {columns.map((column) => (
          <ColumnItem key={column.columnId} {...column} />
        ))}
      </ColumnList>

      {isOpenColumn ? (
        <ColumnForm onClose={handleShowColumn} onColumnData={handleAddColumn} />
      ) : (
        <SecondWrapper>
          <IconButton Icon={Icons.PlusIcon} onClick={handleShowColumn}>
            Добавить карточку
          </IconButton>
          <span>
            <Icons.SampleIcon />
          </span>
        </SecondWrapper>
      )}
    </Wrapper>
  );
};

const Wrapper = styled("li")({
  padding: "10px",
  background: "#000",
  width: "272px",
  height: "fit-content",
  borderRadius: "10px",

  svg: {
    width: "19px",
    height: "19px",
    fill: "#9fadbc",
    path: "#9fadbc",
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
});

const ColumnList = styled("ul")({
  listStyleType: "none",
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  marginBottom: "10px",
});

const StyledTypography = styled(Typography)({
  color: "#9fadbc",
  fontWeight: "600",
  fontSize: "14px",
});

const FirstWrapper = styled("div")({
  display: "flex",
  gap: "10px",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

const SecondWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  gap: "10px",

  "& .MuiButtonBase-root": {
    backgroundColor: "transparent",
    color: "#9FADBC",
    height: "36px",
    minWidth: "202px",

    ":hover": {
      backgroundColor: "#A6C5E229",
    },
  },
});
