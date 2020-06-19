import React, { useState, useEffect } from "react";
import RouteComponent from './RouteComponent'

export default function Route({route}) {

    const [routeList, setRouteList] = useState([]);

    useEffect(() => {
        fetch(`https://api.tfl.gov.uk/Line/${route}/Route`)
          .then((res) => res.json())
          .then((data) => {
            setRouteList(data.routeSections); 
          })
          .catch((err) => {
            console.error(err);
          });
      }, [route]);


    return (
        <>
            {routeList && routeList.map((route, index) => <RouteComponent route={route} key={index}/>)}
        </>
    )
}
