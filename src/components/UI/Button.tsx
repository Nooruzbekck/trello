import React from "react";
import { Button as MuiButton } from "@mui/material";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  type,
  onClick,
  disabled,
  ...props
}) => {
  return (
    <MuiButton type={type} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </MuiButton>
  );
};
