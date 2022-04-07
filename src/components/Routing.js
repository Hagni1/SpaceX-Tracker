import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import CreateMissionPanel from "./CreateMissionPanel"
import LoadingPage from "./LoadingPage";
import Rockets from "./Rockets";
import '../styles/Routing.scss'
const Routing = () => {
  const { rockets, launch } = useContext(AppContext)
  return (
    <>
      <Routes>
      {launch.isLoaded ? <Route path='/' element={<CreateMissionPanel data={launch.datas[launch.datas.find(data => data.upcoming === true).flight_number - 2]} />} /> : <Route path='*' element={<LoadingPage />} />};
      {launch.isLoaded ? launch.datas.map(data => <Route key={data.id} path={`/${(data.flight_number)}`} element={<CreateMissionPanel data={data} />} />) : <Route path='*' element={<LoadingPage />} />}
        {rockets.isLoaded ? <Route path="/Rockets" element={<Rockets />} /> : <Route path='*' element={<LoadingPage />} />}
    </Routes>
    </>
  );
};

export default Routing;
