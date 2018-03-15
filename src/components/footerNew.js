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
import Badge from 'material-ui/Badge';

import { GitHubIcon } from './icons/icons'
import GatsbyLink from 'gatsby-link';
import { Divider } from 'material-ui';

import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
    FacebookShareCount,
    LinkedinShareCount,
    WhatsappShareButton,
    EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    LinkedinIcon,
    EmailIcon,
} from 'react-share';

const styles = theme => ({
    root: {
        flex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: theme.spacing.unit,
        flexWrap: 'wrap',
        backgroundColor: '#70A999',
        color: 'white',
    },
    socialIcons: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
        cursor: 'pointer'
    },
    footerLinks: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
    },
    margin: {
        margin: theme.spacing.unit,
    },
});

const FooterNew = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root} >
            <div className={classes.footerLinks}>
                {/* <Button color="inherit" to="/case-studies" component={GatsbyLink} className={classes.button}>
                Case Studies
            </Button> */ }
                <Button color="inherit" to="/team" component={GatsbyLink} className={classes.button}>
                    Team
            </Button>
                <Button color="inherit" href="https://github.com/finite-loop" target="_new" className={classes.button}>
                    Open Source
            </Button>
                <Button color="inherit" to="/contact" component={GatsbyLink} className={classes.button}>
                    Get in Touch
            </Button>
            </div>
            <div className={classes.socialIcons}>
                <TwitterShareButton url="https://finiteloop.io" title="FiniteLoop Systems" via="_finiteloop" hashtags={["FiniteLoopSystems"]}>
                    <TwitterIcon round size={32} />
                </TwitterShareButton>
                <LinkedinShareButton url="https://finiteloop.io" title="FiniteLoop Systems">
                    <LinkedinShareCount url="https://finiteloop.io">
                        {shareCount => (
                            <Badge className={classes.margin} badgeContent={shareCount} color="secondary">
                                <LinkedinIcon round size={32} />
                            </Badge>
                        )}
                    </LinkedinShareCount>
                </LinkedinShareButton>
                <EmailShareButton url="https://finiteloop.io" subject="Enquire about FiniteLoop Systems">
                    <EmailIcon round size={32} />
                </EmailShareButton>
                <FacebookShareButton url="https://finiteloop.io" quote="FiniteLoop Systems" hashtag="#FiniteLoopSystems">
                    <FacebookShareCount url="https://finiteloop.io">
                        {shareCount => (
                            <Badge className={classes.margin} badgeContent={shareCount} color="secondary">
                                <FacebookIcon round size={32} />
                            </Badge>
                        )}
                    </FacebookShareCount>                </FacebookShareButton>
                <WhatsappShareButton url="https://finiteloop.io" title="FiniteLoop Systems">
                    <WhatsappIcon round size={32} />
                </WhatsappShareButton>
            </div>
        </div >
    )
}

FooterNew.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterNew);
