// Card.js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Card = ({ id, name, gender, hairColor, eyeColor, type, onFavoriteToggle, isFavorite }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://placehold.co/400x200" className="card-img-top" alt={`${name}`} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Género: <span>{gender}</span></p>
        <p className="card-text">Color de Pelo: <span>{hairColor}</span></p>
        <p className="card-text">Color de Ojos: <span>{eyeColor}</span></p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/details/${type}/${id}`} className="btn btn-primary">Saber más!</Link>
          <button onClick={() => onFavoriteToggle(id)} className="btn border">
            <i className={isFavorite ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,          
  name: PropTypes.string.isRequired,        
  gender: PropTypes.string,                 
  hairColor: PropTypes.string,              
  eyeColor: PropTypes.string,                    
  type: PropTypes.string.isRequired,        
  onFavoriteToggle: PropTypes.func,       
  isFavorite: PropTypes.bool                
};

