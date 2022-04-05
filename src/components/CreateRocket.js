import "../styles/CreateRocket.scss";

const CreateRocket = ({ data }) => {
  return (
    <div className="CreateRocketWrapper">
      <div className="CreateRocket">
        <img src={require(`../img/${(data.name).replace(/\s/g, "").toLowerCase()}.png`)} alt="falcon1" />
        <div className="rocketDescript">
          <h1>{data.name}</h1>
          <h3>{data.description}</h3>
          <h4>Active: {data.active ? "true" : "Retired"}</h4>
          <h4>Country : {data.country}</h4>
          <h4>First flight: {data.first_flight}</h4>
          <h4>
            Height: {data.height.meters} m / {data.height.feet} ft
          </h4>
          <h4>
            Diameter: {data.diameter.meters} m / {data.diameter.feet} ft
          </h4>
          <h4>
            Mass: {data.mass.kg} kg / {data.mass.lb} lb
          </h4>
          <h4>Launch cost: {(data.cost_per_launch)} $</h4>
          <a target="_blank" rel="noopener noreferrer" href={data.wikipedia}>
            <button>Wikipedia</button>
          </a>
        </div>
      </div>
      <div className="rocketGallery">
        <img src={data.flickr_images[0]} alt={`${data.name}`} />
        <img src={data.flickr_images[1]} alt={`${data.name}`} />
      </div>
    </div>
  );
};

export default CreateRocket;
