import API from "./API";
import axios from "axios"

const API_URL = `https://backend-family-budget.herokuapp.com/auth/login`;

async function postSignInUser(email, password) {
    const { data: user } = await axios.post(API_URL, {
        email,
        password,
    });
    return user;
}

async function getUser(userId, headers){
    try {
        return await API.get(`https://backend-family-budget.herokuapp.com/user/show-user?userId=${userId}`, headers);
    } catch (error) {
        console.error('server error', error);
    }
}

const allSignInApi = {
    postSignInUser,
    getUser,
}

export default allSignInApi