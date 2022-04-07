import "../styles/CreateRocket.scss";

const CreateRocket = ({ data,id,active,setSelected}) => {
  return (
    <div className={`CreateRocketWrapper ${active}`} id={id}>
      <div className="CreateRocket" >
        <span />
        <img onClick={()=>setSelected(false)} src={require(`../img/${(data.name).replace(/\s/g, "").toLowerCase()}.png`)} alt="falcon1" />
        <div className="rocketDescript">
          <h1>{data.name}</h1>
          <h3>{data.description}</h3>
          <h4>Active: {data.active ? "true" : "false"}</h4>
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
          <h2 className="clickToGoBack"> &lt;- click on rocket to go back</h2>
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
