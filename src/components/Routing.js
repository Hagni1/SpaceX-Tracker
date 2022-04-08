import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import CreateMissionPanel from "./CreateMissionPanel"
import LoadingPage from "./LoadingPage";
import Rockets from "./Rockets";
import '../styles/Routing.scss'
import Navigation from "./Navigation";
import Crew from "./Crew";
import CreateCrewMember from "./CreateCrewMember";
import LaumchPad from "./LaunchPad";
import LaunchPad from "./LaunchPad";
const Routing = () => {
  const { rockets, launch,crew, launchPad } = useContext(AppContext)
  return (
    <>
      <Routes>
      {launch.isLoaded ? <Route path='/' element={<CreateMissionPanel data={launch.data[launch.data.find(data => data.upcoming === true).flight_number - 2]} />} /> : <Route path='*' element={<LoadingPage />} />};
      {launch.isLoaded ? launch.data.map(data => <Route key={data.id} path={`/${(data.flight_number)}`} element={<CreateMissionPanel data={data} />} />) : <Route path='*' element={<LoadingPage />} />}
        {rockets.isLoaded ? <Route path="/Rockets" element={<Rockets />} /> : <Route path='*' element={<LoadingPage />} />}
        {launch.isLoaded ?  <Route  path='/Navigation' element={<Navigation/>} /> : <Route path='*' element={<LoadingPage />} />}
        {crew.isLoaded ? <Route path='/Crew' element={<Crew />} /> : <Route path='*' element={<LoadingPage />} />}
        {crew.isLoaded ? crew.data.map(data=> <Route path={`/Crew/${data.name.replace(/\s/g, "").toLowerCase()}`} element={<CreateCrewMember data={data} />} />) : <Route path='*' element={<LoadingPage />} />}
        {launchPad.isLoaded? <Route path='/LaunchPad' element={<LaunchPad />} /> : <Route path='*' element={<LoadingPage />} />}
    </Routes>
    </>
  );
};

export default Routing;
