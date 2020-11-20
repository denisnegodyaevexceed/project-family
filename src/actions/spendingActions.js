import actions from '../constants/actionsType'
import { getFamilySpending, delSpendings, putEditSpending, postAddSpending } from '../api/spendingService'


export const getTableList = (i) => {
    return dispatch => {
        dispatch(getTablePageStarted());
        getFamilySpending(i).then(res => {
            setTimeout(() => {
                dispatch(getTablePageSuccess(res.data.budget.waste));
            },1)
        }).catch(err => {
            alert(`ошибка сервера ${err.message}`);
        });
    }
}
const getTablePageSuccess = data => ({
    type: actions.GET_TABLE_LIST_SUCCESS,
    payload: data
});
const getTablePageStarted = () => ({
    type: actions.GET_TABLE_LIST_STARTED
});
const getTablePageFailure = error => ({
    type: actions.GET_TABLE_LIST_FAILURE,
    payload: error,
});


export const deleteSpending = (id, arrDel) => {
    return dispatch => {
        dispatch(deleteSpendingStarted());
        delSpendings(id, arrDel).then(res => {
            // dispatch(deleteSpendingSuccess(res.data.waste));
            console.log(12, res)
        }).catch(err => {
            dispatch(deleteSpendingFailure(err.message));
            alert(`ошибка сервера ${err.message}`);
        });
    }
}
const deleteSpendingStarted = () => ({
    type: actions.DEL_SPENDING_STARTED,
})
const deleteSpendingSuccess = (data) => ({
    type: actions.DEL_SPENDING_SUCCESS,
    payload: data,
})
const deleteSpendingFailure = (err) => ({
    type: actions.DEL_SPENDING_FAILURE,
    payload: err,
})


export const editSpending = (budgetId, id, value, date, name, callback) => {
    return dispatch => {
        dispatch(editSpendingStarted());
        putEditSpending(budgetId, id, value, date, name).then(res => {
            setTimeout(() => {
                dispatch(editSpendingSuccess(res.data.waste));
                callback()
            },1)
        }).catch(err => {
            dispatch(editSpendingFailure(err.message));
            alert(`ошибка сервера ${err.message}`);
        });
    }
}
const editSpendingStarted = () => ({
    type: actions.PUT_EDIT_SPENDING_STARTED,
})
const editSpendingSuccess = (data) => ({
    type: actions.PUT_EDIT_SPENDING_SUCCESS,
    payload: data,
})
const editSpendingFailure = (err) => ({
    type: actions.PUT_EDIT_SPENDING_FAILURE,
    payload: err,
})


export const addSpending = (id, value, date, name, callback) => {
    return dispatch => {
        dispatch(addSpendingStarted());
        postAddSpending(id, value, date, name).then(res => {
            setTimeout(() => {
                dispatch(addSpendingSuccess(res.data.waste));
                callback()
            },1)
        }).catch(err => {
            dispatch(addSpendingFailure(err.message));
            alert(`ошибка сервера ${err.message}`);
        });
    }
}
const addSpendingStarted = () => ({
    type: actions.POST_NEW_SPENDING_STARTED,
})
const addSpendingSuccess = (data) => ({
    type: actions.POST_NEW_SPENDING_SUCCESS,
    payload: data,
})
const addSpendingFailure = (err) => ({
    type: actions.POST_NEW_SPENDING_FAILURE,
    payload: err,
})


export const setDateSpending = (date) => ({
    type: actions.SET_DATE_SPENDING,
    payload: date
})

export const setNameSpending = (name) => ({
    type: actions.SET_NAME_SPENDING,
    payload: name
})

export const setValueSpending = (value) => ({
    type: actions.SET_VALUE_SPENDING,
    payload: value
})

export const setIsEditSpending = (bool) => ({
    type: actions.SET_IS_EDIT_SPENDING,
    payload: bool
})

export const setIdSpending = (id) => ({
    type: actions.SET_ID_SPENDING,
    payload: id
})

export const clearSpendingForm = () => ({
    type: actions.CLEAR_SPENDING_FORM,
})


export default {
    setDateSpending,
    setNameSpending,
    setValueSpending,
    setIsEditSpending,
    setIdSpending,
    clearSpendingForm,
    deleteSpending,
    getTableList,
    editSpending,
    addSpending,
}