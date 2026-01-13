import React from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const characterCard = ({ character }) => {
    const {dispatch} = useGlobalReducer();

    const imageUrl = `https://cdn.thesimpsonsapi.com/${200}${character.portrait_path}`;

    return (
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
                    onClick={() => dispatch(
                        {
                            type: "ADD_FAVORITE",
                            payload: character.name
                        }
                    )}
                > Me gusta ❤️
                </button>
            </div>
            <Link to={`details/${character.id}`}>
                <div className="card-body text-center">
                    <button type="button" className="btn btn-outline-primary">
                        View Details
                    </button>
                </div>
            </Link>
        </div>


    );
};

export default characterCard;