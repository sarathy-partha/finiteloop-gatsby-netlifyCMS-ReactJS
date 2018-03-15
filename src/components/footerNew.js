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
        margin: theme.spacing.unit * 2,
    },
});

class FooterNew extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root} >
                <div className={classes.footerLinks}>
                    {this.props.links
                        .map(({ item: footerLinks }) => (
                            <div>
                                {!footerLinks.newwindow &&
                                    <Button color="inherit" to={footerLinks.url} component={GatsbyLink} className={classes.button}>
                                        {footerLinks.title}
                                    </Button>
                                }
                                {footerLinks.newwindow &&
                                    <Button color="inherit" href={footerLinks.url} target="_new" className={classes.button}>
                                        {footerLinks.title}
                                    </Button>
                                }
                            </div>
                        ))
                    }
                </div>
                <div className={classes.socialIcons}>
                    Share
                    <TwitterShareButton url={this.props.url} title={this.props.title} via="_finiteloop" hashtags={[this.props.hashTag]}>
                        <TwitterIcon round size={48} />
                    </TwitterShareButton>
                    <LinkedinShareButton url={this.props.url} title={this.props.title}>
                        <LinkedinShareCount url={this.props.url}>
                            {shareCount => (
                                <Badge className={classes.margin} badgeContent={shareCount} color="secondary">
                                    <LinkedinIcon round size={48} />
                                </Badge>
                            )}
                        </LinkedinShareCount>
                    </LinkedinShareButton>
                    <EmailShareButton url={this.props.url} subject={"Enquire about " + this.props.title}>
                        <EmailIcon round size={48} />
                    </EmailShareButton>
                    <FacebookShareButton url={this.props.url} quote={this.props.title} hashtag={"#" + this.props.hashTag}>
                        <FacebookShareCount url={this.props.url}>
                            {shareCount => (
                                <Badge className={classes.margin} badgeContent={shareCount} color="secondary">
                                    <FacebookIcon round size={48} />
                                </Badge>
                            )}
                        </FacebookShareCount>
                    </FacebookShareButton>
                    <WhatsappShareButton url={this.props.url} title={this.props.title}>
                        <WhatsappIcon round size={48} />
                    </WhatsappShareButton>
                </div>
            </div >
        )
    }
}

FooterNew.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FooterNew);
