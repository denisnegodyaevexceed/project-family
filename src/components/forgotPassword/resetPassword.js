import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



export default function ResetPassword(){
    


    return(
        <form onSubmit={()=> {console.log('ok')}}>
            <TextField required label='Новый пароль' type='password'/>
            <TextField required  label='Повторите пароль' type='password'/>
            <Button type='submit'>Отправить</Button>
        </form>
    )
}