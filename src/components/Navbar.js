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

import GatsbyLink from 'gatsby-link';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
  },
  flex: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    padding: '0px',
    flexWrap: 'wrap',
  },
  logo: {
    /* Rectangle: */
    border: '2px solid #70A898',
    color: '#70A999',
    letterSpacing: '0.71px',
    textDecoration: 'none',
    padding: '5px 10px 5px 10px',
    textTransform: 'uppercase',
    marginLeft: '20px'
  },
  button: {
    //display: 'flex',
    margin: theme.spacing.unit,
    flexWrap: 'wrap',
    /* OUR PEOPLE: */
    fontSize: '20px',
    color: '#5C5C5C',
    letterSpacing: '0.71px',
    textAlign: 'center'
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
        <Button component={GatsbyLink} to="/team" className={classes.button} color="primary">
          Our People
        </Button>
        <Button component={GatsbyLink} to="/contact" className={classes.button} color="primary">
          The Way
        </Button>
        <Button component={GatsbyLink} to="/contact" className={classes.button} color="primary">
          Get in Touch
        </Button>
        <Divider />
      </div>
    );

    return (
      <div className={classes.root} >
        <Fade in
          style={{ transformOrigin: '0 0 0' }}
          {...{ timeout: 1000 }}>
          <AppBar style={{ boxShadow: 'none', backgroundColor: '#fafafa', paddingTop: '10px' }} position="fixed" color="default">
            <Toolbar>
              <Link to="/" className={classes.logo}>
                <Typography color="inherit" component="span" style={{ fontSize: '20px' }}>
                  {this.props.title}
                </Typography>
              </Link>
              <Typography variant="display2" color="inherit" className={classes.flex}>
              </Typography>
              <Hidden xsDown implementation="css">
                <div>
                  <Button component={GatsbyLink} to="/team" className={classes.button} color="primary">
                    Our People
                </Button>
                  <Button component={GatsbyLink} to="/contact" className={classes.button} color="primary">
                    The Way
                  </Button>
                  <Button component={GatsbyLink} to="/contact" className={classes.button} color="primary">
                    Get in Touch
                  </Button>
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
            <Divider style={{ backgroundColor: '#70A999', marginLeft: '20px', marginRight: '20px', marginTop: '10px' }} />
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
