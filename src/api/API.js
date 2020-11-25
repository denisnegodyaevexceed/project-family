import axios from "axios";

export let API = axios.create({
    baseURL: "https://backend-family-budget.herokuapp.com/",
    responseType: "json",
    body:"json",
});

API.interceptors.response.use(
    response => response,
    error => {
        if( 
            error?.response?.data?.message === 'Token expired!' || 
            error?.response?.data?.message === 'Invalid token!' || 
            error?.response?.data?.message === 'Token not provided!'
        ){
            alert('истекло время сессии')
            localStorage.clear();
            document.location.reload();
        }
        return Promise.reject(error);
});

export default API  