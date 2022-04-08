import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Rockets.scss";
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
      <button className={selectedRocket && "headerUp"} onClick={() => navigate(-1)}>go back</button>
        <h1 className={selectedRocket && "headerUp"}>Rockets size comparison</h1>
        <section className="Rockets">
          {rockets.datas.map((data) => (
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
      
           {rockets.datas.map((data) => (
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
