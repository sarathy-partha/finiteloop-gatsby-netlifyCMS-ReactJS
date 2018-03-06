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
import Hidden from 'material-ui/Hidden';
import withWidth from 'material-ui/utils/withWidth';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';

import { GitHubIcon } from './icons/icons'
import GatsbyLink from 'gatsby-link';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%'
  },
  flex: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: '0px',
    fontFamily: "'Righteous', cursive",
    flexWrap: 'wrap',
  },
  button: {
    //display: 'flex',
    //margin: theme.spacing.unit,
    flexWrap: 'wrap',
  },
  menuList: {
    width: 'auto',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Navbar extends React.Component {

  state = {
    top: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const menuList = (
      <div className={classes.menuList}>
        <IconButton component={GatsbyLink} to="/">
          <Icon>home</Icon>
        </IconButton>
        <Button component={GatsbyLink} to="/about" className={classes.button} color="primary">
          About Us
        </Button>
        <Divider />
        <Button component={GatsbyLink} to="/contact" className={classes.button} color="primary">
          Contact
        </Button>
        <Divider />
        <IconButton className={classes.button} href="https://github.com/partha360/finiteloop-gatsby-netlifyCMS-ReactJS" target="_new" color="inherit" aria-label="Menu">
          <GitHubIcon />
        </IconButton>
      </div>
    );

    return (
      <div className={classes.root} >
        <Fade in
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: 1000 }}>
          <AppBar position="fixed" color="default">
            <Toolbar>
              <Link to="/">
                <img src={this.props.logo} style={{ width: '80px' }} />
              </Link>
              <Typography variant="display2" color="inherit" className={classes.flex}>
                {this.props.title}
              </Typography>
              <Hidden xsDown implementation="css">
                <div>
                  <Button component={GatsbyLink} to="/about" className={classes.button} color="primary">
                    About Us
                  </Button>
                  <Button component={GatsbyLink} to="/contact" className={classes.button} color="primary">
                    Contact
                 </Button>
                  <IconButton className={classes.button} href="https://github.com/partha360/finiteloop-gatsby-netlifyCMS-ReactJS" target="_new" color="inherit" aria-label="Menu">
                    <GitHubIcon />
                  </IconButton>
                </div>
              </Hidden>
              <Hidden smUp implementation="css">
                <IconButton onClick={this.toggleDrawer('top', true)}>
                  <MenuIcon />
                </IconButton>
                <Drawer anchor="top" open={this.state.top} onClose={this.toggleDrawer('top', false)}>
                  <div
                    tabIndex={0}
                    role="button"
                    onClick={this.toggleDrawer('top', false)}
                    onKeyDown={this.toggleDrawer('top', false)}
                  >
                    {menuList}
                  </div>
                </Drawer>
              </Hidden>
            </Toolbar>
          </AppBar>
        </Fade>
      </div >
    )
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (withWidth(), withStyles(styles)(Navbar));
