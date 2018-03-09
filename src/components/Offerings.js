import React from 'react'
import Card, { CardContent, CardMedia, CardActions } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import propTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton } from 'material-ui';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

import Link from 'gatsby-link'

import { FbIcon, LnkdnIcon, TwtrIcon, GitHubIcon } from '../components/icons/icons'
import Fade from 'material-ui/transitions/Fade';

import Content, { HTMLContent } from '../components/Content'

export const OfferingsPageTemplate = ({ props, offering }) => {
    const PageContent = Content;
    const { classes, theme } = props;

    const isAlignLeft = offering.frontmatter.align === "left";
    return (
        <section>
            <div style={{ backgroundColor: 'white' }}>
                {isAlignLeft && (
                    <section name="offerings" className={classes.offeringsSection1}>
                        <div className={classes.offeringLeft} >
                            <img src={offering.frontmatter.image} />
                        </div>
                        <div className={classes.offeringRight}>
                            <Typography component="p" className={classes.title1}>
                                {offering.frontmatter.title}
                            </Typography>
                            <Typography component="p" variant="body1" className={classes.offeringBody1}>
                                {offering.excerpt}
                            </Typography>
                            <Button variant="raised" color="primary" 
                            to={offering.frontmatter.path} 
                            component={Link}
                            style= {{float: 'right'}}
                            className={classes.button}>
                                MORE
                            </Button>
                        </div>
                    </section>
                )}
                {!isAlignLeft && (
                    <section name="offerings" className={classes.offeringsSection2}>
                        <div className={classes.offeringRight} >
                            <Typography component="p" className={classes.title1}>
                                {offering.frontmatter.title}
                            </Typography>
                            <Typography component="p" variant="body1" className={classes.offeringBody1}>
                                {offering.excerpt}
                            </Typography>
                            <Button variant="raised" color="primary" 
                            to={offering.frontmatter.path} 
                            component={Link} 
                            style= {{float: 'right'}}
                            className={classes.button}>
                                MORE
                            </Button>
                        </div>
                        <div className={classes.offeringLeft}>
                            <img src={offering.frontmatter.image} />
                        </div>
                    </section>
                )}
            </div>
        </section>
    )
}

const Offerrings = ({ offeringsData }) => {
    const { classes, theme } = offeringsData;
    const { edges: offerings } = offeringsData.data.Offerings
    return (
        <div>
            {offerings
                .map(({ node: offerings }) => (
                    <OfferingsPageTemplate key={offerings.frontmatter.title}
                        props={offeringsData}
                        offering={offerings}
                    />
                ))
            }
        </div>
    )
}

export default Offerrings;
