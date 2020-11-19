import actions from '../constants/actionsType'

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

export const deleteSpending = (arrDel) => ({
    type: actions.SET_DELETE_SPENDINGS,
    payload: arrDel
})

export default {
    setDateSpending,
    setNameSpending,
    setValueSpending,
    setIsEditSpending,
    setIdSpending,
    clearSpendingForm,
    deleteSpending
}