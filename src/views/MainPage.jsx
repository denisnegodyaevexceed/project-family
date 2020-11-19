import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import Table from '../components/Table/Table'
import SimpleModal from "../components/Modal/Modal";
import { Button } from "@material-ui/core"

import allActionsTable from "../actions/tableAction"

const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [cost, setCost] = useState();

    const dispatch = useDispatch();
    const listData = useSelector(state => state.tableReducer.tableList);

    useEffect(() => {
        dispatch(allActionsTable.getTableList(1))
    }, [dispatch]);


    const editSpending = (id, cost) => {
        setIsEdit(true);
        setCost(cost)
        handleOpenPopup();
        console.log(id, cost);
    }

    const handleClosePopup = () => {
        setIsOpen(false);
        setIsEdit(false);
        setCost('');
    };

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Table editSpending={editSpending} dataSpending={listData} />
            <Button variant="contained" type="button" onClick={handleOpenPopup}>Добавить трату</Button>
            <SimpleModal open={isOpen} closePopUp={handleClosePopup} isEdit={isEdit} cost={cost} />
        </>
    );
}

export default MainPage