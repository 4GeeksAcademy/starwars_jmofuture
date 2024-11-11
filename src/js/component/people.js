import React, { useContext } from 'react';
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router';

const People = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='contenedor  m-4'>
      <h2 style={{ textAlign: "start", margin: "10px", }}> Personas</h2>

      <div className="d-flex" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {store.characters && store.characters.length > 0 ? (
          store.characters.map((character) => {
            const isFavorite = store.favorites.some(fav => fav.name === character.name);

            return (
              <div className="card m-2" key={character.uid} style={{ width: "400px", flex: " 0 0 auto", }} >

                <img
                src={`https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`}
                onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; //
                }}
                className="card-img-top"
                alt={character.name}
                style={{ width: "400px", height: "100%", objectFit: "cover" }}
                />


                <div className="card-body">
                  <h5 className="card-title">{character.name}</h5>
                  <p className="card-text text-start"
                    style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                  <div className='icons d-flex justify-content-between'>
                    <button type="button"
                      className="btn btn-warning"
                      onClick={() => navigate(`/details/people/${character.uid}`)}>Saber más!</button>
                    <i className={`fa-solid fa-star ${isFavorite ? "text-danger" : "fa-regular"}`}
                      onClick={() => isFavorite ? actions.removeFavByUid(character.name) : actions.addFav(character)}
                    ></i>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default People;
