import { Button } from "@mui/material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Crew.scss";
import theme from "../theme/AppTheme";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const Crew = () => {
    const { crew } = useContext(AppContext);
    const navigate = useNavigate();
  return (
          <><Button theme={theme} color='primary' variant="contained" onClick={() => navigate(-1)}><ArrowBackIcon className='arrow'/></Button><div className="crew">
          {crew.data.map((el) => (
              <Link
                  to={`/Crew/${el.id}`}
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
