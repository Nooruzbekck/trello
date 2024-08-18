import React from "react";
import { MenuItem, Menu, Typography, IconButton, styled } from "@mui/material";

interface Option {
  id: string;
  label: string;
  disabled?: boolean;
}

interface ReusableMenuProps {
  text: string;
  options: Option[];
  onSelect: (id: string) => void;
  Icon?: React.ReactNode;
}

export const ReusableMenu: React.FC<ReusableMenuProps> = ({
  text,
  options,
  onSelect,
  Icon,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (id: string) => {
    onSelect(id);
    handleClose();
  };

  return (
    <div>
      <StyledIconButton onClick={handleClick}>
        <Typography
          variant="body2"
          sx={{ color: "#9fadbc", paddingRight: "5px" }}
        >
          {text}
        </Typography>
        {Icon}
      </StyledIconButton>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {options.map((option) => (
          <MenuItem
            key={option.id}
            onClick={() => handleSelect(option.id)}
            disabled={option.disabled}
            sx={{ color: "#9fadbc", fontSize: "14px", fontWeight: "400" }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

const StyledIconButton = styled(IconButton)(() => ({
  color: "#9fadbc",
  svg: { width: "20px" },

  "&:hover": {
    background: "#A6C5E229",
    borderRadius: "4px",
  },
}));
