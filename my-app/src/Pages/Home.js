
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import '../Css/banner.css';
import Development from "../Pages/Cards/Development";
import IT from "../Pages/Cards/IT";
import Accounting from "../Pages/Cards/Accounting";
import HR from "../Pages/Cards/HR";
import Support from "../Pages/Cards/Support";
import BusinessAnalyst from "../Pages/Cards/BusinessAnalyst";
import Grid from '@material-ui/core/Grid';
import banner from '../media/banner.jpg';
function Home() {


  return (

    <div>
      <Box sx={{ flexGrow: 1 }}>
        <img src={banner} className='banner1' alt="Banner" />
      </Box>
      <br></br>
      <Typography variant="h3" className='row'>Getting hired just got easy</Typography>

<div className='row1'>
      <Grid container>
     <Grid item xs={4}> 
    <Development/>
     </Grid>
     <Grid item xs={4}>
     <IT/>
     </Grid>
     <Grid item xs={4}>
     <Accounting/>
     </Grid>
</Grid>
<br></br>
<br></br>
<Grid container>
     <Grid item xs={4}> 
    <HR/>
     </Grid>
     <Grid item xs={4}>
     <Support/>
     </Grid>
     <Grid item xs={4}>
     <BusinessAnalyst/>
     </Grid>
</Grid>
     

</div>
      

    </div>

  );
}

export default Home;
