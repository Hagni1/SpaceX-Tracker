import { Button, Table, TableCell, TableRow } from "@mui/material";
import "../styles/CreateRocket.scss";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import theme from "../theme/AppTheme";
const CreateRocket = ({ data,id,active,setSelected}) => {
  return (
    <div className={`CreateRocketWrapper ${active}`} id={id}>
      <div className="CreateRocket" >
        <h2 className="clickToGoBack"> click on rocket to go back <br/> <ArrowDownwardIcon className="arrowDown"/></h2>
        <img className={(data.name).replace(/\s/g, "").toLowerCase()} onClick={()=>setSelected(false)} src={require(`../img/${(data.name).replace(/\s/g, "").toLowerCase()}.png`)} alt="rocket" />
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
                    <TableCell>Cost per launch</TableCell>
                    <TableCell>{(data.cost_per_launch)} $</TableCell>
                </TableRow>
          </Table>
          <a target="_blank" rel="noopener noreferrer" href={data.wikipedia}>
            <Button sx={{'margin-top':'5%'}} theme={theme} variant="outlined">Wikipedia</Button>
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
