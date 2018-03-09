import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import ServicesCarousel from '../components/ServicesCarousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Teams from '../components/teams';
import classNames from 'classnames';

import './index.scss';
import { Divider } from 'material-ui';
import Offerrings from '../components/Offerings';

const styles = theme => ({
  initial: {
    background: 'url(/img/headerBackground.svg) no-repeat top left',
    paddingBottom: '50px'
  },
  header1: {
    [theme.breakpoints.down('sm')]: {
      padding: '150px 20px 100px 20px !important', // Overrides inline-style
    },
    marginTop: '50px',
    padding: '150px 50px 100px 100px',
    fontSize: '6vmin',
    color: '#70A999',
    letterSpacing: '1.29px',
    width: '100%',
    fontWeight: 500,
  },
  header2: {
    margin: '10px 0px 0px 0px',
    fontSize: '5vmin',
    color: '#5C5C5C',
    letterSpacing: '1.29px',
    width: '24em',
    textAlign: 'center',
  },
  title1: {
    fontSize: '36px',
    color: '#5C5C5C',
    letterSpacing: '1.29px',
    textAlign: 'left',
    textTransform: 'uppercase'
  },
  more: {
    textTransform: 'uppercase',
    textAlign: 'center',
    color: '#70A999',
    fontSize: '18px',
    lineHeight: '1.25',
  },
  offeringsSection1: {
    background: 'url(/img/kolamBackground.png) no-repeat top left',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '100px',
    paddingBottom: '50px',
    flex: 1,
  },
  offeringsSection2: {
    background: 'url(/img/kolamBackground.png) no-repeat top right',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '50px',
    paddingBottom: '50px',
    flex: 1,
  },
  offeringLeft: {
    paddingLeft: '50px',
    flex: 1,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Overrides inline-style
    },
  },
  offeringRight: {
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
    },
    [theme.breakpoints.up('md')]: {
      width: '60% !important', // Overrides inline-style
    },
    [theme.breakpoints.up('lg')]: {
      width: '75% !important', // Overrides inline-style
    },
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  offeringBody1: {
    fontSize: '1.25rem',
    color: '#70A999',
    letterSpacing: '0.71px',
    fontWeight: 500,
    display: 'flex'
  },

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
})

class IndexPage extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div style={{ background: 'linear-gradient(-180deg, #FAFAFA 0%, #F1F1F1 100%)' }}>
          <section className={classes.initial} name="initial">
            <Typography component="p" className={classes.header1}>
              We are a boutique consulting firm focusing on experience design and highly scalable technical architecture
                    </Typography>
            <p className="line-1 anim-typewriter">
              WE HELP YOU SCALE...
            </p>
          </section>
        </div>
        <div style={{ background: 'white' }}>
          <section name="more">
            <Typography component="span" className={classes.more}>
              More
              <br />
              <i style={{ fontSize: '38px', lineHeight: 0.5 }} className="material-icons">keyboard_arrow_down</i>
            </Typography>
          </section>
          <Divider style={{ backgroundColor: '#70A999', marginLeft: '20px', marginRight: '20px' }} />
        </div>
        <Offerrings offeringsData={this.props} />
        <Teams teamsData={this.props} />
      </div >
    )
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);

export const teamsPageQuery = graphql`
  query Teams {
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
    Offerings: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "offering"}}}) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          frontmatter {
            path
            title
            image
            templateKey
            align
          }
        }
      }
    }
    Casestudies: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "case-study"}}}) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
            image
            templateKey
          }
        }
      }
    }
  }
`