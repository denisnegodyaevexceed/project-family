import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from 'react-redux';

import { Redirect } from 'react-router-dom';
import MuiAlert from '@material-ui/lab/Alert';
import CircularProgress from '@material-ui/core/CircularProgress';
import allForgotPasswordActions from '../../actions/forgotPasswordActions';



export default function ForgotPassword() {
    const dispatch = useDispatch();
    const postForgotPassword = useSelector(state => state.forgotPasswordReducer)

    const { error, isFetching, email, confirmEmail } = postForgotPassword;


    if (confirmEmail) {
        return (
            <Redirect to='/reset-password' />
        )
    }
    return (<div>
        {isFetching && <div className='loading'><CircularProgress className='loader' /></div>}
        <form onSubmit={(e) => { dispatch(allForgotPasswordActions.postForgotPasswordEmail({ email }, e)) }}>
            <div className='form'>
                <TextField required
                    value={email}
                    label='Почта'
                    onChange={(e) => { dispatch(allForgotPasswordActions.setForgotPasswordEmail(e.target.value)) }}
                    type='email' />
                <Button type='submit'
                    variant='contained'
                    disabled={!email}>Отправить почту</Button>
                {error && <MuiAlert elevation={6}
                    variant="filled"
                    severity="error">Пользователя не существует.</MuiAlert>}
            </div>
        </form>
    </div>
    )
}