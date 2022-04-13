import { Button } from "@mui/material";
import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import '../styles/LaunchPad.scss'
import theme from "../theme/AppTheme";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const LaunchPad = () => {
    const { launchPad } = useContext(AppContext);
    const navigate = useNavigate();

    return ( 
        <div>
            <Button theme={theme} color='primary' variant="contained" onClick={() => navigate(-1)}><ArrowBackIcon className='arrow'/></Button>
            <div className="launchPad">
        {launchPad.data.map((el) => (
            <Link
                to={`/launchPad/${el.name.replace(/\s/g, "").toLowerCase()}`}
                className="launchPadItem"
            >
                <img src={el.images.large} alt="portret" />
                <h3>{el.name}</h3>
                <h3>{el.region}</h3>
            </Link>
        ))}
            </div>
        </div>
     );
}
 
export default LaunchPad;