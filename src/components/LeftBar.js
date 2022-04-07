import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import '../styles/LeftBar.scss'

const LeftBar = ({data, isExtended, setIsExtended}) => {
    const { rockets, launchPad, payLoads, crew } = useContext(AppContext);
    return ( 
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
     );
}
 
export default LeftBar;