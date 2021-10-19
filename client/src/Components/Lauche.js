import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {useQuery,
    gql
  } from "@apollo/client";
const GET_DATA_DETAIL = gql`
  query($flight_number: String!) {
    lauche(flight_number: $flight_number){
        flight_number,
        mission_name,
        launch_year,
        launch_date_local,
        launch_success,
        rocket {
            rocket_id,
            rocket_name,
            rocket_type
        }
    }
  }
`
const Lauche = () => {
    const match = useRouteMatch('/lauche/:flight_number');
    const flight_number = match.params.flight_number;
    const { loading, error, data } = useQuery(GET_DATA_DETAIL, {variables: {flight_number}});
      if (loading) return null;
      if (error) return `Error! ${error}`;
      const {flight_numberm, mission_name, launch_year, launch_date_local, launch_success, rocket:{rocket_id,rocket_name,rocket_type}} = data.lauche;
      return (
        <React.Fragment>
              <p>{flight_numberm}</p>
            <p>{mission_name}</p>
            <p>{launch_year}</p>
            <p>{flight_number}</p>
            <p>{launch_date_local}</p>
            <p>{launch_success}</p>
            <p>{rocket_id}</p>
            <p>{rocket_name}</p>
            <p>{rocket_type}</p>
        </React.Fragment>
      );
}
 
export default React.memo(Lauche);