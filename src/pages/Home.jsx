import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters } from "../Services/ApiServices.js";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
 

  useEffect(()=>{
	getCharacters(dispatch)
  },[] )

	return (
		<div className="container py-4">
			<div>
				<h1 className="text-center">Personajes </h1>
			</div>
			<div className="row g-3">
				{store.characters.map(character=>(
					<div className=" col-sm-6 col-md-4 col-lg-3" key={character.id}>
						<CharacterCard character={character} />
						</div>
				))}

			</div>

			
			
		</div>
	);
}; 