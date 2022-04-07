import { useState } from "react";
import "../styles/CreateMissionPanel.scss";
import LeftBar from "./LeftBar";
import Video from "./Video";
const Home = ({ data }) => {
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="lastestLaunchWrapper">
      <LeftBar isExtended={isExtended} setIsExtended={setIsExtended} data={data} />
      <Video isExtended={isExtended} setIsExtended={setIsExtended} data={data}/>
    </div>
  );
};

export default Home;
