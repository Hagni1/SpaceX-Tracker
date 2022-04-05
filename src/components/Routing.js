import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import CreateRocket from "./CreateRocket";
import CreateMissionPanel from "./CreateMissionPanel"
import Home from "./Home";
import Rockets from "./Rockets";
const Routing = () => {
  const { rockets, launch } = useContext(AppContext)
  return (
    <Routes>
      {launch.isLoaded ? <Route path='/' element={<CreateMissionPanel data={launch.datas[launch.datas.find(data => data.upcoming === true).flight_number - 2]} />} /> : <Route path='/' element={<Home />} />};
      {rockets.isLoaded? <Route path="/Rockets" element={<Rockets />} /> : <Route path='/' element={<Home />} />}
      {launch.isLoaded ? launch.datas.map(data => <Route key={data.id} path={`/${(data.flight_number)}`} element={<CreateMissionPanel data={data} />} />) : <Route path='/' element={<Home />} />}
      {rockets.isLoaded ? rockets.datas.map(data => <Route key={data.id} path={`/${(data.name).replace(/\s/g, "").toLowerCase()}`} element={<CreateRocket data={data} />} />) : <Route path='/' element={<Home />} />}
    </Routes>
  );
};

export default Routing;
