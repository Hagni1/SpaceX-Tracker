import { CircularProgress } from "@mui/material";
import "../styles/LoadingPage.scss";
const Home = () => {

  return (
    <div className="loading">
      <CircularProgress size={100} sx={{fontSize:'50vh', width:'50vh'}}/>
    </div>

  )
}
export default Home;
