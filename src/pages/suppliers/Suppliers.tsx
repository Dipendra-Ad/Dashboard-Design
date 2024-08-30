import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Toolbar,
  TextField,
  IconButton,
  Button,
  Grid,
  ThemeProvider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import mockData from "../../data/mock_data.json";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { Data } from "../../types";
import supplierTheme from "../../theme/supplierTheme";

const columns = [
  { id: "sNo", label: "S.No", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 200 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "phone", label: "Phone", minWidth: 150 },
  { id: "actions", label: "Actions", minWidth: 150, align: "right" as const },
];

const rows = mockData.map((item: any) => ({
  sNo: item.id,
  name: item.full_name,
  address: item.address,
  email: item.email,
  phone: item.phone,
}));

export default function SupplierTable() {
  const [data, setData] = useState<Data[]>(rows);
  const [editingRow, setEditingRow] = useState<Data | null>(null);
  const [deletingRow, setDeletingRow] = useState<Data | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEditClick = (row: Data) => {
    setEditingRow(row);
    setEditModalOpen(true);
  };

  const handleSave = (updatedRow: Data) => {
    setData((prevRows) =>
      prevRows.map((row) => (row.sNo === updatedRow.sNo ? updatedRow : row))
    );
  };

  const handleDeleteClick = (row: Data) => {
    setDeletingRow(row);
    setDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (deletingRow) {
      setData((prevRows) =>
        prevRows.filter((row) => row.sNo !== deletingRow.sNo)
      );
      setDeletingRow(null);
    }
    setDeleteModalOpen(false);
  };

  return (
    <ThemeProvider theme={supplierTheme}>
      <div>
        <Toolbar>
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="space-between"
          >
            <Grid item xs={8} sm={4} md={2}>
              <TextField
                variant="outlined"
                placeholder="Search"
                size="small"
                InputProps={{
                  endAdornment: (
                    <IconButton edge="end" aria-label="search">
                      <SearchIcon />
                    </IconButton>
                  ),
                }}
                fullWidth
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              container
              justifyContent="flex-end"
              spacing={2}
            >
              <Grid item>
                <Button variant="contained" color="primary">
                  Import Suppliers
                </Button>
              </Grid>
              <Grid item>
                <Button variant="contained" color="secondary">
                  Export Suppliers
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      sx={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row: Data) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.sNo}>
                      {columns.map((column) => {
                        const value = row[column.id as keyof Data];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <div>
                                <IconButton
                                  size="small"
                                  onClick={() => handleEditClick(row)}
                                >
                                  <EditIcon />
                                </IconButton>
                                <IconButton
                                  size="small"
                                  color="error"
                                  onClick={() => handleDeleteClick(row)}
                                >
                                  <DeleteIcon />
                                </IconButton>
                              </div>
                            ) : (
                              value
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 50]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(event, newPage) => setPage(newPage)}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(+event.target.value);
              setPage(0);
            }}
          />
        </Paper>

        <EditModal
          open={editModalOpen}
          onClose={() => setEditModalOpen(false)}
          row={editingRow}
          onSave={handleSave}
        />

        <DeleteModal
          open={deleteModalOpen}
          onClose={() => setDeleteModalOpen(false)}
          onConfirm={handleDelete}
        />
      </div>
    </ThemeProvider>
  );
}
