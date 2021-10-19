import './header.css';
import React from 'react';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'

function Header() {
  return (
    <Container>
      <Paper>
        <Button> Home </Button>
        <Button> Schedule </Button> 
        <Button> Team </Button> 
      </Paper>
    </Container>
  );
}

export default Header;
