import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer();

    return (
        <nav className="navbar navbar-light bg-light mb-3">
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
                        aria-expanded="false"
                    >
                        Favoritos
                        <span className="badge bg-danger ms-2">
                            {store.favorites ? store.favorites.length : 0}
                        </span>
                    </button>

                    <ul className="dropdown-menu dropdown-menu-end" style={{ minWidth: "225px" }}>
                        {store.favorites.length === 0 ? (
                            <li><span className="dropdown-item text-muted text-center small">Vacío</span></li>
                        ) : (
                            store.favorites.map((fav, index) => (
                                <li key={index}>
                                   
                                    <div className="dropdown-item d-flex justify-content-between align-items-center py-2">

                                        <span>{fav}</span>

                                        <button
                                            className="btn btn-sm text-danger"
                                            onClick={() => dispatch({ type: "DELETE_FAVORITE", payload: fav })}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>

                                    </div>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};