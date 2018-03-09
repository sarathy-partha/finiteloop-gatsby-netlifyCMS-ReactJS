import React from 'react'
import Link from 'gatsby-link'
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import InfoIcon from 'material-ui-icons/Info';
import ButtonBase from 'material-ui/ButtonBase';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: "lightgray",
    },
    gridList: {
        width: '100%',
        height: '90%',
        justifyContent: 'space-evenly',
        overflow: 'hidden'
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    image: {
        position: 'relative',
        height: '100%',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: '100%',
        },
        '&:hover': {
            zIndex: 1,
        },
        '&:hover $imageBackdrop': {
            opacity: 0.15,
        },
        '&:hover $imageMarked': {
            opacity: 0,
        },
        '&:hover $imageTitle': {
            border: '4px solid currentColor',
        },
    },
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme.spacing.unit + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
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
                                    <GridListTile style={{ height: '400px', width: '400px' }} key={post.id}>
                                        <ButtonBase
                                            focusRipple
                                            className={classes.image}
                                            style={{
                                                width: '100%',
                                            }}
                                            component={Link}
                                            to={post.frontmatter.path}
                                        >
                                            <span
                                                className={classes.imageSrc}
                                                style={{
                                                    backgroundImage: `url(${post.frontmatter.image})`,
                                                }}
                                            />
                                            <span className={classes.imageBackdrop} />
                                            <span className={classes.imageButton}>
                                                <Typography
                                                    component="span"
                                                    variant="subheading"
                                                    color="inherit"
                                                    className={classes.imageTitle}
                                                >
                                                    {post.frontmatter.title}
                                                    <span className={classes.imageMarked} />
                                                </Typography>
                                            </span>
                                        </ButtonBase>
                                        <GridListTileBar style={{}}
                                            title={post.excerpt}
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

