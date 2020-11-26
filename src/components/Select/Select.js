import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import FormControl from '@material-ui/core/FormControl';


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

const names = [
 " Oliver Hansen",
    `Van Henry`,
  `April Tucker`,
  `Ralph Hubbard`,
  `Omar Alexander`,
  `Carlos Abbott`,
  `Miriam Wagner`,
`Bradley Wilkerson`,
  `Virginia Andrews`,
  `Kelly Snyder`,
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
   
  };
const addName = (e) =>{
    e.preventDefault();
    console.log(personName)
}
 

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
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
        <Button type="submit" variant="contained" >
          Присоедениться
      </Button>
      </FormControl>
      
    </div>
  );
}