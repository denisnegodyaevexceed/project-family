import React, { useState, useEffect } from "react";
import Table from '../components/Table/Table'
import SimpleModal from "../components/Modal/Modal";
import { Button } from "@material-ui/core"


import {getFamilySpending} from "../api/spendingService"

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows =[
    createData('Cupcake', '305', 3.7, 67, 4.3),
    createData('Donut', '452', 25.0, 51, 4.9),
    createData('Eclair', '262', 16.0, 24, 6.0),
    createData('Frozen yoghurt', '159', 6.0, 24, 4.0),
    createData('Gingerbread', '356', 16.0, 49, 3.9),
    createData('Honeycomb', '408', 3.2, 87, 6.5),
    createData('Ice cream sandwich', '237', 9.0, 37, 4.3),
    createData('Jelly Bean', '375', 0.0, 94, 0.0),
    createData('KitKat', '518', 26.0, 65, 7.0),
    createData('Lollipop', '392', 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', '360', 19.0, 9, 37.0),
    createData('Oreo', '437', 18.0, 63, 4.0),
];


const MainPage = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [data, setdata] = useState(rows);

    useEffect(() => {
        getFamilySpending(1).then(data => {
            console.log(data.data.results)
            data.data.results.map(arr => {
                arr.height = +arr.height 
                arr.mass = +arr.mass 
            })
            setdata(data.data.results)
        })
    }, []);

    const editSpending = (id) => {
        setIsEdit(true);
        handleOpenPopup();
        console.log(id);
    }

    const handleClosePopup = () => {
        setIsOpen(false);
        setIsEdit(false);
    };

    const handleOpenPopup = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Table editSpending={editSpending} dataSpending={data} />
            <Button variant="contained" type="button" onClick={handleOpenPopup}>Добавить трату</Button>
            <SimpleModal open={isOpen} closePopUp={handleClosePopup} isEdit={isEdit} />
        </>
    );
}

export default MainPage;