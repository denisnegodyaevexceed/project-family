import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';
import { Typography } from '@material-ui/core';
import allSpendingActions from "../../actions/spendingActions"

import { useStyles } from './style'
import './Modal.scss'


export const SimpleModal = ({isOpen, closePopUp}) => {
  
  const classes = useStyles();
  const [hasError, setHasError] = useState(false);

  const modalData = useSelector(state => state.spendingReducer);
  const {isEdit, date, name, value} = modalData
  const dispatch = useDispatch();
  const {setDateSpending, setNameSpending, setValueSpending} = allSpendingActions;

  console.log(modalData)

  const sendData = (e) =>{
    e.preventDefault();
    if(date, name, value == '') {setHasError(true); return null}
    if(!isEdit){
      console.log('new spending')
    } else {
      console.log('edit spending')
    }
    closePopUp();
    setHasError(false)
  }

  const handleDateChange = (date) => {
    dispatch(setDateSpending(date));
  };

  const body = (
    <div className={classes.paper}>
      <Typography variant='h4'>{!isEdit ? 'Добавление траты' : 'Редактирование' }</Typography>
      <form className='form-submit' autoComplete="on" onSubmit={e => sendData(e)}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={date}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        <TextField 
          label="Наименование траты" 
          value={name}
          onChange={event => dispatch(setNameSpending(event.target.value))} 
        />
        <TextField 
          type='number'
          label="Трата (.руб)"
          value={value} 
          onChange={event => dispatch(setValueSpending(event.target.value))} 
        />
        <Button type="submit" variant="contained">{ !isEdit ? 'Добавить' : 'Редактировать' }</Button>
      </form>
      { hasError && <MuiAlert elevation={6} variant="filled" severity="error">Заполните все поля!</MuiAlert> }
    </div>
  );

  return (
    <Modal
      className={classes.modal}
      open={isOpen}
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