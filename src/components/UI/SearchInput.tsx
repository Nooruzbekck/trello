import React from "react";
import { IconButton, InputAdornment, styled, TextField } from "@mui/material";
import { Icons } from "../../assets";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  endAdornment?: boolean;
  name?: string;
  error?: boolean;
}

export const SearchInput: React.FC<Props> = ({
  value,
  onChange,
  placeholder,
  name,
  ...props
}) => {
  return (
    <StyledInput
      fullWidth
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      type={"search"}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <Icons.SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...props}
    />
  );
};

const StyledInput = styled(TextField)(() => ({
  height: "36px",
  border: "1px solid #7A869A",
  borderRadius: "6px",
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
