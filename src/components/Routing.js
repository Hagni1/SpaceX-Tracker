import { Route, Routes } from "react-router-dom";
import Failures from "./Failures";
import Home from "./Home";
import Recent from "./Recent";
import Upcoming from "./Upcoming";
const Routing = () => {
  return (
    <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/Upcoming" element={<Upcoming />} />
          <Route path="/Recent" element={<Recent />} />
          <Route path="/Failures" element={<Failures />} />
    </Routes>
  );
};

export default Routing;
