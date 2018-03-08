import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import InfoIcon from 'material-ui-icons/Info';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    
});

class CaseStudies extends React.Component {
    render() {
        const { data, classes } = this.props
        const { edges: posts } = data.allMarkdownRemark

        return (
            <section className="section">
                <div className="container">
                    <div className="content">
                        <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
                    </div>
                    <div className={classes.root}>
                        <GridList cellHeight={180} className={classes.gridList}>
                            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                                <Subheader component="div">Case Studies
                                </Subheader>
                            </GridListTile>
                            {posts
                                .filter(post => post.node.frontmatter.templateKey === 'case-study')
                                .map(({ node: post }) => (
                                    <GridListTile style={{ height: '400px', width: '500px' }} key={post.id}>
                                        <img src={post.frontmatter.image} alt={post.frontmatter.title} />
                                        <GridListTileBar
                                            title={post.frontmatter.title}
                                            subtitle={<span>{post.excerpt}</span>}
                                            actionIcon={
                                                <Link className={classes.icon} to={post.frontmatter.path}>
                                                   <InfoIcon />
                                                </Link>
                                            }
                                        />
                                    </GridListTile>
                                ))}
                        </GridList>
                    </div>
                </div>
            </section>
        )
    }
}

CaseStudies.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CaseStudies);

export const caseStudiesQuery = graphql`
query IndexQuery {
allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
    edges {
        node {
        excerpt(pruneLength: 400)
        id
        frontmatter {
          image
          title
          templateKey
          path
          date(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
}
`;

