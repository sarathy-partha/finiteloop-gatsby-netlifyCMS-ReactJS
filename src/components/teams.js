import React from 'react'

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import classNames from 'classnames';
import { IconButton } from 'material-ui';
import Avatar from 'material-ui/Avatar';

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

export const TeamsPageTemplate = ({ props, teams }) => {
    const { classes, theme } = props;
    return (
        <div style={{ background: 'linear-gradient(-180deg, #FAFAFA 0%, #F1F1F1 100%)' }}>
            <h2 className={classes.teamsTitle}>{teams.teamTitle}</h2>
            <Grid container spacing={0} className={classes.teams}>
                {teams.team
                    .sort(compare)
                    .map(({ person }) => {
                        return (
                            <div key={person.name} >
                                <Grid className={classes.card} xs item style={{ paddingBottom: '10px' }}>
                                    <Card className={classes.card}>
                                        <div>
                                            <Avatar style={{ height: 150, width: 150, border: '5px solid #70A898', }}
                                                alt={person.name}
                                                src={person.avatar}
                                                className={classNames(classes.avatar, classes.bigAvatar)}
                                            />
                                            <IconButton style={{ position: 'relative', marginTop: '-70px', marginLeft: '135px' }}
                                                href={person.lnkdnsiteurl} target="_new" aria-label="Play/pause">
                                                <LnkdnIcon className={classes.icons} style={{ height: '48px', width: '48px' }} />
                                            </IconButton>
                                        </div>
                                        <CardContent className={classes.content}>
                                            <Typography variant="body1" className={classes.offeringBody1} component="h2">
                                                {person.name + " "}
                                                <img height="30" width="30" src="/img/kolam.png" />
                                                {person.title}
                                            </Typography>
                                            <Typography variant="subheading" component="p">
                                                {person.quote}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </div>
                        )
                    })}
            </Grid>
            <div>
            </div>
        </div>
    )
}

const Teams = ({ teamsData }) => {
    const { classes, theme } = teamsData;
    const { edges: aboutus } = teamsData.data.Teams
    return (
        <section name="teams" style={{
            paddingLeft: '3%', paddingRight: '3%',
            background: 'linear-gradient(-180deg, #FAFAFA 0%, #F1F1F1 100%)'
        }}>
            {aboutus
                .map(({ node: team }) => (
                    <TeamsPageTemplate key={team.frontmatter.title}
                        props={teamsData}
                        teams={team.frontmatter}
                    />
                ))
            }
        </section>
    )
}

export default Teams;
