import axios from "axios";

export default axios.create({
    baseURL: "https://backend-family-budget.herokuapp.com/",
    responseType: "json",
    body:"json",
});