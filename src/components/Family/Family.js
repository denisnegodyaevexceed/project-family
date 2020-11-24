import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core"
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import allSpendingActions from "../../actions/spendingActions";
import SimpleModal from "../Modal/Modal";
import TextField from "@material-ui/core/TextField";
import Alert from '@material-ui/lab/Alert';


const BasicTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const logData = useSelector(state => state.spendingReducer);
  let listData = useSelector((state) => state.spendingReducer.tableList);
  const userData = useSelector((state) => state.SignInReducer);
  const dispatch = useDispatch();
  const {
    getTableList,
    inviteUserAction,
  } = allSpendingActions;

  useEffect(() => {
    const headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("refreshToken")}`,
      },
    };
    dispatch(getTableList(userData.userInfo._id, headers));
  }, [dispatch, userData.userInfo._id, getTableList]);


  const handleClosePopup = () => {
      setIsOpen(false);
  };
  const handleOpenPopup = () => {
      setIsOpen(true);
  };
  const sendInvite = (e) => {
      e.preventDefault();
      const headers = {
          headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
      };
      dispatch(inviteUserAction(inviteEmail, userData.userInfo.budget, headers));
  }

  const InviteForm = (
    <form onSubmit={(e) => sendInvite(e)}>
        <div className='form'>
            <TextField
                disabled={logData.inviteLoading}
                required
                type="email"
                label="Почта"
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
            />
            <Button disabled={logData.inviteLoading} type="submit" variant="contained" >Send</Button>
            {logData.inviteError && <Alert severity="error">Ошибка сервера - повторите позже</Alert>}
            {logData.inviteSuccess && <Alert severity="success">Приглашение выслано</Alert>}
        </div>
    </form>
)

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Имя</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Трата&nbsp;(₽)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {listData.map((row, index) => (
              <TableRow key={index}>
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
      <Button variant="contained" type="button" onClick={() => {handleOpenPopup(true)}}>Пригласить пользователя</Button>
      <SimpleModal open={isOpen} closePopUp={handleClosePopup} forInvite={InviteForm} />
    </>
  );
}

export default BasicTable