import { Button, Grid, Table, TableCell, TableRow } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/CreateLaunchPad.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import theme from "../theme/AppTheme";
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

  return (
    <div className="createLaunchPadWrapper">
      <Button
        className="Button"
        theme={theme}
        color="primary"
        variant="contained"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="arrow" />
      </Button>

      <Grid
        className="gridLaunchContainer"
        container
        spacing={{ xs: 4, sm: 4, md: 3 }}
        columns={{ sm: 6, md: 12, lg: 18 }}
      >
        <Grid item sm={6} className="gridImg">
          <img src={data.images.large} alt={data.name} />
        </Grid>
        <Grid item sm={6} className="gridDescript"   >
          <Table>
            <TableRow>
              <TableCell>Full name:</TableCell>
              <TableCell>{data.full_name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Details:</TableCell>
              <TableCell>{data.details}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Region:</TableCell>
              <TableCell>{data.region}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status:</TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Launch attempts:</TableCell>
              <TableCell>{data.launch_attempts}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Launch successes:</TableCell>
              <TableCell>{data.launch_successes}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Time zone:</TableCell>
              <TableCell>{data.timezone}</TableCell>
            </TableRow>
        </Table>
          <a target="_blank" rel="noopener noreferrer" href={data.wikipedia}>
          <Button sx={{'marginTop':'5%'}} theme={theme} variant="outlined">Wikipedia</Button>
          </a>
        </Grid>
        <Grid item xs={6} sm={12} lg={6}>
          <h2>Current weather</h2>
          <button onClick={() => setUnits("standard")}>F°</button>
          <button onClick={() => setUnits("metric")}>C°</button>
          {weather.isLoaded && (
            <>
               <Table>
            <TableRow>
              <TableCell>Temperature:</TableCell>
              <TableCell>{weather.data.main.temp}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Temperature max:</TableCell>
              <TableCell>{weather.data.main.temp_max}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Temperature min:</TableCell>
              <TableCell>{weather.data.main.temp_min}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>pressure:</TableCell>
              <TableCell>{weather.data.main.pressure}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>humidity:</TableCell>
              <TableCell>{weather.data.main.humidity}</TableCell>
            </TableRow>

        </Table>
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
                  <Link
                    key={item.flight_number}
                    className={"gridLaunchesItem"}
                    to={`/${item.flight_number}`}
                  >
                    {item.date_local.slice(0, 10)} - {item.name}{" "}
                  </Link>
                ))}
            </div>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateLaunchPad;
