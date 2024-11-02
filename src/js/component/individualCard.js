// IndividualCard.js
import React from "react";
import PropTypes from "prop-types";

export const IndividualCard = ({ title, description, lastUpdated }) => {
    return (
        <div className="card mb-3 mx-auto" style={{ maxWidth: "540px", height: "auto" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://placehold.co/600x400" className="img-fluid rounded-start" alt={`${title} image`} />  
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text">
                            <small className="text-muted">Última actualización: {lastUpdated}</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

IndividualCard.propTypes = {
    
    title: PropTypes.string.isRequired,     
    description: PropTypes.string,           
    lastUpdated: PropTypes.string            
};
