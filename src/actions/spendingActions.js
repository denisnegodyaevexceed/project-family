import actions from '../constants/actionsType'
import {
    getFamilySpending,
    delSpendings,
    putEditSpending,
    postAddSpending,
    postInviteUser
} from '../api/spendingService'

export const getTableList = (i, headers) => {
    return dispatch => {
        dispatch(getTablePageStarted());
        getFamilySpending(i, headers).then(res => {
            res.data.budget ? 
                dispatch(getTablePageSuccess(res.data.budget.waste))
                : 
                dispatch(getTablePageSuccess([]));
        }).catch(err => {
            dispatch(getTablePageFailure(err))
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


export const deleteSpending = (id, arrDel, headers) => {
    return dispatch => {
        dispatch(deleteSpendingStarted());
        delSpendings(id, arrDel, headers).then(res => {
            dispatch(deleteSpendingSuccess(res.data.waste));
        }).catch(err => {
            dispatch(deleteSpendingFailure(err.message));
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


export const editSpending = (budgetId, id, value, date, name, callback, headers) => {
    return dispatch => {
        dispatch(editSpendingStarted());
        putEditSpending(budgetId, id, value, date, name, headers).then(res => {
                dispatch(setUserBudgetId(res.data._id));
                res.data.waste ? 
                    dispatch(editSpendingSuccess(res.data.waste))
                    :
                    dispatch(editSpendingSuccess([]))
                callback();
        }).catch(err => {
            dispatch(editSpendingFailure(err.message));
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


export const addSpending = (id, value, date, name, callback, headers) => {
    return dispatch => {
        dispatch(addSpendingStarted());
        postAddSpending(id, value, date, name, headers).then(res => {
            dispatch(setUserBudgetId(res.data._id));
            res.data.waste ? 
                dispatch(addSpendingSuccess(res.data.waste))
                :
                dispatch(addSpendingSuccess([]))
            callback()
        }).catch(err => {
            dispatch(addSpendingFailure(err.message));
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


export const setUserBudgetId = data => ({
    type: actions.SET_USER_BUDGET_ID,
    payload: data,
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


export const inviteUserAction = (email, budgetId, headers) => {
    return dispatch => {
        dispatch(inviteUserActionStarted());
        postInviteUser(email, budgetId, headers).then(res => {
            console.log('inv-suc',res)
            dispatch(inviteUserActionSuccess(res));
        }).catch(err => {
            if(err.response){
                dispatch(inviteUserActionFailure(err?.response?.data?.message || err));
            } else {
                dispatch(inviteUserActionFailure('server err'));  
            }
        });
    }
}
const inviteUserActionStarted = () => ({
    type: actions.POST_INVITE_STARTED,
})
const inviteUserActionSuccess = () => ({
    type: actions.POST_INVITE_SUCCESS,
})
const inviteUserActionFailure  = (err) => ({
    type: actions.POST_INVITE_FAILURE,
    payload: err
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
    setUserBudgetId,
    inviteUserAction,
}