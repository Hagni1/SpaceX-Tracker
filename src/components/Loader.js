import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/Loader.scss'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
const Loader = () => {
    const {isFullyLoaded} = useContext(AppContext)
 
    return ( 
        <div className={`loader ${isFullyLoaded? 'hiddenLoader':'activeLoader'}`}>
            <RocketLaunchIcon className='loaderRocketIcon' sx={{
                color: 'white',
                fontSize: '25vh'
            }} />
        </div>
        // <div></div>
        
     );
}
 
export default Loader;