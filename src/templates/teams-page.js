import React from 'react'
import { withStyles } from 'material-ui/styles';
import propTypes from 'prop-types';

import Content, { HTMLContent } from '../components/Content'
import Teams from '../components/teams';

const styles = theme => ({
  // Teams Section styles

  teams: {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  teamsTitle: {
    textAlign: 'center',
    color: '#70A999',
    fontSize: '36px',
  },
  card: {
    display: 'flex',
    // marginTop: '5px',
    flex: 1,
    maxWidth: '450px',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: '100%',
    border: 0,
    boxShadow: 'none',
    backgroundColor: 'transparent',
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
      <Teams teamsData={props} />
    </section>
  )
}

const TeamsPageTemplateWrapper = (props) => {
  const { classes, theme } = props;
  const { edges: aboutus } = props.data.Teams
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
  query TeamsPage {
    Teams: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "teams-page"}}}) {
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
