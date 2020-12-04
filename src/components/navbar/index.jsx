import { AppBar, Container, Toolbar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = () => ({
  appBar: {
    backgroundColor: 'rgba(255, 255, 100, 0.5)',
    outline: '1px solid rgba(100, 255, 100, .5)',
    marginTop: '5px',
  },
  containerNavLink: {
    textAlign: 'center',
  },
});

const Navbar = (props) => {
  const { classes } = props;
  return (
    <AppBar position="static" color="inherit" className={classes.appBar}>
      <Container>
        <Toolbar display="flex" justifyContent="center" alignItems="center">
          <Container className={classes.containerNavLink}>
            <NavLink to="/inputs">Inputs</NavLink>
          </Container>
          <Container className={classes.containerNavLink}>
            <NavLink to="/list">List of sum</NavLink>
          </Container>
          <Container className={classes.containerNavLink}>
            <NavLink to="/weather">Widget</NavLink>
          </Container>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withStyles(styles)(Navbar);
