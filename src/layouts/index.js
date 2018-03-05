import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import withRoot from '../withRoot';

import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import './all.sass'
import 'typeface-roboto'

const TemplateWrapper = ({ children, data }) => {
  const { markdownRemark: settings } = data
  return (
    <div>
      <Helmet title={settings.frontmatter.siteTitle} />
      <Navbar title={settings.frontmatter.siteTitle} logo={settings.frontmatter.logo} />
      <div style={{marginTop: '70px'}}>
        {children()}
      </div>
      <Footer />
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withRoot(TemplateWrapper)


export const query = graphql`
  query SettingsQuery {
    markdownRemark(frontmatter: {templateKey: {eq: "global-settings"}}) {
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
