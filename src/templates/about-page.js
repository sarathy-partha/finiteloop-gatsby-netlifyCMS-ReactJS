import React from 'react'
import Content, { HTMLContent } from '../components/Content'
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import { IconButton } from 'material-ui';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import Divider from 'material-ui/Divider';

import { FbIcon, LnkdnIcon, TwtrIcon, GitHubIcon } from '../components/icons/icons'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    display: 'flex',
    //maxHeight: '550px',
    maxWidth: '600px',
    marginTop: '5px',
    textOverflow: 'ellipsis',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: '100%',
    //height: 151,
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
  team: {
    display: 'flex',
  }
});

export const AboutPageTemplate = ({ props, title, content, contentComponent, teams, teamTitle, teamDescription }) => {
  const PageContent = contentComponent || Content
  const { classes, theme } = props;
  return (
    <section>
      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
        {title}
      </h2>
      <h2>{teamTitle}</h2>
      <Divider />
      <Typography variant="headline" gutterBottom>
        {teamDescription}
      </Typography>
      <Divider />
      <Grid container item xs spacing={0} className={classes.root}
        className={classes.team}
        alignItems="stretch"
        direction="row"
        justify="center">
        {teams
          .map(({ person }) => (
            <div key={person.name} >
              <Grid xs item style={{ paddingRight: '10px', paddingBottom: '10px' }}>
                <Card className={classes.card} >
                  <div className={classes.details}>
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
                    <Divider />
                  </div>
                  <CardMedia
                    className={classes.cover}
                    image={person.avatar}
                    title={person.name}
                  />
                </Card>
              </Grid>
            </div>
          ))}
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

AboutPageTemplateWrapper.PropTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(AboutPageTemplateWrapper);
