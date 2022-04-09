import {  Grid } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/CreateCrewMember.scss";
const CreateCrewMember = ({ data }) => {
  const { launch } = useContext(AppContext);
    console.log(data);
    const navigate = useNavigate();
  return (
      <><button class='createCrewMemberButton' onClick={() => navigate(-1)}>go back</button><Grid
          className="gridContainer"
          container
          spacing={{ xs: 4, sm: 4, md: 3 }}
          columns={{ sm: 6, md: 18 }}
      >
          <Grid item sm={6} className="gridImg">
              <img src={data.image} alt={data.name} />
          </Grid>
          <Grid item sm={6} className="gridDescript">
              <h1>{data.name}</h1>
              <h3>Agency: {data.agency}</h3>
              <h3>Status: {data.status}</h3>
              <a target="_blank" rel="noopener noreferrer" href={data.wikipedia}>
                  <button>Wikipedia</button>
              </a>
          </Grid>
          <Grid item sm={6} className="gridLaunches">
              <h1>Launches</h1>
              {data.launches.length > 0 &&
                  launch.data
                      .filter((item) => data.launches.includes(item.id))
                      .map((item) => (
                          <h3>
                               <Link key={item.flight_number}  to={`/${item.flight_number}` }>
                                  {item.date_local.slice(0, 10)} - {item.name}{" "}
                              </Link>
                          </h3>
                      ))}
          </Grid>
      </Grid></>
  );
};

export default CreateCrewMember;
