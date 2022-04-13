import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import '../styles/LeftBar.scss'
import theme from "../theme/AppTheme";

const LeftBar = ({ data, isExtended, setIsExtended }) => {
  const {setIsFullyLoaded} = useContext(AppContext)
  const { rockets, launchPad, payLoads, crew, setSelected } = useContext(AppContext);
    return ( 
        <section className={`lastestLaunch ${isExtended ? "isExtended": ''}`}>
        <Button
          theme={theme} color='primary'
          className={`lastestLaunchButton ${isExtended ? "isExtendedButton":''}`}
          onClick={() => setIsExtended(!isExtended)}
        >
          {isExtended ? "<" : ">"}
        </Button>
        <span>
        <img src={data.links.patch.small} alt="" />
          <h3>Mision name:</h3>
          <p>{data.name}</p>
        </span>
        <span>
          <h3>Rocket:</h3>
          <p>
            <Link to='/Rockets' onClick={()=>setSelected(rockets.data.filter((el)=>el.id===data.rocket)[0].name)}>
              {rockets.isLoaded &&
                <Button theme={theme} color='primary'>
              {rockets.data.filter((el) => el.id === data.rocket)[0].name}
                </Button>}
              </Link>
          </p>
      <Button theme={theme} color='primary'><Link to='/Rockets'>Check Rockets</Link></Button>
        </span>
        <span>
          <h3>Flight number:</h3>
          <p>{data.flight_number}</p>
          <Link to='/Navigation'><Button theme={theme} color='primary'>Check other mission</Button></Link>
        </span>
        <span>
          <h3>Date (UTC): </h3>
          <p>
            {data.date_utc.slice(0, 10)} {data.date_utc.slice(11, 16)}
          </p>
        </span>
        {isExtended && (
          <>
            <span className="isExtendedOpacity">
              {crew.isLoaded && (
                <>

                  <h3>Crew:</h3>
                    {crew.data.filter((item) =>
                      data.crew
                        .map((item) => item.crew)
                        .some((crew) => crew === item.id)
                    ).length > 0
                      ? crew.data
                          .filter((item) =>
                            data.crew
                              .map((item) => item.crew)
                              .some((crew) => crew === item.id)
                          )
                          .map((item) =><Link to={`/Crew/${item.id}`}> <p key={item.name}><Button theme={theme} color='primary'>{item.name}</Button></p> </Link>)
                      : "unmanned"}
                       <Link to='/Crew'><Button onClick={() => setIsFullyLoaded(false)}  theme={theme} color='primary'>Check All Crew Members</Button></Link>
                </>
              )}
            </span>

            <span className="isExtendedOpacity">
              <h3>Payload:</h3>
              {payLoads.isLoaded && (
                <p>
                  {
                    payLoads.data.filter((el) => el.id === data.payloads[0])[0]
                      .type
                  }
                </p>
              )}
            </span>
            <span className="isExtendedOpacity">
              <h3>LaunchPad:</h3>
              {launchPad.isLoaded && (
                <p>
                  {
                    <Link to={`/LaunchPad/${ launchPad.data.filter((el) => el.id === data.launchpad)[0].name.replace(/\s/g, "").toLowerCase()}`}> <p> <Button theme={theme} color='primary'>{launchPad.data.filter((el) => el.id === data.launchpad)[0]
                  .name}</Button> </p> </Link>
                  }
                </p>
              )}
              <Link to='/LaunchPad'><Button theme={theme} color='primary'>Check LaunchPads</Button></Link>
            </span>
            <span className="isExtendedOpacity">
              <h3>Region:</h3>
              {launchPad.isLoaded && (
                <p>
                  {
                    launchPad.data.filter((el) => el.id === data.launchpad)[0]
                      .region
                  }
                </p>
              )}
            </span>
            <span className="isExtendedOpacity">
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