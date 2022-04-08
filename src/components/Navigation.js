import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Navigation.scss";
const Navigation = () => {
  const { launch } = useContext(AppContext);
  return (
    <nav className="nav">
      {launch.data.map((el) => (
        <Link to={`/${el.flight_number}`} className="navItem">
            {console.log(el)}
            <img src={el.links.patch.small} alt="" />
            <h3>{el.name}</h3>
            <h3>flight number: {el.flight_number}</h3>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
