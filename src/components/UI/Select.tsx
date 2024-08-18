import React from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import { FormControl, MenuItem, Select as MuiSelect } from "@mui/material";
import { Icons } from "../../assets";
import styled from "@emotion/styled";

interface SelectProps {
  options: Array<{
    id: string;
    value: string;
    label: string;
    disabled?: boolean;
  }>;
  value: string;
  onChange?: (event: SelectChangeEvent) => void;
  selectedOption?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  selectedOption,
  ...restProps
}) => {
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    if (onChange) {
      onChange(event as SelectChangeEvent);
    }
  };

  return (
    <FormControlStyle fullWidth>
      <SelectStyle
        value={value || ""}
        onChange={handleChange}
        IconComponent={Icons.ArrowDown}
        {...restProps}
        MenuProps={{
          PaperProps: {
            sx: {
              borderRadius: "10px",
            },
          },
        }}
      >
        {options?.length === 0 ? (
          <MenuItem disabled>Здесь пока что нету данных.</MenuItem>
        ) : (
          options?.map((option) => (
            <MenuItemStyle
              key={option.id}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </MenuItemStyle>
          ))
        )}
      </SelectStyle>
    </FormControlStyle>
  );
};
const SelectStyle = styled(MuiSelect)(() => ({
  ".MuiSelect-select": {
    paddingTop: "8px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #cfcfcf",
    borderRadius: "10px",
    width: "100%",
    height: "44px",
  },
  ".MuiSelect-icon": {
    right: "10px",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #282828",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #7e52ff",
  },
}));

const FormControlStyle = styled(FormControl)(() => ({
  display: "flex",
  gap: "8px",
}));

const MenuItemStyle = styled(MenuItem)(() => ({
  fontSize: "18px",
  fontWeight: "400",
  "&:hover": {
    background: "#f2eeff",
  },
  "&.Mui-selected": {
    backgroundColor: "#f2eeff",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#f2eeff",
  },
  "&:focus": {
    backgroundColor: "#f2eeff",
  },
}));
