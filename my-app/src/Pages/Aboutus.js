import banner from '../media/aboutus.jpg';
import Box from '@mui/material/Box';

function aboutus() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <img src={banner} className='banner1' alt="Banner" />
      </Box>    );
  }
  
  export default aboutus;
  