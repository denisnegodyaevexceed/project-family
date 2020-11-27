import React, {useEffect} from 'react';
import {  useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiAlert from '@material-ui/lab/Alert';



import allFamilySelectActions from '../../actions/familySelectActions';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}




export default function MultipleSelect() {
  
  const dispatch = useDispatch();

  const getNames = useSelector((state) => state.familySelectReducer)
  const setSignIn = useSelector((state) => state.SignInReducer);
  const { userInfo } = setSignIn;
  
  const {data, isSend, isFetching, selectFamily, error} = getNames

  
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');

  const currentFamily = () => selectFamily || userInfo.request[0].familyName
  
  const handleChange = (event) => {
    setPersonName(event.target.value);
   };
const addName = (e) =>{
    
    const budgetId = data.filter((i)=>i.familyName===personName)[0]._id
    const userId = userInfo._id
    
    dispatch(allFamilySelectActions.postFamilyId({budgetId, userId}, e, personName))
    
}
 
useEffect(()=>{
  dispatch(allFamilySelectActions.getFamilyNames())
},[dispatch])


  return (
    
    <div>
      {isFetching && <div className='loading'><CircularProgress className='loader' /></div>}
      {(isSend||userInfo.request[0]?.familyName) && <div className='sendTittle'><h3>Вы отправили запрос в семью {currentFamily()}, ожидайте подтверждения.</h3> <h3>В случае отправки запроса в другую семью или создания своего бюджета, предыдущий запрос будет отменен.</h3></div>}
      <FormControl className="form">
  <InputLabel  >Выбор семьи</InputLabel>
        <Select
        className="select"
          
          id="demo-mutiple-name"
          value={personName}
          onChange={handleChange}
          input={<Input  />}
          MenuProps={MenuProps}
        >
          {data.map((item, index) => (
            
            <MenuItem key={index} value={item.familyName} style={getStyles(item.familyName, personName, theme)}>
              {item.familyName}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" disabled={!personName}  onClick={(e)=>{addName(e)}}>
          Присоедениться
      </Button>
      {error && <MuiAlert elevation={6}
            variant="filled"
            severity="error">Вы уже отправили запрос в эту семью.</MuiAlert>}
      </FormControl>
      
    </div>
  );
}