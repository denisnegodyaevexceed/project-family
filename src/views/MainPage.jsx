import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table/Table'
import SimpleModal from "../components/Modal/Modal";
import { Button } from "@material-ui/core"

import allSpendingActions from "../actions/spendingActions"

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { setIsEditSpending, setIdSpending, setDateSpending, setNameSpending, setValueSpending, getTableList, deleteSpending } = allSpendingActions;
    let listData = useSelector(state => state.spendingReducer.tableList);
    listData && listData.map((item, i) => {listData[i].price = +item.price})

    useEffect(() => {
        // dispatch(getTableList('5fb3acd719e16b64c852d824'))
    }, [dispatch]);

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
        dispatch(deleteSpending('5fb7a799572a7b00046c63c4', arr))
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
            <Table deleteSpendings={deleteSpendings} editSpendingSetState={editSpendingSetState} dataSpending={listData} />
            <Button variant="contained" type="button" onClick={handleOpenPopup}>Добавить трату</Button>
            <SimpleModal open={isOpen} closePopUp={handleClosePopup} />
        </>
    );
}

export default MainPage