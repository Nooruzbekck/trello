import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  styled,
} from "@mui/material";

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  content: React.ReactNode;
  actions?: React.ReactNode;
  fullWidth?: boolean;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

export const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  title,
  content,
  actions,
  fullWidth = true,
  maxWidth = "sm",
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
    >
      {title && (
        <DialogTitle>
          <TitleContainer>
            <Typography variant="h6">{title}</Typography>
          </TitleContainer>
        </DialogTitle>
      )}
      <DialogContent dividers>{content}</DialogContent>
      {actions && <DialogActions>{actions}</DialogActions>}
    </Dialog>
  );
};

const TitleContainer = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const SelectModal = ({ open, onClose }) => {
  return (
    <div>
      <ReusableModal
        open={open}
        onClose={onClose}
        title="Select an Option"
        content={<Typography>This is the modal content</Typography>}
      />
    </div>
  );
};
