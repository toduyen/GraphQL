import React from 'react';
import LauchesItem from './LauchesItem';
import {
    useQuery,
    gql
  } from "@apollo/client";
const GET_ALL_DATA = gql`
  query {
    lauches {
        flight_number,
        mission_name,
        launch_year,
        launch_date_local,
        launch_success,
    }
  }
`;
const Lauchs = () => {
    const { loading, error, data } = useQuery(GET_ALL_DATA);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return data.lauches.map((value, key) => (
        <LauchesItem key={key} lauches={value}></LauchesItem>
    ));
}
 
export default Lauchs;