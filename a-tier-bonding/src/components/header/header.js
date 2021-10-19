import React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Container>
        <ButtonGroup size="large" variant="text">
          <Button><Link to="/"> Home </Link> </Button> 
          <Button><Link to="/schedule"> Schedule </Link> </Button> 
          <Button> Team </Button> 
        </ButtonGroup> 
      </Container>
    </div>
  );
}

export default Header;
