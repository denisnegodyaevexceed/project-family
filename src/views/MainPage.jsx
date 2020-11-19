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
    const { setIsEditSpending, setIdSpending, setDateSpending, setNameSpending, setValueSpending } = allSpendingActions
    const listData = useSelector(state => state.tableReducer.tableList);

    useEffect(() => {
        dispatch(allActionsTable.getTableList(1))
    }, [dispatch]);

    const editSpending = (id, date, name, value) => {
        handleOpenPopup();
        dispatch(setIsEditSpending(true));
        dispatch(setIdSpending(id));
        dispatch(setDateSpending(+date));
        dispatch(setNameSpending(name));
        dispatch(setValueSpending(+value));
    }

    const deleteSpendings = (arr) => {
        console.log('delll', arr)
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