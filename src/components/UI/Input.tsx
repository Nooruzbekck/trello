import { styled, TextField } from "@mui/material";
import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
}

export const Input: React.FC<Props> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  ...props
}) => {
  return (
    <StyledInput
      fullWidth
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      {...props}
    />
  );
};

const StyledInput = styled(TextField)(() => ({
  height: "46px",
  border: '1px solid "#7A869A"}',
  borderRadius: "6px",
  paddingLeft: "10px",
  display: "flex",
  justifyContent: "center",
  ".MuiInputBase-input": {
    fontSize: "12px",
    fontWeight: "400",
  },
  "::placeholder": {
    color: "#8D949E",
  },

  "& fieldset": { border: "none" },
}));
