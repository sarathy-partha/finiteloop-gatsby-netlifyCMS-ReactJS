import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import propTypes from 'prop-types';
import { IconButton } from 'material-ui';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Divider from 'material-ui/Divider';

import { FbIcon, LnkdnIcon, TwtrIcon, GitHubIcon } from '../components/icons/icons'
import Fade from 'material-ui/transitions/Fade';

const styles = theme => ({
  teams: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  card: {
    display: 'flex',
    marginTop: '5px',
    flex: 1,
    maxWidth: '550px',
    minHeight: '100%',
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

export const AboutPageTemplate = ({ props, title, content, contentComponent, teams, teamTitle, teamDescription, timer }) => {
  const PageContent = contentComponent || Content
  const { classes, theme } = props;
  return (
    <section>
      <h2>
        {title}
      </h2>
      <h2>{teamTitle}</h2>
      <Divider />
      <Typography variant="headline" gutterBottom>
        {teamDescription}
      </Typography>
      <Divider />
      <Grid container spacing={0} className={classes.teams}>
        {teams
          .map(({ person }) => {
            timer+=500;
            return (
              <div key={person.name} >
                <Fade in
                  style={{ transformOrigin: '0 0 0' }}
                  {...{ timeout: timer }}>
                  <Grid className={classes.card} xs item style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                    <Card className={classes.card} style={{ backgroundColor: person.background }}>
                      <div className={classes.details} >
                        <CardContent className={classes.content}>
                          <Typography variant="headline">{person.name}</Typography>
                          <Typography variant="subheading" color="textSecondary">
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

const AboutPageTemplateWrapper = (props) => {
  const { classes, theme } = props;
  const { edges: aboutus } = props.data.allMarkdownRemark
  return (
    <div>
      {aboutus
        .map(({ node: aboutusData }) => (
          <AboutPageTemplate key={aboutusData.frontmatter.title}
            contentComponent={HTMLContent}
            title={aboutusData.frontmatter.title}
            content={aboutusData.html}
            teamTitle={aboutusData.frontmatter.teamTitle}
            teamDescription={aboutusData.frontmatter.teamDescription}
            teams={aboutusData.frontmatter.team}
            props={props}
            timer={1000}
          />
        ))
      }
    </div>
  )
}

export const aboutPageQuery = graphql`
  query AboutPage($path: String!) {
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

AboutPageTemplateWrapper.propTypes = {
  classes: propTypes.object.isRequired,
  theme: propTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutPageTemplateWrapper);
