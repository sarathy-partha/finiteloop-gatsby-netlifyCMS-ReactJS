import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const CaseStudyTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section>
      {helmet || ''}
      <div>
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <img src={image} style={{width: '100%'}}/>
            <PostContent content={content} />
          </div>
    </section>
  )
}

export default props => {
  const { markdownRemark: post } = props.data

  return (
    <CaseStudyTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`Case Study | ${post.frontmatter.title}`} />}
      title={post.frontmatter.title}
      image={post.frontmatter.image}
    />
  )
}

export const pageQuery = graphql`
  query CaseStudyByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        image
        title
        customer {
          name
          profile
          date
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
