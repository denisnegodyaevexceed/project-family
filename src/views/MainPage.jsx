import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table/Table'
import SimpleModal from "../components/Modal/Modal";
import { Button } from "@material-ui/core"

import allActionsTable from "../actions/tableAction"
import allSpendingActions from "../actions/spendingActions"

const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { setIsEditSpending, setIdSpending, setDateSpending, setNameSpending, setValueSpending } = allSpendingActions;
    const listData = useSelector(state => state.tableReducer.tableList);

    useEffect(() => {
        dispatch(allActionsTable.getTableList('5fb66cd058098e00045a04b4'))
    }, [dispatch]);

    const editSpending = (id, date, name, value) => {
        date = new Date(date).toString()
        handleOpenPopup();
        dispatch(setIsEditSpending(true));
        dispatch(setIdSpending(id));
        dispatch(setDateSpending(date));
        dispatch(setNameSpending(name));
        dispatch(setValueSpending(+value));
    }

    const deleteSpendings = (arr) => {
        
        


        fetch('https://backend-family-budget.herokuapp.com/budget/delete-waste?budgetId=5fb66f7358098e00045a04b5', {method: 'DELETE',body:JSON.stringify({
        ids: arr
        }),headers:{'content-type': 'application/json'}})
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(alert);




    }

    const handleClosePopup = () => {
        setIsOpen(false);   
        dispatch(allSpendingActions.clearSpendingForm());
    };

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Table deleteSpendings={deleteSpendings} editSpending={editSpending} dataSpending={listData} />
            <Button variant="contained" type="button" onClick={handleOpenPopup}>Добавить трату</Button>
            <SimpleModal open={isOpen} closePopUp={handleClosePopup} />
        </>
    );
}

export default MainPage