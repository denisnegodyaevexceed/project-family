import API from "./API";

async function getFamilySpending(userId, headers){
    return await API.get(`https://backend-family-budget.herokuapp.com/user/show-user?userId=${userId}`, headers);
}

async function delSpendings(budgetId, arr, headers){
    return await API.delete(`https://backend-family-budget.herokuapp.com/budget/delete-waste?budgetId=${budgetId}`, {
        data: {
            ids: arr
        },
        headers
    });
}

async function putEditSpending(budgetId, wasteId, price, date, nameWaste, headers){
    return await API.put(`https://backend-family-budget.herokuapp.com/budget/edit-waste?budgetId=${budgetId}`,{
        wasteId,
        price,
        date,
        nameWaste,
    }, headers);
}

async function postAddSpending(userId, price, date, nameWaste, headers){
    return await API.post(`https://backend-family-budget.herokuapp.com/budget/add-waste?userId=${userId}`,{
        price,
        nameWaste,
        date,
    }, headers);
}


async function postInviteUser(email, budgetId, headers){
    return await API.post(`https://backend-family-budget.herokuapp.com/auth/invite-new-user`,{
        email,
        budgetId,
    }, headers);
}

const allSpendingServises = {
    getFamilySpending,
    delSpendings,
    putEditSpending,
    postInviteUser,
    postAddSpending
}

export default allSpendingServises;