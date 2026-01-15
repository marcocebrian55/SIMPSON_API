import React from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const CharacterCard =({character})=> {
const imageUrl = `https://cdn.thesimpsonsapi.com/${200}${character.portrait_path}`;
const {dispatch}=useGlobalReducer();


const addFavorites = ()=>{
    dispatch({
        type: "ADD_FAVORITES",
        payload: character.name
    })

}


return(
    <div className="card h-100 shadow-sm border-warning">
            <img
                src={imageUrl}
                className="card-img-top p-2"
                alt={character.name}
                style={{ height: "250px", objectFit: "contain" }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{character.name}</h5>
                <button className="btn btn-outline-danger w-100"
                    onClick={()=>addFavorites()}
                > Me gusta ❤️
                </button>
            </div>
            
                <div className="card-body text-center">
                    <Link to={`/details/${character.id}`}>
                    <button type="button" className="btn btn-outline-primary">
                        View Details
                    </button>
                    
                    </Link>
                    
                </div>
            
        </div>

);

};
