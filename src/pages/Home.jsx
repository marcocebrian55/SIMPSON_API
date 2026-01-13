import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { getCharacters } from "./ApiServices.js";
import CharacterCard from "../components/CharacterCard.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();


	useEffect(() => {
		
			getCharacters(dispatch);
		
    }, [dispatch]);







	return (
        <div className="container mt-4">
            <div className="row">
                {store.characters.map((character) => (
                    <div className="col-md-4" key={character.id}>
                        <CharacterCard character={character} />
                    </div>
                ))}
            </div>
        </div>
    );
};