import React from 'react'
import Link, { navigateTo } from 'gatsby-link'

import github from '../img/github-icon.svg'
import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import { GitHubIcon, FbIcon, TwtrIcon } from '../components/icons/icons';

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';

import Icon from 'material-ui/Icon';

const styles = theme => ({
    root: {
        width: '100%',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'space-evenly',
        backgroundColor: theme.palette.primary.dark
    },
    bottomBar: {
        height: '65px',
        display: 'flex',
        justifyContent: 'space-evenly',
        width: '100%',
        backgroundColor: theme.palette.primary.dark,
    },
});


class BottomBar extends React.Component {
    state = {
        value: 'home',
    };

    handleChange = (event, value) => {
        this.setState({ value });
        switch (value) {
            case 'home': return navigateTo('/');
            case 'about': return navigateTo('/about');
            case 'contact': return navigateTo('/contact');
            case 'source': return navigateTo('https://github.com/partha360/finiteloop-gatsby-netlifyCMS-ReactJS');
            default: return navigateTo('/about');
        }
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root} >
                <Link to="/">
                    <img src={this.props.logo} style={{ height: '100%', width: '70px' }} />
                </Link>
                <BottomNavigation
                    value={value}
                    onChange={this.handleChange}
                    showLabels
                    className={classes.bottomBar}
                >
                    <BottomNavigationAction className={classes.bottomBarAction} value="home" label="Home" icon={<Icon>home</Icon>} />
                    <BottomNavigationAction className={classes.bottomBarAction} value="contact" label="Contact Us" icon={<Icon>help</Icon>} />
                    <BottomNavigationAction className={classes.bottomBarAction} value="about" label="About Us" icon={<Icon>person</Icon>} />
                </BottomNavigation>
            </div >
        )
    }
}

BottomBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomBar);
