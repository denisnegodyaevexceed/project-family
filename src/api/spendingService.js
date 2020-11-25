import {API} from "./API";

export async function getFamilySpending(userId, headers){
    return await API.get(`https://backend-family-budget.herokuapp.com/user/show-user?userId=${userId}`, headers);
}

export async function delSpendings(budgetId, arr, headers){
    return await API.delete(`https://backend-family-budget.herokuapp.com/budget/delete-waste?budgetId=${budgetId}`, {
        data: {
            ids: arr
        },
        headers
    });
}

export async function putEditSpending(budgetId, wasteId, price, date, nameWaste, headers){
    return await API.put(`https://backend-family-budget.herokuapp.com/budget/edit-waste?budgetId=${budgetId}`,{
        wasteId,
        price,
        date,
        nameWaste,
    }, headers);
}

export async function postAddSpending(userId, price, date, nameWaste, headers){
    return await API.post(`https://backend-family-budget.herokuapp.com/budget/add-waste?userId=${userId}`,{
        price,
        nameWaste,
        date,
    }, headers);
}

// TODO
export async function postInviteUser(email, budgetId, headers){
    return await API.post(`https://backend-family-budget.herokuapp.com/auth/invite-new-user`,{
        email,
        budgetId,
    }, headers);
}

export default{
    getFamilySpending,
    delSpendings,
    putEditSpending,
    postInviteUser,
}