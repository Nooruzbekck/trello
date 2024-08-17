import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import React, { useState } from "react";
import { Icons } from "../../assets";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "number" | "email" | "password";
  placeholder?: string;
  endAdornment?: boolean;
  name?: string;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
}

export const Input: React.FC<Props> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  name,
  onBlur,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInput
      fullWidth
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={type === "password" && showPassword ? "text" : type}
      InputProps={{
        endAdornment: type === "password" && (
          <InputAdornment position="end">
            <IconButton onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <Icons.EyeOpen /> : <Icons.EyeClose />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

const StyledInput = styled(TextField)(() => ({
  height: "46px",
  border: "1px solid #7A869A",
  borderRadius: "6px",
  paddingLeft: "10px",
  display: "flex",
  justifyContent: "center",

  ".MuiInputBase-input": {
    fontSize: "14px",
    fontWeight: "400",
  },
  "::placeholder": {
    color: "#8D949E",
  },

  "& fieldset": { border: "none" },
}));
