import { Table, TableCell, TableRow } from "@mui/material";
import "../styles/CreateRocket.scss";

const CreateRocket = ({ data,id,active,setSelected}) => {
  return (
    <div className={`CreateRocketWrapper ${active}`} id={id}>
      <div className="CreateRocket" >
        <span />
        <img onClick={()=>setSelected(false)} src={require(`../img/${(data.name).replace(/\s/g, "").toLowerCase()}.png`)} alt="falcon1" />
        <div className="rocketDescript">
          <h1>{data.name}</h1>
        <Table>
                <TableRow>
                    <TableCell>Descritption</TableCell>
                    <TableCell>{data.description}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Active</TableCell>
                    <TableCell>{data.active ? "true" : "false"}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Country</TableCell>
                    <TableCell>{data.country}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>First flight</TableCell>
                    <TableCell>{data.first_flight}</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Height</TableCell>
                    <TableCell>{data.height.meters} m / {data.height.feet} ft</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Diameter</TableCell>
                    <TableCell>{data.diameter.meters} m / {data.diameter.feet} ft</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Diameter</TableCell>
                    <TableCell>{data.diameter.meters} m / {data.diameter.feet} ft</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Mass</TableCell>
                    <TableCell>{data.mass.kg} kg / {data.mass.lb} lb</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Launch cost</TableCell>
                    <TableCell>{(data.cost_per_launch)} $</TableCell>
                </TableRow>
          </Table>
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
