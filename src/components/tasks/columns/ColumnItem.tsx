import { styled, Typography } from "@mui/material";
import React from "react";

export const ColumnItem = ({ columnTitle }) => {
  return (
    <WrapperColumn>
      <StyledTypography variant="body2">{columnTitle}</StyledTypography>
    </WrapperColumn>
  );
};

const WrapperColumn = styled("li")({
  display: "flex",
  alignItems: "center",
  borderRadius: "4px",
  background: "#22272B",
  padding: "10px",
  cursor: "pointer",
  border: "1.5px solid transparent",

  ":hover":{
    border: "1.5px solid #0f82e0",
  }
});

const StyledTypography = styled(Typography)({
  fontSize: "14px",
  fontWeight: "600",
  color: "#9fadbc",
});
