
import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router';



const Details = () => {
  const { type, uid } = useParams();
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
        const data = await response.json();
        setDetails(data.result.properties);
      } catch (error) {
        console.error("Error al obtener los detalles:", error);
      }
    };
    fetchData();
  }, [type, uid]);

  if (!details) {


    return  <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
             </div>
  }


  return (
    <div>

      <div className="card mb-3" >
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/${type == "people" ? "characters" : type}/${uid}.jpg`} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Details: {details.name}</h5>
              {type === "people" && (
                <>
                  <p className="card-text">Heigth: {details.height}</p>
                  <p className="card-text">Mass:{details.mass}</p>
                  <p className="card-text">Hair Color: {details.hair_color}</p>
                </>
              )}

              {type === "vehicles" && (
                <>
                  <p className="card-text">Model: {details.model}</p>
                  <p className="card-text">Manufacturer:{details.manufacturer}</p>
                  <p className="card-text"> Cost in credits: {details.cost_in_credits}</p>
                </>
              )}
              {type === "planets" && (
                <>

                  <p className="card-text">Climate: {details.climate}</p>
                  <p className="card-text">Diameter:{details.diameter}</p>
                  <p className="card-text">Population: {details.population}</p>
                </>
              )}

            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Details;
