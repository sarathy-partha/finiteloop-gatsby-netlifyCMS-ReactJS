import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import SEO from '../components/seo';

const styles = theme => ({
    title1: {
        fontSize: '36px',
        color: '#5C5C5C',
        letterSpacing: '1.29px',
        textAlign: 'center',
        textTransform: 'uppercase'
    },
})

export const OfferingTemplate = ({
    content,
    contentComponent,
    title,
    helmet,
    image,
    classes
}) => {
    const PostContent = contentComponent || Content

    return (
        <section name="offering">
            {helmet || ''}
            <Typography component="h2" className={classes.title1}>
                {title}
            </Typography>
            <div style={{ padding: '20px', lineHeight: '24px', letterSpacing: '1.29px' }}>
                <PostContent content={content} />
            </div>
        </section>
    )
}

const Offering = props => {
    const { Offerings: offering } = props.data

    return (
        <div>
            <OfferingTemplate
                content={offering.html}
                contentComponent={HTMLContent}
                helmet={<Helmet title={`Offering & Services | ${offering.frontmatter.title}`} />}
                title={offering.frontmatter.title}
                image={offering.frontmatter.image}
                classes={props.classes} />
            <SEO postPath={offering.frontmatter.path} postNode={offering} postSEO />
        </div>
    )
}

Offering.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Offering)

export const offringQuery = graphql`
query Offering($path: String!) {
Offerings: markdownRemark(frontmatter:  {path: { eq: $path }}) {
        html
        id
        excerpt
        frontmatter {
          path
          title
          image
          templateKey
        }
      }
}
`
