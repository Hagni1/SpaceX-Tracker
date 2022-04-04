import RenderObject from "./RenderObject";
import '../styles/Upcoming.scss'
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
const Recent = () => {
  const { launchPad } = useContext(AppContext);
  const { payLoads } = useContext(AppContext);
  const [recent, setRecent] = useState({
    data: [],
    isLoaded: false,
  });

  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/past")
      .then((response) => response.json())
      .then((data) => setRecent({ data, isLoaded: true }));
  }, []);
  return (
    <div>
          {recent.isLoaded && launchPad.isLoaded && payLoads.isLoaded ? (
        
       
        [...recent.data].reverse().slice(0,10).map((item) => (
          <RenderObject
            key={item.flight_number}
            data={item}
            launchpad={launchPad.datas.filter((el) => el.id === item.launchpad)}
            payload={payLoads.datas.filter((el) => el.id === item.payloads[0])}
          />
        ))
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default Recent;
