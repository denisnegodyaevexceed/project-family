import React, {useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { Typography, Backdrop, Button, TextField, Modal } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import allSpendingActions from "../../actions/spendingActions";
import { useStyles } from './style'
import './Modal.scss'

export const SimpleModal = ({open, closePopUp, forInvite = false}) => {
  const classes = useStyles();
  const [hasError, setHasError] = useState(false);

  const modalData = useSelector(state => state.spendingReducer);
  const {isEdit, date, name, value, id, loadingModal} = modalData
  const dispatch = useDispatch();
  const {setDateSpending, setNameSpending, setValueSpending, editSpending, addSpending } = allSpendingActions;
  const userData = useSelector(state => state.SignInReducer);

  const sendData = (e) =>{
    e.preventDefault();
    const headers = {
        headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
    };
    if(name === '' || value === '') {setHasError(true); return null}
    if(!isEdit){
      dispatch(addSpending(userData.userInfo._id, value, date, name, closePopUp, headers));
    } else {
      dispatch(editSpending(userData.userInfo.budget, id, value, date, name, closePopUp, headers));
    }
    setHasError(false);
  }

  const handleDateChange = (date) => {
    dispatch(setDateSpending(date));
  };

  const body = (
    <div className={classes.paper}>
      {forInvite ||
        <>
          <Typography variant='h4'>{!isEdit ? 'Добавление траты' : 'Редактирование' }</Typography>
          {loadingModal && <Typography variant='body2'>Загрузка...</Typography>}
          <form disabled={loadingModal} className='form-submit' autoComplete="on" onSubmit={e => sendData(e)}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disabled={loadingModal}
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Дата"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider >
            <TextField 
              disabled={loadingModal}
              label="Наименование траты" 
              value={name}
              onChange={event => dispatch(setNameSpending(event.target.value))} 
            />
            <TextField 
              disabled={loadingModal}
              type='number'
              label="Трата (.руб)"
              value={value} 
              onChange={event => dispatch(setValueSpending(event.target.value))} 
            />
            <Button disabled={loadingModal} type="submit" variant="contained">{ !isEdit ? 'Добавить' : 'Редактировать' }</Button>
          </form>
          { hasError && <MuiAlert elevation={6} variant="filled" severity="error">Заполните все поля!</MuiAlert> }
        </>
      }
    </div>
  );

  return (
    <Modal
      className={classes.modal}
      open={open}
      closeAfterTransition
      onClose={() => {closePopUp(); setHasError(false)}}
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      BackdropComponent={Backdrop}
      BackdropProps={{
          timeout: 500,
      }}
    >
      {body}
    </Modal>
  );
}

export default SimpleModal;