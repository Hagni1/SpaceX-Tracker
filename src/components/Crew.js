import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Crew.scss";
const Crew = () => {
    const { crew } = useContext(AppContext);
    const navigate = useNavigate();
  return (
          <><button onClick={() => navigate(-1)}>go back</button><div className="crew">
          {crew.data.map((el) => (
              <Link
                  to={`/Crew/${el.name.replace(/\s/g, "").toLowerCase()}`}
                  className="crewItem"
              >
                  {console.log(el)}
                  <img src={el.image} alt="portret" />
                  <h3>{el.name}</h3>
              </Link>
          ))}
      </div></>
  );
};

export default Crew;
