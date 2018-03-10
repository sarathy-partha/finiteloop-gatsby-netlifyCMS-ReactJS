import React from 'react'

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import { IconButton } from 'material-ui';
import Avatar from 'material-ui/Avatar';
import Button from 'material-ui/Button';

import Link from 'gatsby-link'
import { LnkdnIcon } from '../components/icons/icons'

function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const genreA = a.person.name.toUpperCase();
    const genreB = b.person.name.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
        comparison = 1;
    } else if (genreA < genreB) {
        comparison = -1;
    }
    return comparison;
}

export const CaseStudiesTemplate = ({ props, casestudy }) => {
    const { classes, theme } = props;
    console.log(classes)
    return (

        <div key={casestudy.title} >
            <Grid className="" xs item style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                <Card className={classes.caseStudycard}>
                    <CardMedia
                        className={classes.caseStudymedia}
                        image={casestudy.frontmatter.image}
                        title={casestudy.frontmatter.title}
                    />
                    <CardContent className={classes.caseStudycontent}>
                        <Typography style={{ color: 'white' }} variant="subheading" component="p">
                            {casestudy.excerpt}
                        </Typography>
                        <Button variant="flat" color="inherit"
                            to={casestudy.frontmatter.path}
                            component={Link}
                            style={{ color: 'white' }}
                            className={classes.button}>
                            MORE
                                <i className="material-icons">keyboard_arrow_right</i>
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

const CaseStudies = ({ caseStudiesData }) => {
    const { classes, theme } = caseStudiesData;
    const { edges: casestudies } = caseStudiesData.data.Casestudies
    return (
        <div>
            <h2 className={classes.teamsTitle}>Some of our work</h2>
            <div style={{ background: 'white' }}>
                <Grid container spacing={0} className={classes.teams}>
                    {casestudies
                        .filter(casestudies => casestudies.node.frontmatter.homepage)
                        .map(({ node: casestudy }) => (
                            <CaseStudiesTemplate key={casestudy.frontmatter.title}
                                props={caseStudiesData}
                                casestudy={casestudy}
                            />
                        ))
                    }
                    <Button variant="flat" color="inherit"
                        to="/case-studies"
                        component={Link}
                        style={{ color: '#70A999' }}
                        className={classes.button}>
                        See All Case Studies
                        <i className="material-icons">keyboard_arrow_right</i>
                    </Button>
                </Grid>
            </div>
        </div>
    )
}

export default CaseStudies;

