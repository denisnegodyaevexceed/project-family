import axios from "axios"
const API_URL = `https://backend-family-budget.herokuapp.com/auth/login`;

export async function postSignInUser(email, password) {
    const { data: user } = await axios.post(API_URL, {
        email,
        password,
    });
    return user;
}

export default {
    postSignInUser
}