import { Button } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Navigation.scss";
import theme from "../theme/AppTheme";
const Navigation = () => {
  const { launch } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <><Button theme={theme} color='primary' variant="contained" onClick={() => navigate(-1)}>go back</Button><div className="crew"></div><nav className="nav">
      {launch.data.map((el) => (
        <Link to={`/${el.flight_number}`} className="navItem">
          {console.log(el)}
          <img src={el.links.patch.small} alt="" />
          <h3>{el.name}</h3>
          <h3>flight number: {el.flight_number}</h3>
        </Link>
      ))}
    </nav></>
  );
};

export default Navigation;
