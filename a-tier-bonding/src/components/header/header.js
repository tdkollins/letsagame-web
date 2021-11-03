import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import './header.css'

const NavBarStyles = ({
   display: 'flex', 
   justifyContent: 'flex-end', 
   backgroundColor: '#134311',
   padding: '0% 7% 0.5% 0% ',
   color: 'white'
});


function Header() {
  return (
    <div>
      <Box sx={NavBarStyles}>
        <ButtonGroup color='inherit' size="large" variant="text">
          <Button component={Link} to='/'>  Home  </Button> 
          <Button component={Link} to='/schedule'> Schedule  </Button> 
          <Button component={Link} to='/schedule'> Team </Button> 
        </ButtonGroup> 
      </Box>
    </div>
  );
}

export default Header;
