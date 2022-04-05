import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [launchPad, setLaunchPad] = useState({
    datas: [],
    isLoaded: false,
  });
  const [crew, setCrew] = useState({
    datas: [],
    isLoaded: false,
  });
  const [payLoads, setPayLoads] = useState({
    datas: [],
    isLoaded: false,
  });
  const [rockets, setRockets] = useState({
    datas: [],
    isLoaded: false,
  });
  const [launch, setLaunch] = useState({
    datas: [],
    isLoaded: false,
  });

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then((response) => response.json())
      .then((datas) => setLaunchPad({ datas, isLoaded: true }));
  }, []);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/payloads")
      .then((response) => response.json())
      .then((datas) => setPayLoads({ datas, isLoaded: true }));
  }, []);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((datas) => setRockets({ datas, isLoaded: true }));
  }, []);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/crew")
      .then((response) => response.json())
      .then((datas) => setCrew({ datas, isLoaded: true }));
  }, []);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches")
      .then((response) => response.json())
      .then((datas) => setLaunch({ datas, isLoaded: true }));
  }, []);
  return (
    <AppContext.Provider value={{ launchPad, payLoads, rockets, crew, launch }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
