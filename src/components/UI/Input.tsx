import { styled, TextField } from "@mui/material";
import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "email" | "password";
}

export const Input: React.FC<Props> = ({
  value,
  onChange,
  type = "text",
  ...props
}) => {
  return (
    <StyledInput
      fullWidth
      value={value}
      onChange={onChange}
      type={type}
      {...props}
    />
  );
};

const StyledInput = styled(TextField)({
  width: "100%",
  padding: "12px 20px",
});
