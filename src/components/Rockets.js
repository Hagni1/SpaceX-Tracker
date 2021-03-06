import { Button } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Rockets.scss";
import theme from "../theme/AppTheme";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateRocket from "./CreateRocket";
const Rockets = () => {
  const { rockets,selected,setSelected } = useContext(AppContext);
  const [selectedRocket, setSelectedRocket] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    selected ? setSelectedRocket(selected) : setSelectedRocket(false);
    setSelected(false)
  }, []);

  return (
    <>
      <div className="RocketsWrapper">
      <Button className={`Button ${selectedRocket && "headerUp"}`} theme={theme} color='primary' variant="contained" onClick={() => navigate(-1)}><ArrowBackIcon className='arrow'/></Button>
        <h1 className={selectedRocket && "headerUp"}>Rockets size comparison</h1>
        <section className="Rockets">
          {rockets.data.map((data) => (
            <article
              className={`${data.name.replace(/\s/g, "").toLowerCase()} ${
                selectedRocket && (data.name === selectedRocket ? "active" : "inActive")
              }`}
              onClick={() => setSelectedRocket(data.name)}
            >
              <img
                src={require(`../img/${`${data.name
                  .replace(/\s/g, "")
                  .toLowerCase()}`}.png`)}
                alt={data.name.replace(/\s/g, "").toLowerCase()}
              />
              <h3>{data.name}</h3>
            </article>
          ))}
        </section>
      </div>
      <div className="pagesUnderRockets">
      
           {rockets.data.map((data) => (
              <CreateRocket
                setSelected={setSelectedRocket}
                active={data.name === selectedRocket && "pageUp"}
                key={data.name.replace(/\s/g, "").toLowerCase()}
                id={data.name}
                data={data}
              />
            ))}
      </div>
    </>
  );
};

export default Rockets;
