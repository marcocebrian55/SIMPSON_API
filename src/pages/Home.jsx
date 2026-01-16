import { useEffect } from "react";
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { getCharacters, getLocations } from "../Services/ApiServices.js";
import { useParams } from "react-router-dom";
import { CharacterCard } from "../components/CharacterCard.jsx";
import { LocationCard } from "../components/LocationCard.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
 

  useEffect(()=>{
	getCharacters(dispatch);
	getLocations(dispatch);
	
  },[] )

	return (
		
		<div className="container py-4">
			<div>
				<h1 className="text-center">Personajes </h1>
			</div>
			
			<div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scroll gap-3">
				{store.characters.map(character=>(
					<div className=" col-sm-6 col-md-4 col-lg-3" key={character.id}>
						<CharacterCard character={character} />
						</div>
				))}

			</div>

			<div>
				<h1 className="text-center">Localizaciones </h1>
			</div>
			
			<div className="d-flex flex-row flex-nowrap overflow-auto pb-4 custom-scroll gap-3">
				{store.Locations.map(location=>(
					<div className=" col-sm-6 col-md-4 col-lg-3" key={location.id}>
						<LocationCard  location= {location} />
						</div>
				))}

			</div>

			
			
		</div>
		
	);
}; 