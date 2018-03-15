import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import MarkdownRenderer from 'react-markdown-renderer';
import SEO from '../components/seo';

const styles = theme => ({
  title1: {
    fontSize: '36px',
    color: '#5C5C5C',
    letterSpacing: '1.29px',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  title2: {
    fontSize: '24px',
    color: '#5C5C5C',
    letterSpacing: '1.29px',
    textAlign: 'left',
    textTransform: 'uppercase'
  },
})

export const CaseStudyTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  casestudy,
  classes,
}) => {
  const PostContent = contentComponent || Content
  return (
    <section style={{ padding: '20px' }}>
      {helmet || ''}
      <div>
        <Typography component="h1" className={classes.title1}>
          {title}
        </Typography>
        <Typography component="p" className={classes.title1}>
          {description}
        </Typography>
        <img src={image} style={{ width: '200px' }} />
        <div style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}>
          <PostContent content={content} />
        </div>
        <div>
          <Typography component="h3" className={classes.title2}>
            Focus
          </Typography>
          <div id="focus" style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}>
            <MarkdownRenderer markdown={casestudy.focus} />
          </div>
          <Typography component="h3" className={classes.title2}>
            Challenges
          </Typography>
          <div style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}>
            <MarkdownRenderer markdown={casestudy.challenges} />
          </div>
          <Typography component="h3" className={classes.title2}>
            Solution
          </Typography>
          <div style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}>
            <MarkdownRenderer markdown={casestudy.solution} />
          </div>
          <Typography component="h3" className={classes.title2}>
            Benefits
          </Typography>
          <div style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}>
            <MarkdownRenderer markdown={casestudy.benefits} />
          </div>
        </div>
      </div>
    </section>
  )
}

const CaseStudy = props => {
  const { markdownRemark: casestudy } = props.data
  return (
    <div>
      <CaseStudyTemplate
        content={casestudy.html}
        contentComponent={HTMLContent}
        description={casestudy.frontmatter.description}
        helmet={<Helmet title={`Case Study | ${casestudy.frontmatter.title}`} />}
        title={casestudy.frontmatter.title}
        image={casestudy.frontmatter.image}
        casestudy={casestudy.frontmatter.casestudy}
        classes={props.classes}
      />
      <SEO postPath={casestudy.frontmatter.path} postNode={casestudy} postSEO />
    </div>
  )
}

CaseStudy.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CaseStudy)

export const pageQuery = graphql`
  query CaseStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        image
        title
        date
        customer {
          name
          profile
          web
        }
        casestudy {
          description
          focus
          challenges
          solution
          benefits
          technology
        }
      }
    }
  }
`
