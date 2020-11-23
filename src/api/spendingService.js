import API from "./API";

export async function getFamilySpending(userId, headers){
    try {
        return await API.get(`https://backend-family-budget.herokuapp.com/user/show-user?userId=${userId}`, headers);
    } catch (error) {
        console.error('server error', error);
    }
}

export async function delSpendings(budgetId, arr, headers){
    try {
        return await API.delete(`https://backend-family-budget.herokuapp.com/budget/delete-waste?budgetId=${budgetId}`, {
            data: {
                ids: arr
            },
            headers
        });
    } catch (error) {
        console.error('server error', error);
    }
}

export async function putEditSpending(budgetId, wasteId, price, date, nameWaste, headers){
    try {
        return await API.put(`https://backend-family-budget.herokuapp.com/budget/edit-waste?budgetId=${budgetId}`,{
            wasteId,
            price,
            date,
            nameWaste,
        }, headers);
    } catch (error) {
        console.error('server error', error);
    }
}

export async function postAddSpending(userId, price, date, nameWaste, headers){
    try {
        return await API.post(`https://backend-family-budget.herokuapp.com/budget/add-waste?userId=${userId}`,{
            price,
            nameWaste,
            date,
        }, headers);
    } catch (error) {
        console.error('server error', error);
    }
}

export default{
    getFamilySpending,
    delSpendings,
    putEditSpending,
}