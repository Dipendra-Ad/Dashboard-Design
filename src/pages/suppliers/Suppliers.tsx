import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";

interface Column {
  id: "sNo" | "name" | "address" | "email" | "phone" | "actions";
  label: string;
  minWidth?: number;
  align?: "right";
}

const columns: readonly Column[] = [
  { id: "sNo", label: "S.No", minWidth: 50 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "address", label: "Address", minWidth: 200 },
  { id: "email", label: "Email", minWidth: 200 },
  { id: "phone", label: "Phone", minWidth: 150 },
  { id: "actions", label: "Actions", minWidth: 150, align: "right" },
];

interface Data {
  sNo: number;
  name: string;
  address: string;
  email: string;
  phone: string;
}

function createData(
  sNo: number,
  name: string,
  address: string,
  email: string,
  phone: string
): Data {
  return { sNo, name, address, email, phone };
}

const rows = [
  createData(
    1,
    "John Doe",
    "123 Elm St",
    "john.doe@example.com",
    "(555) 123-4567"
  ),
  createData(
    2,
    "Jane Smith",
    "456 Oak St",
    "jane.smith@example.com",
    "(555) 234-5678"
  ),
  createData(
    3,
    "Alice Johnson",
    "789 Pine St",
    "alice.johnson@example.com",
    "(555) 345-6789"
  ),
  createData(
    4,
    "Bob Brown",
    "101 Maple St",
    "bob.brown@example.com",
    "(555) 456-7890"
  ),
  createData(
    1,
    "John Doe",
    "123 Elm St",
    "john.doe@example.com",
    "(555) 123-4567"
  ),
  createData(
    2,
    "Jane Smith",
    "456 Oak St",
    "jane.smith@example.com",
    "(555) 234-5678"
  ),
  createData(
    3,
    "Alice Johnson",
    "789 Pine St",
    "alice.johnson@example.com",
    "(555) 345-6789"
  ),
  createData(
    4,
    "Bob Brown",
    "101 Maple St",
    "bob.brown@example.com",
    "(555) 456-7890"
  ),
  createData(
    1,
    "John Doe",
    "123 Elm St",
    "john.doe@example.com",
    "(555) 123-4567"
  ),
  createData(
    2,
    "Jane Smith",
    "456 Oak St",
    "jane.smith@example.com",
    "(555) 234-5678"
  ),
  createData(
    3,
    "Alice Johnson",
    "789 Pine St",
    "alice.johnson@example.com",
    "(555) 345-6789"
  ),
  createData(
    4,
    "Bob Brown",
    "101 Maple St",
    "bob.brown@example.com",
    "(555) 456-7890"
  ),
];

export default function SupplierTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Toolbar style={{ background: "white" }}>
        <Grid
          container
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <TextField
              variant="outlined"
              placeholder="Search"
              size="small"
              InputProps={{
                endAdornment: (
                  <IconButton
                    edge="end"
                    aria-label="search"
                    style={{ color: "white" }}
                  >
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            />
          </Grid>
          <Grid item>
            <Grid container spacing={2} justifyContent="flex-end">
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
        </Grid>
      </Toolbar>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 640 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.email}
                    >
                      {columns.map((column) => {
                        const value = row[column.id as keyof Data];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.id === "actions" ? (
                              <div>
                                <IconButton size="small">
                                  <EditIcon />
                                </IconButton>
                                <IconButton size="small" color="error">
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
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
