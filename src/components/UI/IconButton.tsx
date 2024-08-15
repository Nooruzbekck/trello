import React from "react";
import { styled } from "@mui/material";
import { Button as MuiButton, ButtonProps } from "@mui/material";

interface Props {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

export const IconButton: React.FC<Props> = ({ Icon, children }) => {
  return (
    <StyledButton variant="outlined" startIcon={<Icon />}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled((props: ButtonProps) => <MuiButton {...props} />)({
  border: "1px solid #8D949E",
  borderRadius: "4px",
  padding: "10px",
  color: "#000",
  fontSize: "14px",
  fontWeight: "700",
  display: "flex",
  alignItems: "center",

  svg: {
    width: "20px",
    height: "20px",
  },
});
