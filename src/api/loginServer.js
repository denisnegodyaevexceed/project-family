import API from "./API";
import axios from "axios"

const API_URL = `https://backend-family-budget.herokuapp.com/auth/login`;

export async function postSignInUser(email, password) {
    const { data: user } = await axios.post(API_URL, {
        email,
        password,
    });
    return user;
}

export async function getUser(userId, headers){
    try {
        return await API.get(`https://backend-family-budget.herokuapp.com/user/show-user?userId=${userId}`, headers);
    } catch (error) {
        console.error('server error', error);
    }
}

export default {
    postSignInUser,
    getUser,
}