import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';
import Fade from 'material-ui/transitions/Fade';

import logo from '../img/khyatehlogo.png'
import { GitHubIcon } from './icons/icons'
import GatsbyLink from 'gatsby-link';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    padding: '5px',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <Fade in
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 500 }}>
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Link to="/">
              <img src={logo} style={{ width: '70px' }} />
            </Link>
            <Typography variant="display2" color="inherit" className={classes.flex}>
              {props.title}
            </Typography>
            <Button component={GatsbyLink} to="/about" className={classes.button} variant="raised" color="secondary">
              About Us
            </Button>
            <Button component={GatsbyLink} to="/contact" className={classes.button} variant="raised" color="secondary">
              Contact
            </Button>
            <IconButton href="https://github.com/partha360/finiteloop-gatsby-netlifyCMS-ReactJS" target="_new" color="inherit" aria-label="Menu">
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Fade>
    </div >
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
