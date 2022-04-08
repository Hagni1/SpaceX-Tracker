import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selected, setSelected]= useState(false)
  const [launchPad, setLaunchPad] = useState({
    data: [],
    isLoaded: false,
  });
  const [crew, setCrew] = useState({
    data: [],
    isLoaded: false,
  });
  const [payLoads, setPayLoads] = useState({
    data: [],
    isLoaded: false,
  });
  const [rockets, setRockets] = useState({
    data: [],
    isLoaded: false,
  });
  const [launch, setLaunch] = useState({
    data: [],
    isLoaded: false,
  });

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/launchpads")
      .then((response) => response.json())
      .then((data) => setLaunchPad({ data, isLoaded: true }));
  }, []);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/payloads")
      .then((response) => response.json())
      .then((data) => setPayLoads({ data, isLoaded: true }));
  }, []);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((data) => setRockets({ data, isLoaded: true }));
  }, []);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/crew")
      .then((response) => response.json())
      .then((data) => setCrew({ data, isLoaded: true }));
  }, []);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches")
      .then((response) => response.json())
      .then((data) => setLaunch({ data, isLoaded: true }));
  }, []);
  console.log(launchPad.data)
  return (
    <AppContext.Provider value={{ launchPad, payLoads, rockets, crew, launch, selected, setSelected }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
