import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'

import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Icon from 'material-ui/Icon';
import Fade from 'material-ui/transitions/Fade';

import { GitHubIcon } from './icons/icons'
import GatsbyLink from 'gatsby-link';
import { Divider } from 'material-ui';

const styles = theme => ({
    root: {
        flex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing.unit,
        flexWrap: 'wrap',
    },
});

const FooterNew = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root} >
            <Button color="secondary" href="http://khyateh.com/casestudy/" target="_new" className={classes.button}>
                Case Studies
            </Button>
            <Button color="secondary" href="http://khyateh.com/casestudy/" target="_new" className={classes.button}>
                Team
            </Button>
            <Button color="secondary" href="http://khyateh.com/casestudy/" target="_new" className={classes.button}>
                Open Source
            </Button>
            <Button color="secondary" href="http://khyateh.com/casestudy/" target="_new" className={classes.button}>
                Labs
            </Button>
            <Button color="secondary" href="http://khyateh.com/casestudy/" target="_new" className={classes.button}>
                Contact Us
            </Button>
            <Button color="secondary" href="http://khyateh.com/casestudy/" target="_new" className={classes.button}>
                Privacy Policy
            </Button>
        </div >
    )
}

FooterNew.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterNew);
