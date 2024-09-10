import React, { useState, ChangeEvent, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material";
import { Data, AddSupplierModalProps } from "../../types";

const getNextSNo = (existingData: Data[]): number => {
  const maxSNo = existingData.reduce(
    (max, supplier) => Math.max(max, supplier.sNo),
    0
  );
  return maxSNo + 1;
};

const AddSupplierModal: React.FC<AddSupplierModalProps> = ({
  open,
  onClose,
  onAdd,
  existingData,
}) => {
  const [supplier, setSupplier] = useState<Data>({
    sNo: getNextSNo(existingData),
    name: "",
    address: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setSupplier((prev) => ({ ...prev, sNo: getNextSNo(existingData) }));
  }, [open, existingData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSupplier((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    onAdd(supplier);
    setSupplier({
      sNo: getNextSNo(existingData),
      name: "",
      address: "",
      email: "",
      phone: "",
    });
    onClose();
  };

  const isFormValid = () => {
    return (
      supplier.name.trim() !== "" &&
      supplier.address.trim() !== "" &&
      supplier.email.trim() !== "" &&
      supplier.phone.trim() !== ""
    );
  };

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        sx={{ backgroundColor: theme.palette.primary.main, color: "white" }}
      >
        <Typography variant="h6">Add Supplier</Typography>
      </DialogTitle>
      <DialogContent>
        <Box p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="S.No"
                name="sNo"
                type="number"
                value={supplier.sNo}
                InputProps={{ readOnly: true }}
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                name="name"
                value={supplier.name}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                name="address"
                value={supplier.address}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                type="email"
                value={supplier.email}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                name="phone"
                type="tel"
                value={supplier.phone}
                onChange={handleChange}
                fullWidth
                variant="outlined"
                margin="normal"
                required
                InputLabelProps={{ shrink: true }}
                sx={{ backgroundColor: "white", borderRadius: 1 }}
              />
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="secondary"
          sx={{
            borderRadius: 1,
            margin: 1,
            backgroundColor: theme.palette.grey[400],
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.grey[600],
            },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleAdd}
          color="primary"
          disabled={!isFormValid()}
          sx={{
            borderRadius: 1,
            margin: 1,
            backgroundColor: theme.palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSupplierModal;
