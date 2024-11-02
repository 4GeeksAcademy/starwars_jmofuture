import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import People from "../component/people";
import Planets from "../component/planets";
import Vehicles from "../component/vehicles";

export const Home = () => {
    const { actions } = useContext(Context);

    useEffect(() => {
     
        actions.getPeople();
        actions.getPlanets();
        actions.getVehicles();
    }, []);

    return (
        <div className="text-center mt-5" style={{ overflowY: "auto", height: "80vh" }}>
            <People />
            <Planets />
            <Vehicles />
        </div>
    );
};
