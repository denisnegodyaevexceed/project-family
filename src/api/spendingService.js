import API from "./API";

export async function getFamilySpending(id){
    try {
        return await API.get(`https://backend-family-budget.herokuapp.com/user/show-user?userId=${id}`);
    } catch (error) {
        console.error('server error', error);
    }
}


export default{
    getFamilySpending,
}