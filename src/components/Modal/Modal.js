import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MaterialUIPickers from '../DatePicker/Date'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const SimpleModal = ({open, closePopUp}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date('2014-08-18T21:11:54'));
  const [nameProduct, setNameProduct] = useState('');
  const [spending, setSpending] = useState('');
  const [test, setTest] =useState(false)
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  
  const qwe = (e) =>{

    if (name,nameProduct,spending === ''){
        e.preventDefault()
        setTest(true)

       console.log('гавно')
    

    
    }else{
    e.preventDefault()
    console.log(name,date,nameProduct,spending)
        setTest(false)
    //    setDate('')
       setName('')
       setSpending('')
       setNameProduct('')
    
}
  }



  const handleDateChange = (date) => {
    setDate(date);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Добавление траты</h2>
      <form   className={classes.root} noValidate autoComplete="on" onSubmit={e => qwe(e)}>
      <TextField id="standard-basic" label="Имя" value={name} onChange={event => setName(event.target.value)}></TextField>
      {/* <TextField id="standard-basic" label="Дата"value={date} onChange={event => setDate(event.target.value)} /> */}
      <MaterialUIPickers
        value={date} 
        onChange={handleDateChange}
      />
      <TextField id="standard-basic" label="Наименование траты"value={nameProduct} onChange={event => setNameProduct(event.target.value)} />
      <TextField id="standard-basic" label="Трата (.руб)" value={spending} onChange={event => setSpending(event.target.value)}/>
      
    
      <Button type="submit" variant="contained">Добавить</Button>
    </form>
  { test && <Alert severity="error" open>Заполните все поля!</Alert> }

    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={() => closePopUp()}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

export default SimpleModal;