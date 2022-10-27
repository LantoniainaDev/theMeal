import axios from "static/axios.min";
const baseUri = "https://www.themealdb.com/api/json/v1/1/";

export const randMeal = (search = "Seafood") => {
    return axios(`${baseUri}filter.php?c=${search}`)
};

export const searchById =(id="53049") =>{
    return axios(`${baseUri}lookup.php?i=${id}`).then(({data})=> data.meals[0]);
}

export const getCatList = ()=>{
    return axios(`${baseUri}list.php?c=list`).then(({data})=>data.meals);
}