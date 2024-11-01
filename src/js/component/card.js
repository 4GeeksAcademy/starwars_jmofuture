import React from "react";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://placehold.co/400x200" className="card-img-top" alt="Placeholder" />
      <div className="card-body">
        <h5 className="card-title">Nombre</h5>
        <p className="card-text">
          Genero: <span>Azul</span>
        </p>
        <p className="card-text">
          Color de Pelo: <span>Azul</span>
        </p>
        <p className="card-text">
          Color de ojos: <span>Azul</span>
        </p>
        <div className="d-flex justify-content-between align-items-center">
            <Link to="#" className="btn btn-primary">Saber más!</Link>
            <button className="btn border "><i className="fa-regular fa-star"></i><i className="fa-solid fa-star"></i></button>
        </div>
      </div>
    </div>
  );
};
