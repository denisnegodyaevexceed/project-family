import axios from "axios";

const token = localStorage.getItem('refreshToken')
console.log(999, token)

export default axios.create({
    baseURL: "https://swapi.dev/api/",
    responseType: "json",
    body:"json",
    // headers:{
    //     'Authorization': `Bearer ${token}`
    // }
});