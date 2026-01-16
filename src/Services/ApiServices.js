const BASE_URL = "https://thesimpsonsapi.com/api";




export const getCharacters = async(dispatch)=>{
const response = await fetch(`${BASE_URL}/characters`);
const data = await response.json();


dispatch({
        type: "GET_CHARACTERS",
        payload: data.results,
    });
    return data.results
    ;


};


export const getSingleCharacters = async(id)=>{
const response = await fetch(`${BASE_URL}/characters/${id}`);

const data = await response.json();

return data;


};


export const getLocations = async(dispatch)=>{
const response = await fetch(`${BASE_URL}/locations`);
const data = await response.json();


dispatch({
        type: "GET_LOCATIONS",
        payload: data.results,
    });
    return data.results
    ;


};


export const getSingleLocations = async(id)=>{
const response = await fetch(`${BASE_URL}/locations/${id}`);

const data = await response.json();

return data;


};