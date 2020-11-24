import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table/Table'
import SimpleModal from "../components/Modal/Modal";
import { Button } from "@material-ui/core"
import { Typography } from '@material-ui/core';

import allSpendingActions from "../actions/spendingActions"

const MainPage = ({isSelf = false}) => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { setIsEditSpending, setIdSpending, setDateSpending, setNameSpending, setValueSpending, clearSpendingForm, getTableList, deleteSpending } = allSpendingActions;
    let listData = useSelector(state => state.spendingReducer.tableList);
    let userData = useSelector(state => state.SignInReducer);
    listData?.map((item, i) => listData[i].price = +item.price)
    if(isSelf){listData = listData?.filter(item => item.fullName === userData.userInfo.fullName);}

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
        dispatch(clearSpendingForm());
    };

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    return (
        <>  
            {userData.userInfo.budget ?
                <Table isSelf={isSelf} deleteSpendings={deleteSpendings} editSpendingSetState={editSpendingSetState} dataSpending={listData} />
                :
                <>
                    <Typography variant='h5'>Что бы создать бюджет - добавьте первую трату</Typography>
                    <Typography variant='h5'>Или попросите добавить вас в семью</Typography>
                </>
            }
            <Button variant="contained" type="button" onClick={handleOpenPopup}>Добавить трату</Button>
            <SimpleModal open={isOpen} closePopUp={handleClosePopup} />
        </>
    );
}

export default MainPage