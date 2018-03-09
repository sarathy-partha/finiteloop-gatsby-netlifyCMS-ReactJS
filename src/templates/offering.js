import React from 'react'
import Helmet from 'react-helmet'
import Content, { HTMLContent } from '../components/Content'

export const OfferingTemplate = ({

}) => {

    return (
        <section>
            Minds at work...
        </section>
    )
}

export default props => {
    return (
        <OfferingTemplate />
    )
}

export const offringQuery = graphql`
query Offering($path: String!) {
Offerings: markdownRemark(frontmatter:  {path: { eq: $path }}) {
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
`
