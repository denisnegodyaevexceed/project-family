import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table/Table'
import SimpleModal from "../components/Modal/Modal";
import { Button } from "@material-ui/core"
import { Typography } from '@material-ui/core';
import TextField from "@material-ui/core/TextField";
import Alert from '@material-ui/lab/Alert';

import allSpendingActions from "../actions/spendingActions"
// import { Filter } from "@material-ui/icons";
// import { set } from "date-fns/esm";

const MainPage = ({isSelf = false}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isInvite, setIsInvite] = useState(false);
    const [inviteEmail, seInviteEmail] = useState('');

    const dispatch = useDispatch();
    const { setIsEditSpending, setIdSpending, setDateSpending, setNameSpending, setValueSpending, clearSpendingForm, getTableList, deleteSpending, inviteUserAction } = allSpendingActions;
    let listData = useSelector(state => state.spendingReducer.tableList);
    let userData = useSelector(state => state.SignInReducer);
    const logData = useSelector(state => state.spendingReducer);
    listData?.map((item, i) => listData[i].price = +item.price)
    if(isSelf){listData = listData?.filter(item => item.fullName === userData.userInfo.fullName);}
    

    const arr = [ { 'fullName': 'P1', 'price': 151, 'email':'123' }, { 'fullName': 'P1', 'price': 150, 'email':'123' }, { 'fullName': 'P2', 'price': 200, 'email':'222' }, { 'fullName': 'P3', 'price': 450, 'email':'333' } ];

    useEffect(() => {
        const headers = {   
            headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
        };
        dispatch(getTableList(userData.userInfo._id, headers));
    }, [dispatch, getTableList, userData.userInfo._id]);

    const editSpendingSetState = (id, date, name, value) => {
        date = new Date(date).toString()
        handleOpenPopup();
        dispatch(setIsEditSpending(true));
        dispatch(setIdSpending(id));
        dispatch(setDateSpending(date));
        dispatch(setNameSpending(name));
        dispatch(setValueSpending(+value));
    }

    const deleteSpendings = (arr) => {
        const headers = { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` };
        dispatch(deleteSpending(userData.userInfo.budget, arr, headers));
    }

    const handleClosePopup = () => {
        setIsOpen(false);
        setIsInvite(false);
        dispatch(clearSpendingForm());
    };

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    const sendInvite = (e) => {
        e.preventDefault();
        const headers = {
            headers: { Authorization: `Bearer ${localStorage.getItem('refreshToken')}` },
        };
        dispatch(inviteUserAction(inviteEmail, userData.userInfo.budget, headers));
    }

    const InviteForm = (
        <form onSubmit={(e) => sendInvite(e)}>
            <div className='form'>
                <TextField
                    disabled={logData.inviteLoading}
                    required
                    type="email"
                    label="Почта"
                    value={inviteEmail}
                    onChange={(e) => seInviteEmail(e.target.value)}
                />
                <Button disabled={logData.inviteLoading} type="submit" variant="contained" >Send</Button>
                {logData.inviteError && <Alert severity="error">Ошибка сервера - повторите позже</Alert>}
                {logData.inviteSuccess && <Alert severity="success">Приглашение выслано</Alert>}
            </div>
        </form>
    )

    return (
        <>  
            {userData.userInfo.budget ?
                <>
                    <Table isSelf={isSelf} deleteSpendings={deleteSpendings} editSpendingSetState={editSpendingSetState} dataSpending={listData} />
                    <Button variant="contained" type="button" onClick={() => {handleOpenPopup(true); setIsInvite(true)}}>Пригласить пользователя</Button>
                </>
                :
                <>
                    <Typography variant='h5'>Что бы создать бюджет - добавьте первую трату</Typography>
                    <Typography variant='h5'>Или попросите добавить вас в семью</Typography>
                </>
            }
            <Button variant="contained" type="button" onClick={handleOpenPopup}>Добавить трату</Button>
            <SimpleModal open={isOpen} closePopUp={handleClosePopup} forInvite={isInvite ? InviteForm : false} />
        </>
    );
}

export default MainPage