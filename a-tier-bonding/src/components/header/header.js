import {React} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import './header.css'
import Logo from "../../assets/together_logo_transparent.png"

const NavBarStylesFixed = ({
   display: 'flex', 
   justifyContent: 'space-between',  
   backgroundColor: 'rgb(249, 249, 249)',
   padding: '0vh 20vh 1vh 5vh ',
   borderBottom: "3px solid rgb(151, 182, 191)",
   alignItems: "center",
   position: "fixed",
   top: "0",
   left: "0",
   right: "0",
   zIndex: "1"
});

const NavBarStylesNotFixed = ({
  display: 'flex', 
  justifyContent: 'space-between',  
  backgroundColor: 'rgb(249, 249, 249)',
  padding: '0vh 20vh 1vh 5vh ',
  borderBottom: "3px solid rgb(151, 182, 191)",
  alignItems: "center",
  zIndex: "0",
  minWidth: "1300px" 
});



function Header() {
  return (
    <div>
      <Box sx={NavBarStylesFixed} style={{ height: "80px" }}>
        <img src={Logo} style={{ height: "80px", width: "80px", paddingTop: "8px" }} alt="Logo"/>
        <ButtonGroup color='inherit' size="large" variant="text">
          <Button component={Link} to='/' style={{ fontSize: '2vh', fontFamily: "Nevis" }}>  Home  </Button>
          <Button component={Link} to='/schedule' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Schedule  </Button>
          <Button component={Link} to='/team' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Team </Button> 
          <Button href='https://www.twitch.tv/phieki' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Twitch </Button> 
          <Button component={Link} to='/sweepstakes' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Sweepstakes </Button>
          <Button href='https://tilt.fyi/w6q2G4M9Vd' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Donate  </Button>
        </ButtonGroup> 
      </Box>
      <Box sx={NavBarStylesNotFixed} style={{ height: "80px" }}>
        <img src={Logo} style={{ height: "80px", width: "80px" }} alt="Logo"/>
        <ButtonGroup color='inherit' size="large" variant="text">
          <Button component={Link} to='/'  style={{ fontSize: '2vh', fontFamily: "Nevis" }}>  Home  </Button>
          <Button component={Link} to='/schedule' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Schedule  </Button>
          <Button component={Link} to='/team' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Team </Button> 
          <Button href='https://www.twitch.tv/phieki' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Twitch </Button> 
          <Button component={Link} to='/sweepstakes' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Sweepstakes </Button>
          <Button href='https://tilt.fyi/w6q2G4M9Vd' style={{ fontSize: '2vh', fontFamily: "Nevis" }}> Donate  </Button>
        </ButtonGroup> 
      </Box>
    </div>
  );
}


export default Header;
