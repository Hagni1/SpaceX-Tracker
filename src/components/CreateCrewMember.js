import { Button, Grid, Table, TableCell, TableRow } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/CreateCrewMember.scss";
import theme from "../theme/AppTheme";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const CreateCrewMember = ({ data }) => {
  const { launch } = useContext(AppContext);
  console.log(data);
  const navigate = useNavigate();
  return (
    <div className="CreateCrewMemberWrapper">
      <Button
        className="Button"
        theme={theme}
        color="primary"
        variant="contained"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className='arrow'/>
      </Button>
      <Grid
        className="gridContainer"
        container
        spacing={{ xs: 4, sm: 4, md: 3 }}
        columns={{ sm: 6, md: 18 }}
      >
        <Grid item sm={6} className="gridImg">
          <img src={data.image} alt={data.name} />
        </Grid>
        <Grid item sm={6} className="gridDescript">
        <Table>
            <TableRow>
              <TableCell>Full name:</TableCell>
              <TableCell>{data.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Status:</TableCell>
              <TableCell>{data.status}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Agency:</TableCell>
              <TableCell>{data.agency}</TableCell>
            </TableRow>
        </Table>
          <a target="_blank" rel="noopener noreferrer" href={data.wikipedia}>
            <button>Wikipedia</button>
          </a>
        </Grid>
        <Grid item sm={6} className="gridLaunches">
          <h1>Launches</h1>
          <Table>
            {data.launches.length > 0 &&
            launch.data
              .filter((item) => data.launches.includes(item.id))
              .map((item) => (
                  <Link key={item.flight_number} to={`/${item.flight_number}`}>
                <TableRow>
                    <TableCell>{item.date_local.slice(0, 10)}</TableCell>
                    <TableCell>{item.name}</TableCell>
                </TableRow>
                  </Link>
              ))}
          </Table>
  
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateCrewMember;
