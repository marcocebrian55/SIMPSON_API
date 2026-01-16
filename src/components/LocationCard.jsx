import React from "react";
import { Link, useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";



export const LocationCard =({location})=> {
const imageUrl = `https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`;
const {dispatch}=useGlobalReducer();


const addFavorites = ()=>{
    dispatch({
        type: "ADD_FAVORITES",
        payload: location.name
    })

}


return(
    <div className="card h-100 shadow-sm border-warning">
            <img
                src={imageUrl}
                className="card-img-top p-2"
                alt={location.name}
                style={{ height: "250px", objectFit: "contain" }}
            />
            <div className="card-body text-center">
                <h5 className="card-title">{location.name}</h5>
                <button className="btn btn-outline-danger w-100"
                    onClick={()=>addFavorites()}
                > Me gusta ❤️
                </button>
            </div>
            
                <div className="card-body text-center">
                    <Link to={`/location/${location.id}`}>
                    <button type="button" className="btn btn-outline-primary">
                        View Details
                    </button>
                    
                    </Link>
                    
                </div>
            
        </div>

);

};
