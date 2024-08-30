import React, { useState, useEffect } from "react";
import { Modal, Button, TextField, Grid, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Data } from "../../types";
import { modalStyles } from "../../theme/editModalTheme";
interface EditModalProps {
  open: boolean;
  onClose: () => void;
  row: Data | null;
  onSave: (updatedRow: Data) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  open,
  onClose,
  row,
  onSave,
}) => {
  const [editingRow, setEditingRow] = useState<Data | null>(row);
  const theme = useTheme();
  const styles = modalStyles(theme);

  useEffect(() => {
    setEditingRow(row);
  }, [row]);

  const handleSave = () => {
    if (editingRow) {
      onSave(editingRow);
      onClose();
    }
  };

  if (!open) return null;

  return (
    <Modal open={open} onClose={onClose} sx={styles.modal}>
      <Box sx={styles.container}>
        {editingRow ? (
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                value={editingRow.name}
                onChange={(e) =>
                  setEditingRow({ ...editingRow, name: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                value={editingRow.address}
                onChange={(e) =>
                  setEditingRow({ ...editingRow, address: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                value={editingRow.email}
                onChange={(e) =>
                  setEditingRow({ ...editingRow, email: e.target.value })
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                value={editingRow.phone}
                onChange={(e) =>
                  setEditingRow({ ...editingRow, phone: e.target.value })
                }
                fullWidth
              />
            </Grid>

            <Grid item xs={12} container justifyContent="flex-end" spacing={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                >
                  Save
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="secondary" onClick={onClose}>
                  Cancel
                </Button>
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Typography variant="h6">Loading...</Typography>
        )}
      </Box>
    </Modal>
  );
};

export default EditModal;
