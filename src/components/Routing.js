import { useContext, useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import CreateMissionPanel from "./CreateMissionPanel";
import LoadingPage from "./LoadingPage";
import Rockets from "./Rockets";
import "../styles/Routing.scss";
import Navigation from "./Navigation";
import Crew from "./Crew";
import CreateCrewMember from "./CreateCrewMember";
import LaunchPad from "./LaunchPad";
import CreateLaunchPad from "./CreateLaunchPad";
import { CSSTransition, TransitionGroup } from "react-transition-group";
const Routing = () => {
  const { rockets, launch, crew, launchPad } = useContext(AppContext);
  const location = useLocation(); 
  const { setIsFullyLoaded } = useContext(AppContext)
  const [firstLoad,setFirstLoad] = useState(true);
  useEffect(() => {
    if (firstLoad) {
      setFirstLoad(false)
    } else {
      console.log(firstLoad)
      setIsFullyLoaded(false)
    }
  }, [location.pathname.split('/')[1]])
  useEffect(() => {
    setTimeout(()=>setIsFullyLoaded(true), 1500);
  }, [location.pathname.split('/')[1]])
  return (
    <>
      <TransitionGroup component="div" className="App">
        <CSSTransition
          key={location.pathname.split('/')[1]}
          timeout={2000}
          classNames="pageSlider"
          mountOnEnter={true}
          unmountOnExit={true}>
      <Routes>
            {launch.isLoaded ? (
              <Route
                path="/"
                element={
                  <CreateMissionPanel
                    data={
                      launch.data[
                        launch.data.find((data) => data.upcoming === true)
                          .flight_number - 2
                      ]
                    }
                  />
                }
              />
            ) : (
              <Route path="*" element={<LoadingPage />} />
              
            )}
            ;
            {launch.isLoaded ? (
              launch.data.map((data) => (
                <Route
                  key={data.id}
                  path={`/${data.flight_number}`}
                  element={<CreateMissionPanel data={data} />}
                />
              ))
            ) : (
              <Route path="*" element={<LoadingPage />} />
            )}
            {rockets.isLoaded ? (
              <Route path="/Rockets" element={<Rockets />} />
            ) : (
              <Route path="*" element={<LoadingPage />} />
            )}
            {launch.isLoaded ? (
              <Route path="/Navigation" element={<Navigation />} />
            ) : (
              <Route path="*" element={<LoadingPage />} />
            )}
            {crew.isLoaded ? (
              <Route path="/Crew" element={<Crew />} />
            ) : (
              <Route path="*" element={<LoadingPage />} />
            )}
            {crew.isLoaded ? (
              crew.data.map((data) => (
                <Route
                  key={data.id}
                  path={`/Crew/${data.id}`}
                  element={<CreateCrewMember data={data} />}
                />
              ))
            ) : (
              <Route path="*" element={<LoadingPage />} />
            )}
            {launchPad.isLoaded ? (
              <Route path="/LaunchPad" element={<LaunchPad />} />
            ) : (
              <Route path="*" element={<LoadingPage />} />
            )}
            {launchPad.isLoaded ? (
              launchPad.data.map((data) => (
                <Route
                  key={data.name}
                  path={`/LaunchPad/${data.name
                    .replace(/\s/g, "")
                    .toLowerCase()}`}
                  element={<CreateLaunchPad data={data} />}
                />
              ))
            ) : (
                <Route path="*" element={<LoadingPage />} />
            )}
        </Routes>
        </CSSTransition>
        </TransitionGroup>
    </>
  );
};

export default Routing;
