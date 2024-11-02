import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    return (
        <nav className="container navbar navbar-light mb-3">
            <Link to="/">
                <img
                    src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG34.png"
                    style={{ width: "50px", height: "auto" }}
                    alt="Star Wars Logo"
                />
            </Link>

            <div className="ml-auto">
                <div className="dropdown">
                    <button
                        className="btn btn-warning dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                        to="#"
                    >
                        Favorites ({store.favorites.length})
                    </button>

                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {store.favorites.length > 0 ? (
                            store.favorites.map((fav, index) => (
                                <li key={index}>
                                    <span className="dropdown-item d-flex justify-content-between align-items-center">
                                        <span className="text-truncate" style={{ maxWidth: "150px" }}>
                                            {fav.name}
                                        </span>
                                        <i
                                            className="fa-solid fa-trash ms-4"
                                            style={{ cursor: "pointer", color: "grey" }}
                                            onClick={() => actions.removeFavByUid(fav.uid)}
                                        ></i>
                                    </span>
                                </li>
                            ))
                        ) : (
                            <li>
                                <span className="dropdown-item">No hay favoritos</span>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};
