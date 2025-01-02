import {React, useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";
import './header.css'
import Logo from "../../assets/together_logo_transparent.png"
import { AppBar, Box, Drawer, IconButton, Toolbar, useMediaQuery } from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';

const AppBarStyle = ({
  maxWidth: '100%'

}); 
const MainBarStyle = ({
  borderBottom: "3px solid rgb(151, 182, 191)",
  backgroundColor: 'rgb(249, 249, 249)',
  minWidth: "80%",
  maxWidth: "100%", 
  display: 'flex',
  justifyContent: 'space-between'
});

const NavBarDesktop = ({
  fontSize: '1vw',
  fontFamily: 'Nevis', 
  color: 'black'
})

const NavBarMobile = ({
  padding: '2vh 1vw',
  fontFamily: 'Nevis', 
  color: 'black',
})

function Header() {
  const isDesktop = useMediaQuery('(min-width:1025px)')
  const NavOptions = () => (
    <ButtonGroup size="large" variant="text" orientation={isDesktop? "horizontal" : "vertical"} onClick={toggleMenu(menuOut)}>
      <Button component={Link} to='/'sx={isDesktop? NavBarDesktop : NavBarMobile} >  Home  </Button>
      <Button component={Link} to='/schedule' sx={isDesktop? NavBarDesktop : NavBarMobile}> Schedule  </Button>
      <Button component={Link} to='/team' sx={isDesktop? NavBarDesktop : NavBarMobile}> Team </Button> 
      <Button href='https://www.twitch.tv/phieki' sx={isDesktop? NavBarDesktop : NavBarMobile}> Twitch </Button> 
      <Button component={Link} to='/sweepstakes' sx={isDesktop? NavBarDesktop : NavBarMobile}> Sweepstakes </Button>
      <Button href='https://tilt.fyi/w6q2G4M9Vd' sx={isDesktop? NavBarDesktop : NavBarMobile}> Donate  </Button>
  </ButtonGroup>
  );

  const [menuOut, setMenuOut] = useState(false); 

  const toggleMenu = (menuOut) => event => {
    setMenuOut(!menuOut); 
  };
  return (
    <div className='navbar'>
      <AppBar style={AppBarStyle}>
        <Toolbar sx={MainBarStyle}>
          <img src={Logo} className="navbar-logo" alt="Logo"/>
          {isDesktop? 
            <NavOptions/>
            : 
            <div>
              <IconButton onClick={toggleMenu(menuOut)}>
                <MenuIcon/> 
              </IconButton>
              <Drawer anchor='right' open={menuOut} onClose={toggleMenu(menuOut)}>
                <NavOptions/>
              </Drawer>
            </div>
          }
        </Toolbar>
      </AppBar>
      <Toolbar/>
    </div>
  );
}


export default Header;
