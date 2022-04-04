import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Home.scss";
const Home = () => {
  const { rockets, launchPad, payLoads, crew } = useContext(AppContext);
  const [videoActive, setVideoActive] = useState(false);
  const [isExtended, setIsExtended] = useState(false);
  const [lastest, setLastest] = useState({
    data: [],
    isLoaded: false,
  });
  useEffect(() => {
    fetch("https://api.spacexdata.com/v5/launches/latest")
      .then((response) => response.json())
      .then((data) => setLastest({ data, isLoaded: true }));
  }, []);
  console.log(lastest.data);
  return (
    <div className="lastestLaunchWrapper">
      {lastest.isLoaded ? (
        <section
          className={isExtended ? "lastestLaunch isExtended" : "lastestLaunch"}
        >
          <button
            className={
              isExtended
                ? "lastestLaunchButton isExtendedButton"
                : "lastestLaunchButton"
            }
            onClick={() => setIsExtended(!isExtended)}
          >
            {isExtended ? "<" : ">"}
          </button>
          <img src={lastest.data.links.patch.small} alt="" />
          <h2>Lastest launch</h2>
          <span>
            <h3>Mision name:</h3>
            <p>{lastest.data.name}</p>
          </span>
          <span>
            <h3>Rocket:</h3>
            <p>
              {rockets.isLoaded &&
                rockets.datas.filter((el) => el.id === lastest.data.rocket)[0]
                  .name}
            </p>
          </span>
          <span>
            <h3>Flight number:</h3>
            <p>{lastest.data.flight_number}</p>
          </span>
          <span>
            <h3>Date (UTC): </h3>
            <p>
              {lastest.data.date_utc.slice(0, 10)}{" "}
              {lastest.data.date_utc.slice(11, 16)}
            </p>
          </span>
          {isExtended && (
            <>
              <span>
                {crew.isLoaded && (
                  <>
                    <h3>Crew:</h3>
                    <p>
                      {crew.datas.filter(
                        (el) => el.id === lastest.data.crew.includes(el.id)
                      ).length > 0
                        ? crew.datas
                            .filter(
                              (el) =>
                                el.id === lastest.data.crew.includes(el.id)
                            )
                            .map((item) => item.name)
                        : "unmanned"}
                    </p>
                  </>
                )}
              </span>
              <span>
                <h3>Payload:</h3>
                {payLoads.isLoaded && (
                  <p>
                    {
                      payLoads.datas.filter(
                        (el) => el.id === lastest.data.payloads[0]
                      )[0].type
                    }
                  </p>
                )}
              </span>
              <span>
                <h3>LaunchPad:</h3>
                {launchPad.isLoaded && (
                  <p>
                    {
                      launchPad.datas.filter(
                        (el) => el.id === lastest.data.launchpad
                      )[0].name
                    }
                  </p>
                )}
              </span>
              <span>
                <h3>Region:</h3>
                {launchPad.isLoaded && (
                  <p>
                    {
                      launchPad.datas.filter(
                        (el) => el.id === lastest.data.launchpad
                      )[0].region
                    }
                  </p>
                )}
                  </span>
                <span>

                {lastest.isLoaded && (
                  <>
                    <h3>Mission details:</h3>
                    <p>
                      {lastest.data.details
                        ? lastest.data.details
                        : "No details have been provided for this mission"}
                    </p>
                  </>
                )}
              </span>
            </>
          )}
        </section>
      ) : null}
      {lastest.isLoaded ? (
        <div
          className={
            isExtended
              ? "lastestVideoWrapper isExtendedVideo"
              : "lastestVideoWrapper"
          }
        >
          <iframe
            className="lastestVideo"
            title="lastest"
            width="500px"
            height="200px"
            src={`https://www.youtube.com/embed/${lastest.data.links.youtube_id}`}
          ></iframe>{" "}
          :{" "}
          <div className="videoImgWrapper">
            <img
              className={videoActive ? "videoImg hidden" : "videoImg"}
              src={require("../img/video.jpg")}
              alt="video img"
            />
            <h2
              className={videoActive ? " hidden" : ""}
              onClick={() => setVideoActive(true)}
            >
              Watch video of last mission
            </h2>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Home;
