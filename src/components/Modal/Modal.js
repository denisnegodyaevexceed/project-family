import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MaterialUIPickers from '../DatePicker/Date'
import MuiAlert from '@material-ui/lab/Alert';
import Backdrop from '@material-ui/core/Backdrop';

import './Modal.scss'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: '400px',
      margin: '0 auto',
  },
  paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      width: '100%',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
  },
}));

export const SimpleModal = ({open, closePopUp, isEdit, cost}) => {
  
  const classes = useStyles();
  const [date, setDate] = useState(new Date());
  const [nameProduct, setNameProduct] = useState('');
  const [spending, setSpending] = useState('');
  const [hasError, setHasError] =useState(false)

  useEffect(() => {
    setSpending(cost);
  }, [cost]);

  console.log(cost)

  const sendData = (e) =>{
    e.preventDefault()
    if (nameProduct,spending === '') {
      setHasError(true);
      console.log('fail');
    } else {
      console.log(date,nameProduct,spending)
      setHasError(false);
      setSpending('');
      setNameProduct('');
      setDate(new Date());
      closePopUp();
    }
  }

  const body = (
    <div className={classes.paper}>
      <Typography variant='h4'>{!isEdit ? 'Добавление траты' : 'Редактирование' }</Typography>
      <form className='form-submit' autoComplete="on" onSubmit={e => sendData(e)}>
        <MaterialUIPickers
          value={date} 
          onChange={closePopUp}
        />
        <TextField label="Наименование траты" value={nameProduct} onChange={event => setNameProduct(event.target.value)} />
        <TextField type='number' label="Трата (.руб)" value={spending} onChange={event => setSpending(event.target.value)}/>
        <Button type="submit" variant="contained">{ !isEdit ? 'Добавить' : 'Редактировать' }</Button>
      </form>
      { hasError && <MuiAlert elevation={6} variant="filled" severity="error">Заполните все поля!</MuiAlert> }
    </div>
  );

  return (
    <Modal
      className={classes.modal}
      open={open}
      closeAfterTransition
      onClose={() => closePopUp()}
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