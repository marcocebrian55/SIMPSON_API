import React from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
export const Details = () => {
    const { id } = useParams();
    const { store } = useGlobalReducer();


    const character = store.characters.find(item => item.id === Number(id));
    console.log(character);


    if (!character) return <p>Cargando detalles...</p>;

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
                    <div className="mt-4">
                        <p className="mb-2"><strong>Edad:</strong> {character.age}</p>
                        <p className="mb-2"><strong>Cumpleaños:</strong> {character.birthdate}</p>
                        <p className="mb-2"><strong>Género:</strong> {character.gender}</p>
                        <p className="mb-2"><strong>Trabajo</strong> {character.occupation}</p>
                        <p className="mb-2">
                            <strong>Frase famosa:</strong> {character.phrases[0]}
                        </p>
                        <p className="mb-2"><strong>Estado:</strong> {character.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};