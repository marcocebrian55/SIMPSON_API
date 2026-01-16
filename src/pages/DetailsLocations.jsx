import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { getSingleLocations } from "../Services/ApiServices";

export const DetailsLocations = () => {
    

    const {id}=useParams();
    const {store}=useGlobalReducer();
    const [location,setLocation] = useState({})


    const loadSingleLocation = async () => {
        const dataLocation = await getSingleLocations(id)
        setLocation(dataLocation)

    }

    useEffect(()=>{
        loadSingleLocation();
    },[]);
    
 return (
        <div className="container mt-5">
            <div className="card shadow text-center">
                <div className="card-header bg-primary text-white">
                    <h1>{location.name}</h1>
                </div>
                <div className="card-body">
                    <img
                        src={`https://cdn.thesimpsonsapi.com/500/location/${location.id}.webp`}
                        alt={location.name}
                        style={{ width: "300px" }}
                    />
                    <div className="container mt-4">

                        <p> <strong>NAME:</strong>
                        {location.name || "Sin datos"} </p>
                        <p> <strong>TOWN:</strong>
                        {location.town || "Sin datos"} </p>
                        <p> <strong>USE:</strong>
                        {location.use || "Sin datos"} </p>
                        <p> <strong>DESCRIPTION:</strong> </p>

                    </div>
                </div>
            </div>
        </div>
    );


    
};