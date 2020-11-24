import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { 
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper
} from "@material-ui/core"
import allSpendingActions from "../../actions/spendingActions";
import SimpleModal from "../Modal/Modal";
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

  const res = listData.reduce((acc, curr) => {
    if (acc.find(element => element.fullName === curr.fullName) === undefined) {
      acc.push(curr)
    } else {
      acc = acc.map(element => {
        if (element.fullName === curr.fullName) {
          element.price += curr.price
        }
        return element
      })
    }
    return acc
  }, [])

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
            {res.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.fullName}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
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