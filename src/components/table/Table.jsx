import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@mui/material";
import { DeleteUser, useFetch } from "../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const TableData = () => {
  const { isLoading, contactList } = useFetch();

  return (
    <div>
      <h2 className="contact-header">Contacts</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell align="left">Phone Number</TableCell>
              <TableCell align="left">Gender</TableCell>
              <TableCell align="left">Delete</TableCell>
              <TableCell align="left">Edit</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {/*
            when waiting for data, there will be a loading statement,
            if there is no data, we'll display a message,
            after coming data, we'll have map() to show data
            */}
            {isLoading ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  Loading
                </TableCell>
              </TableRow>
            ) : contactList?.length === 0 ? (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell colSpan={5} align="center">
                  No Result Found
                </TableCell>
              </TableRow>
            ) : (
              contactList?.map((item, index) => (
                // console.log(contactList);
                <TableRow key={index}>
                  <TableCell textAlign="center">
                    {item.username.toUpperCase()}
                  </TableCell>
                  <TableCell textAlign="center">{item.phoneNumber}</TableCell>
                  <TableCell textAlign="center">{item.gender}</TableCell>
                  <TableCell
                    textAlign="center"
                    onClick={() => DeleteUser(item.id)}
                  >
                    <DeleteIcon />
                  </TableCell>
                  <TableCell textAlign="center">
                    <EditIcon />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableData;
