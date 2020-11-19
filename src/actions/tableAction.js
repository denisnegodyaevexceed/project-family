import actions from '../constants/actionsType'
import { getFamilySpending } from '../api/spendingService'

export const getTableList = (i) => {
    return dispatch => {
        dispatch(getTablePageStarted());
        getFamilySpending(i).then(res =>{
            dispatch(getTablePageSuccess(res.data.budget.waste));
        }).catch(err => {
            dispatch(getTablePageFailure(err.message));
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

export default{
    getTableList,
}