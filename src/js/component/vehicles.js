import React, { useContext } from 'react'
import { Context } from "../store/appContext"
import { useNavigate } from 'react-router';


const Vehicles = () => {

  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  return (
    <div className='contenedor m-4'>
      <h2 style={{ textAlign: "start", margin: "10px", }}> Vehiculos</h2>

      <div className="d-flex"
        style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
        {store.vehicles && store.vehicles.length > 0 ? (
          store.vehicles.map((vehicle) => {
            const isFavorite = store.favorites.some(fav => fav.uid === vehicle.uid);

            return (

              <div className="card m-2" key={vehicle.uid}
                style={{ width: "400px", flex: " 0 0 auto", }} >
                <img
                  src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
                  onError={(e) => {
                    o.target = null;
                    e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
                  }}

                  className="card-img-top"
                  alt={vehicle.name}
                  style = {{ width:"400px", height: "100%", objectFit: "cover"}} />
                <div className="card-body">

                  <h5 className="card-title">{vehicle.name}</h5>
                  <p className="card-text text-start"
                    style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut 
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>


                    <div className='icons d-flex justify-content-between'>
                    <button type="button"
                      className="btn btn-warning"
                      onClick={() => navigate(`/details/vehicles/${vehicle.uid}`)}>Saber más!</button>
                    <i className={`fa-solid fa-star ${isFavorite ? "text-danger" : "fa-regular"}`}
                      onClick={() => isFavorite ? actions.removeFavByUid(vehicle.uid) : actions.addFav(vehicle)}
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

export default Vehicles