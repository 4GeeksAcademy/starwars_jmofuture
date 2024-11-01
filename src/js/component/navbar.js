import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
          <Link
            className="btn btn-warning dropdown-toggle"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="true"
            to="#"
          >
            Favoritos: <span>0</span>
          </Link>

          <ul className="dropdown-menu">
            <li className="d-flex justify-content-between align-items-center">
              <Link className="dropdown-item" to="#">
                Luke Skywalker
              </Link>
              <button className="btn btn-secondary btn-sm">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

