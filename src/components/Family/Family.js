import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import allSpendingActions from "../../actions/spendingActions";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(fullName, calories, price) {
  return { fullName, calories, price };
}

export default function BasicTable() {
  let listData = useSelector((state) => state.spendingReducer.tableList);
  const dispatch = useDispatch();
  const {
    setIsEditSpending,
    setIdSpending,
    setDateSpending,
    setNameSpending,
    setValueSpending,
    getTableList,
    deleteSpending,
  } = allSpendingActions;
  let userData = useSelector((state) => state.SignInReducer);

  console.log(2, listData);

  const rows = listData


  
  const classes = useStyles();
  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    };
    dispatch(getTableList(userData.userInfo._id, headers));
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Имя</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Трата&nbsp;(₽)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.fullName}>
              <TableCell component="th" scope="row">
                {row.fullName}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
