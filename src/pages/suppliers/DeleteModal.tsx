import React from "react";
import { Modal, Button, Typography, Box, useTheme } from "@mui/material";
import { DeleteModalProps } from "../../types";
import { deleteModalStyles } from "../../theme/deleteModalTheme";

const DeleteModal: React.FC<DeleteModalProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  const theme = useTheme();
  const styles = deleteModalStyles(theme);

  return (
    <Modal open={open} onClose={onClose} sx={styles.modal}>
      <Box sx={styles.container}>
        <Typography variant="h6" gutterBottom>
          Are you sure you want to delete this item?
        </Typography>
        <Box sx={styles.buttonGroup}>
          <Button variant="contained" color="primary" onClick={onConfirm}>
            Confirm
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={onClose}
            sx={styles.cancelButton}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteModal;
