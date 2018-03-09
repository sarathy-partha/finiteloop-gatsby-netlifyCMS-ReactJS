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

const styles = theme => ({
  initial: {
    background: 'url(/img/headerBackground.svg) no-repeat top left',
    paddingBottom: '100px'
  },
  header1: {
    marginTop: '50px',
    padding: '150px 50px 100px 50px',
    fontSize: '5vmin',
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
    background: 'url(/img/offeringBackground.svg) no-repeat top left',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '100px',
    paddingBottom: '100px',
    flex: 1,
  },
  offeringsSection2: {
    background: 'url(/img/offeringBackground.svg) no-repeat top right',
    display: 'flex',
    flexWrap: 'wrap',
    paddingTop: '100px',
    paddingBottom: '100px',
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
    paddingLeft: '50px',
    paddingRight: '20px',
  },
  offeringBody1: {
    fontSize: '1.25rem',
    color: '#70A999',
    letterSpacing: '0.71px',
    fontWeight: 600,
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
              <i style={{ fontSize: '38px', lineHeight: 0.5 }} class="material-icons">keyboard_arrow_down</i>
            </Typography>
          </section>
        </div>
        <div style={{ backgroundColor: 'white' }}>
          <section name="offerings" className={classes.offeringsSection1}>
            <div className={classes.offeringLeft} >
              <img src="/img/Sol_Architecture.png" />
            </div>
            <div className={classes.offeringRight}>
              <Typography component="p" className={classes.title1}>
                Solution Architecture
              </Typography>
              <Typography component="p" variant="body1" className={classes.offeringBody1}>
                You need to implement a business critical product, with high process complexity and massive concurrent usage. We have done this many times before.
              <br /><br />
                Our team has worked on different products that have enrolled a billion users or, enabled millions of payment transactions or, helped a global automobile company create a custom ordering platform with millions of possible combinations. You bring the vision, we bring the scalability.
              <br /><br />
                Salesforce consulting: Architect and lead development for one of the most exciting apps of 2018 on AppExchange? Done. Implement it in a scenario which can handle hundreds of thousands of orders every minute? Done. Voluntarily create and implement our smallest salesforce project for a small orphanage in rural south India and see it being used to its fullest? Done with a lot of joy.
            </Typography>
            </div>
          </section>
          <section name="offerings" className={classes.offeringsSection2}>
            <div className={classes.offeringRight} >
              <Typography component="p" className={classes.title1}>
                ORGANISATION TRANSFORMATION
              </Typography>
              <Typography component="p" variant="body1" className={classes.offeringBody1}>
                The most important product that you work on is your organization. We feel our work on technology and designs extends into the systems and experiences inside an organisation.
              <br /> <br />
                We have worked with organizations to create systems and best practices that help when growth turns from sporadic to exponential. We have redesigned financial and communication team structures in an international non-profit with presence in 35 countries. We play the role of a CTO organisation for one of our clients. We are in the trenches with you.
            </Typography>
            </div>
            <div className={classes.offeringLeft}>
              <img src="/img/OrgTrans.png" />
            </div>
          </section>
        </div>
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
          allMarkdownRemark(filter: {frontmatter: {path: {eq: "/team"}}}) {
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