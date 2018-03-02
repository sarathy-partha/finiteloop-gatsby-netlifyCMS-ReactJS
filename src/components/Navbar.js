import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
import logo from '../img/KhyatehLongerLogo.png'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';
import Grow from 'material-ui/transitions/Grow';

import { GitHubIcon } from './icons/githubIcon'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root} >
      <Grow in
        style={{ transformOrigin: '0 0 0' }}
        {...{ timeout: 1000 }}>
        <AppBar position="fixed">
          <Toolbar>
            <img src={props.logo} style={{width: '100px'}}/>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {props.title}
            </Typography>
            <IconButton href="https://github.com/partha360/finiteloop-gatsby-netlifyCMS-ReactJS" target="_new" color="inherit" aria-label="Menu">
              <GitHubIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Grow>
    </div >
  )
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
