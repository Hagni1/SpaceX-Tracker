import { Grid, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/CreateLaunchPad.scss";
const CreateLaunchPad = ({ data }) => {
  const { launch } = useContext(AppContext);
  const navigate = useNavigate();
  const apiKey = "c8ab76a9317a32d5fb053b75f54e1d98";
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState({
    data: [],
    isLoaded: false,
  });
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${data.latitude}&lon=${data.longitude}&appid=${apiKey}&units=${units}`
    )
      .then((response) => response.json())
      .then((data) => setWeather({ data, isLoaded: true }));
  }, [units]);
  console.log(weather);
  return (
    <>
      <button class="createCrewMemberButton" onClick={() => navigate(-1)}>
        go back
      </button>
      <Grid
        className="gridContainer"
        container
        spacing={{ xs: 4, sm: 4, md: 3 }}
        columns={{ sm: 6, md: 12, lg: 18 }}
      >
        <Grid item sm={6} className="gridImg">
          <img src={data.images.large} alt={data.name} />
        </Grid>
        <Grid item sm={6} className="gridDescript">
          <h1>{data.full_name}</h1>
          <h3>{data.details}</h3>
          <h3>Region: {data.region}</h3>
          <h3>Status: {data.status}</h3>
          <h3>Launch attempts: {data.launch_attempts}</h3>
          <h3>Launch successes: {data.launch_successes}</h3>
          <h3>Time zone: {data.timezone}</h3>
          <a target="_blank" rel="noopener noreferrer" href={data.wikipedia}>
            <button>Wikipedia</button>
          </a>
        </Grid>
        <Grid item xs={6} sm={12} lg={6} className="gridDescript">
          <h2>Current weather</h2>
          <button onClick={() => setUnits("standard")}>F°</button>
          <button onClick={() => setUnits("metric")}>C°</button>
          {weather.isLoaded && (
            <>
              <h3>Temperature: {weather.data.main.temp}</h3>
              <h3>Temperature max: {weather.data.main.temp_max}</h3>
              <h3>Temperature min: {weather.data.main.temp_min}</h3>
              <h3>pressure: {weather.data.main.pressure}</h3>
              <h3>humidity : {weather.data.main.humidity}</h3>
            </>
          )}
        </Grid>
        <Grid item xs={6} sm={12} lg={18}>
          <h1>Launches</h1>
          {data.launches.length > 0 && (
            <div className="gridLaunches">
              {launch.data
                .filter((item) => data.launches.includes(item.id))
                .map((item) => (
                    <Link key={item.flight_number} className={'gridLaunchesItem'} to={`/${item.flight_number}` } >
                      {item.date_local.slice(0, 10)} - {item.name}{" "}
                    </Link>
                ))}
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default CreateLaunchPad;
