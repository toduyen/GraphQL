import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const LauchesItem = ({lauches}) => {
    return (
        <div>
            <p>{lauches.flight_number}</p>
            <p>{lauches.mission_name}</p>
            <p>{lauches.launch_year}</p>
            <p>{lauches.launch_date_local}</p>
            <p>{lauches.launch_success}</p>
            <Link to={`/lauche/${lauches.flight_number}`}>Click chi tiet</Link>
        </div>
    );
}
export default LauchesItem;