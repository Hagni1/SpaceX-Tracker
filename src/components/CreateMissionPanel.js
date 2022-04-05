import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/CreateMissionPanel.scss";
const Home = ({ data }) => {
  const { rockets, launchPad, payLoads, crew } = useContext(AppContext);
  const [videoActive, setVideoActive] = useState(false);
  const [isExtended, setIsExtended] = useState(false);

  return (
    <div className="lastestLaunchWrapper">
      <section className={`lastestLaunch ${isExtended && "isExtended"}`}>
        <button
          className={`lastestLaunchButton ${isExtended && "isExtendedButton"}`}
          onClick={() => setIsExtended(!isExtended)}
        >
          {isExtended ? "<" : ">"}
        </button>
        <img src={data.links.patch.small} alt="" />
        <span>
          <h3>Mision name:</h3>
          <p>{data.name}</p>
        </span>
        <span>
          <h3>Rocket:</h3>
          <p>
            {rockets.isLoaded &&
              rockets.datas.filter((el) => el.id === data.rocket)[0].name}
          </p>
        </span>
        <span>
          <h3>Flight number:</h3>
          <p>{data.flight_number}</p>
        </span>
        <span>
          <h3>Date (UTC): </h3>
          <p>
            {data.date_utc.slice(0, 10)} {data.date_utc.slice(11, 16)}
          </p>
        </span>
        {isExtended && (
          <>
            <span>
              {crew.isLoaded && (
                <>
                  <h3>Crew:</h3>
                  <span>
                    {crew.datas.filter((item) =>
                      data.crew
                        .map((item) => item.crew)
                        .some((crew) => crew === item.id)
                    ).length > 0
                      ? crew.datas
                          .filter((item) =>
                            data.crew
                              .map((item) => item.crew)
                              .some((crew) => crew === item.id)
                          )
                          .map((item) => <p key={item.name}>{item.name}</p>)
                      : "unmanned"}
                  </span>
                </>
              )}
            </span>

            <span>
              <h3>Payload:</h3>
              {payLoads.isLoaded && (
                <p>
                  {
                    payLoads.datas.filter((el) => el.id === data.payloads[0])[0]
                      .type
                  }
                </p>
              )}
            </span>
            <span>
              <h3>LaunchPad:</h3>
              {launchPad.isLoaded && (
                <p>
                  {
                    launchPad.datas.filter((el) => el.id === data.launchpad)[0]
                      .name
                  }
                </p>
              )}
            </span>
            <span>
              <h3>Region:</h3>
              {launchPad.isLoaded && (
                <p>
                  {
                    launchPad.datas.filter((el) => el.id === data.launchpad)[0]
                      .region
                  }
                </p>
              )}
            </span>
            <span>
              <>
                <h3>Mission details:</h3>
                <p className="missionParagraph">
                  {data.details
                    ? data.details
                    : "No details have been provided for this mission"}
                </p>
              </>
            </span>
          </>
        )}
      </section>

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
          src={`https://www.youtube.com/embed/${data.links.youtube_id}`}
        ></iframe>{" "}
        :{" "}
        <div className="videoImgWrapper">
          <span
            className={
              videoActive ? "videoBackground hidden" : "videoBackground"
            }
          />
          <img
            className={videoActive ? "videoImg hidden" : "videoImg"}
            src={
              data.upcoming
                ? require("../img/pending.jpg")
                : require("../img/video.jpg")
            }
            alt="video img"
          />
          {data.upcoming ? (
            <>
              <h2>
                Launch Pending...{" "}
                <p>
                  comeback to us {data.date_local.slice(0, 10)}{" "}
                  {data.date_local.slice(11, 16)}
                  <br />
                  (your local time)
                </p>
              </h2>
            </>
          ) : (
            <h2
              className={videoActive ? " hidden" : ""}
              onClick={() => setVideoActive(true)}
            >
              Watch video of mission
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
