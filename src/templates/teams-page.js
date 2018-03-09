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

const styles = theme => ({
  teams: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    // marginTop: '5px',
    flex: 1,
    maxWidth: '550px',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100%',
    border: 0,
    boxShadow: 'none',
    borderRadius: '10%'
  },
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    minHeight: '100%',
  },
  cover: {
    width: '50%',
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    justifyContent: 'space-evenly',
  },
  icons: {
    paddingLeft: '5px',
  },
});

/* export const TeamsPageTemplateV1 = ({ props, title, content, contentComponent, teams, teamTitle, teamDescription, timer }) => {
  const PageContent = contentComponent || Content
  const { classes, theme } = props;
  return (
    <section>
      <h2>{teamTitle}</h2>
      <Divider />
      <Typography variant="headline" gutterBottom>
        <PageContent content={content} />
      </Typography>
      <Divider />
      <Grid container spacing={0} className={classes.teams}>
        {teams
          .map(({ person }) => {
            timer += 500;
            return (
              <div key={person.name} >
                <Grow in
                  style={{ transformOrigin: '0 0 0' }}
                  {...{ timeout: timer }}>
                  <Grid className={classes.card} xs item style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                    <Card className={classes.card} style={{ backgroundColor: person.background }}>
                      <div className={classes.details} >
                        <CardContent className={classes.content}>
                          <Typography color="inherit" variant="headline">{person.name}</Typography>
                          <Typography variant="subheading" color="inherit">
                            {person.quote}
                          </Typography>
                        </CardContent>
                        <div className={classes.controls}>
                          <IconButton href={person.fbsiteurl} target="_new" color="inherit" aria-label="Menu">
                            <FbIcon className={classes.icons} style={{ height: '48px', width: '48px' }} />
                          </IconButton>
                          <IconButton href={person.lnkdnsiteurl} target="_new" aria-label="Play/pause">
                            <LnkdnIcon className={classes.icons} style={{ height: '48px', width: '48px' }} />
                          </IconButton>
                          <IconButton href={person.twtrsiteurl} target="_new" aria-label="Next">
                            <TwtrIcon className={classes.icons} style={{ height: '48px', width: '48px' }} />
                          </IconButton>
                          <IconButton href={person.githubsiteurl} target="_new" aria-label="Next">
                            <GitHubIcon className={classes.icons} style={{ height: '48px', width: '48px' }} />
                          </IconButton>
                        </div>
                      </div>
                      <CardMedia
                        className={classes.cover}
                        image={person.avatar}
                        title={person.name}
                      />
                    </Card>
                  </Grid>
                </Grow>
              </div>
            )
          })}
      </Grid>
      <div>
      </div>
    </section>
  )
} */

export const TeamsPageTemplate = ({ props, title, content, contentComponent, teams, teamTitle, teamDescription, timer }) => {
  const PageContent = contentComponent || Content
  const { classes, theme } = props;
  return (
    <section>
      <h2>{teamTitle}</h2>
      <Divider />
      <Typography variant="headline" gutterBottom component="p">
        <PageContent content={content} />
      </Typography>
      <Grid container spacing={0} className={classes.teams}>
        {teams
          .map(({ person }) => {
            timer += 500;
            return (
              <div key={person.name} >
                <Fade in
                  style={{ transformOrigin: '0 0 0' }}
                  {...{ timeout: timer }}>
                  <Grid className={classes.card} xs item style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                    <Card className={classes.card}>
                      <Avatar style={{ height: 150, width: 150, border: '5px solid #70A898', }}
                        alt={person.name}
                        src={person.avatar}
                        className={classNames(classes.avatar, classes.bigAvatar)}
                      />
                      <CardContent className={classes.content}>
                        <Typography variant="display1" component="h1">
                          {person.name}
                        </Typography>
                        <Typography variant="title" component="h2">
                          {person.title}
                        </Typography>
                        <Typography style={{ textAlign: 'center' }} variant="subheading" component="p">
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
                </Fade>
              </div>
            )
          })}
      </Grid>
      <div>
      </div>
    </section>
  )
}

const TeamsPageTemplateWrapper = (props) => {
  const { classes, theme } = props;
  const { edges: aboutus } = props.data.allMarkdownRemark
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
            props={props}
            timer={1000}
            content={aboutusData.html}
            contentComponent={HTMLContent}
          />
        ))
      }
    </div>
  )
}

TeamsPageTemplateWrapper.propTypes = {
  classes: propTypes.object.isRequired,
  theme: propTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(TeamsPageTemplateWrapper);


export const teamsPageQuery = graphql`
  query TeamsPage($path: String!) {
          allMarkdownRemark(filter: {frontmatter: {path: {eq: $path}}}) {
          edges {
          node {
            html
              id
          frontmatter {
            path
              title
          image
          teamTitle
          teamDescription
              team {
            person {
                name
                title
                avatar
                quote
                background
                fbsiteurl
                twtrsiteurl
                lnkdnsiteurl
                githubsiteurl
                }
              }
            }
          }
        }
    } 
}
`
