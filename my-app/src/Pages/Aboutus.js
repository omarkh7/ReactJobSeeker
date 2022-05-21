import Box from '@mui/material/Box';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function aboutus() {
    return (
        <div className='row'>
        <Box sx={{ flexGrow: 1 }}>
        <img src={"media/aboutus.jpg"} className='banner1' alt="Banner" />
      </Box>  
      
      <br></br>
      <br></br>
      <br></br>
      <br></br>
<div className='row1'>

      <Grid container>
     <Grid item xs={6}> 
     <Typography ><h1 >About Us</h1></Typography>
        <Typography ><h3 className='middle'>Job seeker refers to an individual who is actively looking for an employment opportunity/job and has submitted an application to the employer.</h3></Typography>
     </Grid>
     <Grid item xs={6}>
     <img src={"media/about1.jpg"} className='banner2'  alt="about1" />
     </Grid>
</Grid>
<Typography><h1>Our Team</h1></Typography>

<Grid container>
     <Grid item xs={3}> 
 
     </Grid>
     <Grid item xs={3}>
    
     <img src={"media/omar.jpg"} className='team1'  alt="about1" />
     </Grid>
     <Grid item xs={3}> 
     <img src={"media/hasan.jpg"} className='team2'  alt="about1" />
     </Grid>
     <Grid item xs={3}>
     </Grid>
</Grid>
</div>

</div>
      
      
      );
  }
  
  export default aboutus;
  