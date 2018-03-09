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


import { FbIcon, LnkdnIcon, TwtrIcon, GitHubIcon } from '../components/icons/icons'
import Fade from 'material-ui/transitions/Fade';

import Content, { HTMLContent } from '../components/Content'

export const TeamsPageTemplate = ({ props, title, content, contentComponent, teams, teamTitle, teamDescription, timer }) => {
    const PageContent = contentComponent || Content
    const { classes, theme } = props;
    return (
        <section>
            <h2 className={classes.teamsTitle}>{teamTitle}</h2>
            <Grid container spacing={0} className={classes.teams}>
                {teams
                    .map(({ person }) => {
                        return (
                            <div key={person.name} >
                                <Grid className={classes.card} xs item style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                                    <Card className={classes.card}>
                                        <Avatar style={{ height: 150, width: 150, border: '5px solid #70A898', }}
                                            alt={person.name}
                                            src={person.avatar}
                                            className={classNames(classes.avatar, classes.bigAvatar)}
                                        />
                                        <CardContent className={classes.content}>
                                            <Typography variant="body1" className={classes.offeringBody1} component="h1">
                                                {person.name}
                                                <img height="30" width="30" src="/img/kolam.png" />
                                                {person.title}
                                            </Typography>
                                            <Typography variant="subheading" component="p">
                                                {person.quote}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <IconButton href={person.lnkdnsiteurl} target="_new" aria-label="Play/pause">
                                                <LnkdnIcon className={classes.icons} style={{ height: '48px', width: '48px' }} />
                                            </IconButton>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            </div>
                        )
                    })}
            </Grid>
            <div>
            </div>
        </section>
    )
}

const Teams = ({ teamsData }) => {
    const { classes, theme } = teamsData;
    const { edges: aboutus } = teamsData.data.allMarkdownRemark
    return (
        <div>
            {aboutus
                .map(({ node: aboutusData }) => (
                    <TeamsPageTemplate key={aboutusData.frontmatter.title}
                        contentComponent={HTMLContent}
                        title={aboutusData.frontmatter.title}
                        content={aboutusData.html}
                        teamTitle={aboutusData.frontmatter.teamTitle}
                        teamDescription={aboutusData.frontmatter.teamDescription}
                        teams={aboutusData.frontmatter.team}
                        props={teamsData}
                        timer={1000}
                        content={aboutusData.html}
                        contentComponent={HTMLContent}
                    />
                ))
            }
        </div>
    )
}

export default Teams;

