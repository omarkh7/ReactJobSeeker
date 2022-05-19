
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import '../Css/banner.css';
import banner from '../media/banner.jpg';
function Home() {


  return (

    <div>
      <Box sx={{ flexGrow: 1 }}>
        <img src={banner} className='banner1' alt="Banner" />
      </Box>
      <Typography variant="h3" className='row'>Getting hired just got easy</Typography>


     


      

    </div>

  );
}

export default Home;
