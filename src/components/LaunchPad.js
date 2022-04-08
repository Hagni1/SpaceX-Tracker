import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import '../styles/LaunchPad.scss'
const LaunchPad = () => {
    const { launchPad } = useContext(AppContext);
    const navigate = useNavigate();
    console.log(launchPad.data)
    return ( 
        <><button className="launchPadButton" onClick={() => navigate(-1)}>go back</button><div className="launchPad">
        {launchPad.data.map((el) => (
            <Link
                to={`/launchPad/${el.name.replace(/\s/g, "").toLowerCase()}`}
                className="launchPadItem"
            >
                {console.log(el)}
                <img src={el.images.large} alt="portret" />
                <h3>{el.name}</h3>
                <h3>{el.region}</h3>
            </Link>
        ))}
    </div></>
     );
}
 
export default LaunchPad;