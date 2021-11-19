import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import './header.css'

const NavBarStyles = ({
   display: 'flex', 
   justifyContent: 'flex-end',  
   backgroundColor: 'rgb(249, 249, 249)',
   padding: '0vh 20vh 1vh 0vh ',
   borderBottom: "3px solid rgb(151, 182, 191)",
   
});


function Header() {
  return (
    <div>
      <Box sx={NavBarStyles}>
        <ButtonGroup color='inherit' size="large" variant="text">
          <Button component={Link} to='/'>  Home  </Button> 
          {/* <Button component={Link} to='/schedule'> Schedule  </Button> 
          <Button component={Link} to='/schedule'> Team </Button>  */}
        </ButtonGroup> 
      </Box>
    </div>
  );
}

export default Header;
