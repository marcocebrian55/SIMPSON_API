import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { useEffect, useState } from "react";
import { getSingleCharacters } from "../Services/ApiServices";

export const Details = ()=>{
    

    const {id}=useParams();
    const {store}=useGlobalReducer();
    const [character,setCharacter] = useState({})


    const loadSingleCharacters = async () => {
        const dataCharacter = await getSingleCharacters(id)
        setCharacter(dataCharacter)

    }

    useEffect(()=>{
        loadSingleCharacters();
    },[]);
    
 return (
        <div className="container mt-5">
            <div className="card shadow text-center">
                <div className="card-header bg-primary text-white">
                    <h1>{character.name}</h1>
                </div>
                <div className="card-body">
                    <img
                        src={`https://cdn.thesimpsonsapi.com/${200}${character.portrait_path}`}
                        alt={character.name}
                        style={{ width: "300px" }}
                    />
                    <div className="container mt-4">

                        <p> <strong>EDAD:</strong>{character.age} </p>
                        <p> <strong>FECHA DE NACIMIENTO:</strong>{character.birthdate} </p>
                        <p> <strong>OCUPACION:</strong>{character.occupation} </p>
                        <p> <strong>FRASE FAMOSA:</strong>{character.phrases?.[0]} </p>

                    </div>
                </div>
            </div>
        </div>
    );


    
};