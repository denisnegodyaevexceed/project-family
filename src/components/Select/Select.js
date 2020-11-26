import React, {useEffect} from 'react';
import {  useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';
import { useDispatch, useSelector } from 'react-redux';

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
  
  const {data} = getNames

  
  console.log(getNames, 'get get')
  
  const theme = useTheme();
  const [personName, setPersonName] = React.useState('');



  const handleChange = (event) => {
    setPersonName(event.target.value);
   
   
  };
const addName = (e) =>{
    e.preventDefault();
    console.log(personName, 'pearsonName')
}
 
useEffect(()=>{
  dispatch(allFamilySelectActions.getFamilyNames())
},[dispatch])


  return (
    <div>
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
        <Button type="submit" variant="contained"  onClick={(e)=>{addName(e)}}>
          Присоедениться
      </Button>
      </FormControl>
      
    </div>
  );
}