import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';
import allResetPasswordActions from '../../actions/resetPasswordActions';





export default function ResetPassword(){
    const dispatch = useDispatch();
    const postResetPassword = useSelector(state => state.resetPasswordReducer)
    console.log(postResetPassword)
    const {error, isFetching, password, confirmPassword} = postResetPassword;
    console.log(password)
    return(

        <form onSubmit={(e) => {dispatch(allResetPasswordActions.postResetPassword({password}, e))}}>
            <TextField required label='Новый пароль' type='password' onChange={(e)=>{dispatch(allResetPasswordActions.setResetPassword(e.target.value))}}/>
            <TextField required  label='Повторите пароль' type='password'/>
            <Button type='submit'>Отправить</Button>
        </form>
    )
}