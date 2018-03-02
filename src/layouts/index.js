import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import 'typeface-roboto'

const TemplateWrapper = ({ children, data }) => {
  console.log(data)
  const { markdownRemark: settings } = data
  return (
    <div>
      <Helmet title={settings.frontmatter.siteTitle} />
      <Navbar title={settings.frontmatter.siteDescription} logo={settings.frontmatter.logo} />
      <div>{children()}</div>
    </div>
  )
}
TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper


export const query = graphql`
  query SettingsQuery {
    markdownRemark(frontmatter: {path: {eq: "/global-settings"}}) {
      frontmatter {
        logo
        templateKey
        siteUrl
        siteTitle
        siteDescription
      }
    }
  }
`
