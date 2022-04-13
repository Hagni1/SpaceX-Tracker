import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Navigation.scss";
import theme from "../theme/AppTheme";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Navigation = () => {
  const { launch } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="Button"
        theme={theme}
        color="primary"
        variant="contained"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon className="arrow" />
      </Button>
      <div className="crew"></div>
      <nav className="nav">
        {launch.data.map((el) => (
          <Link key={el.flight_number} to={`/${el.flight_number}`} className="navItem">
            <img src={el.links.patch.small} alt="" />
            <h3>{el.name}</h3>
            <h3>flight number: {el.flight_number}</h3>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navigation;
