import API from "./API";

export async function getFamilySpending(pageIndex){
    try {
        return await API.get(`https://swapi.dev/api/people/?page=${pageIndex}`);
    } catch (error) {
        console.error('server error', error);
    }
}


export default{
    getFamilySpending,
}