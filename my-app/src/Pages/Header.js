import * as React from 'react';
import '../Css/logo.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Button from '@mui/material/Button';
import Popup from './Popup';
import MenuItem from '@mui/material/MenuItem';


import {Link } from 'react-router-dom';

const pages =  ['Home', 'ApplyNow', 'Aboutus', 'Contactus'];

  

const settings = [ 'Login'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  
  return (
    <AppBar  position="static">
      <Container className='nav' maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 16, display: { xs: 'none', md: 'flex' } }}
          >
           <img src={"media/JobSeekers.png" } className="logo-accuv" alt="logo" />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                  <Link style={{textDecoration: "none", color:"white"}} to={`/${page}`}>
                      {page}
                      </Link>
                    </Typography>
                </MenuItem>

              ))}
             
            </Menu>
           
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
           <img src={"media/JobSeekers.png" } className="logo-accuv" alt="logo" />
          </Typography>
          <Box sx={{ flexGrow: 12, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                <Link style={{textDecoration: "none", color:"white"}} to={`/${page}`}>
                      {page}
                      </Link>
              </Button>
            ))}
          </Box>
          
       <Popup></Popup>
        
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
