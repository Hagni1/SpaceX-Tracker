import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/Rockets.scss";
import CreateRocket from "./CreateRocket";
const Rockets = () => {
  const { rockets } = useContext(AppContext);
  const [selected, setSelected] = useState(false);
  return (
    <>
      <div className="RocketsWrapper">
        <h1 className={selected && 'headerUp'}>Rockets size comparison</h1>
        <section className="Rockets">
          {rockets.datas.map((data) => (
            <article
              className={
                `${data.name.replace(/\s/g, "").toLowerCase()} ${selected && (data.name===selected? "active": 'inActive')}`}
              onClick={() =>setSelected(data.name)
              }
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
        {rockets.isLoaded
          ? rockets.datas.map((data) => (
              <CreateRocket setSelected={setSelected} active={data.name===selected? "pageUp": ''} key={data.name} id={data.name} data={data} />
            ))
          : null}
      </div>
    </>
  );
};

export default Rockets;
