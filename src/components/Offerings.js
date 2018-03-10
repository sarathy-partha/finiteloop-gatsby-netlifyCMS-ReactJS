import React from 'react'
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import propTypes from 'prop-types';
import Button from 'material-ui/Button';

import Link from 'gatsby-link'

export const OfferingsPageTemplate = ({ props, offering }) => {
    const { classes, theme } = props;

    const isAlignLeft = offering.frontmatter.align === "left";
    return (
        <section>
            <div style={{background: 'white'}}>
                {isAlignLeft && (
                    <section name="offerings" className={classes.offeringsSectionLeft}>
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
                            <Button variant="flat" color="primary"
                                to={offering.frontmatter.path}
                                component={Link}
                                style={{ float: 'right' }}
                                className={classes.button}>
                                MORE
                                <i className="material-icons">keyboard_arrow_right</i>
                            </Button>
                        </div>
                    </section>
                )}
                {!isAlignLeft && (
                    <section name="offerings" className={classes.offeringsSectionRight}>
                        <div className={classes.offeringRight} >
                            <Typography component="p" className={classes.title1}>
                                {offering.frontmatter.title}
                            </Typography>
                            <Typography component="p" variant="body1" className={classes.offeringBody1}>
                                {offering.excerpt}
                            </Typography>
                            <Button variant="flat" color="primary"
                                to={offering.frontmatter.path}
                                component={Link}
                                style={{ float: 'right' }}
                                className={classes.button}>
                                MORE
                                <i className="material-icons">keyboard_arrow_right</i>
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
                .sort(compare)
                .map(({ node }) => (
                    <OfferingsPageTemplate key={node.frontmatter.title}
                        props={offeringsData}
                        offering={node}
                    />
                ))
            }
        </div>
    )
}

function compare(a, b) {
    const genreA = a.node.frontmatter.order;
    const genreB = b.node.frontmatter.order;

    let comparison = 0;
    if (genreA > genreB) {
        comparison = 1;
    } else if (genreA < genreB) {
        comparison = -1;
    }
    return comparison;
}

export default Offerrings;
