import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const {store,dispatch}=useGlobalReducer();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">
						 <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/b7/The_logo_simpsons_yellow.png"
                            alt="Logo Simpsons"
                            style={{ width: "120px" }}
                        />
					</span>
				</Link>
				<div className="dropdown">
                    <button
                        className="btn btn-primary dropdown-toggle"
                        type="button"
                        data-bs-toggle="dropdown"
						data-bs-auto-close="outside"
                        aria-expanded="false"
                    >
                        Favoritos({store.favorites.length})
                        
                    </button>
					<ul className="dropdown-menu dropdown-menu-end">
						{store.favorites.length === 0 ? (
                        <li className="dropdown-item text-center">Vacío</li>
                    ) : (
                        store.favorites.map((fav, index) => (
                            <li key={index} className="dropdown-item">
                                {fav}
								<button
								type="button"
								className="btn btn-sm btn-outline-secondary ms-2"
								onClick={()=> dispatch({
									type: "DELETE_FAVORITES",
									payload : fav
								})}
								>
									🗑️
								</button>
                            </li>
                        ))
                    )}
					</ul>
					</div>
			</div>
		</nav>
	);
};