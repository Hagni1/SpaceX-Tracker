import { useState } from "react";
import '../styles/Video.scss'
const Video = ({data, isExtended, setIsExtended}) => {
    const [videoActive, setVideoActive] = useState(false);
    return ( 
        <section
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
      </section>
     );
}
 
export default Video;