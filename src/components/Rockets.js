import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import "../styles/Rockets.scss";
// import CreateRocket from "./CreateRocket";
const Rockets = () => {
  const { rockets } = useContext(AppContext);
  console.log(rockets.datas);
  return (
    // <div>{rockets.isLoaded && <CreateRocket data={rockets.datas[0]} />}</div>
    <div className="RocketsWrapper">
      <h1>Rockets size comparison</h1>
      <section className="Rockets">
        <article className="falcon1">
          <Link to={"/falcon1"}>
            <img src={require("../img/falcon1.png")} alt="falcon1" />
            <h3>Falcon 1</h3>
          </Link>
        </article>
        <article className="falcon9">
          <Link to={"/falcon9"}>
          <img src={require("../img/falcon9.png")} alt="falcon9" />
          <h3>Falcon 9</h3>
        </Link>
        </article>
        <article className="falconHeavy">
          <Link to={"/falconheavy"}>
          <img src={require("../img/falconheavy.png")} alt="falcon Heavy" />
          <h3>Falcon Heavy</h3>
        </Link>
        </article>
        <article className="starship">
          <Link to={"/starship"}>
          <img src={require("../img/starship.png")} alt="starship" />
          <h3>SpaceShip</h3>
        </Link>
        </article>
      </section>
    </div>
  );
};

export default Rockets;
