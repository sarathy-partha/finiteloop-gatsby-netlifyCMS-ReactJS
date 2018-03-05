import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose';
import Helmet from 'react-helmet'

import withRoot from '../withRoot';
import withWidth from 'material-ui/utils/withWidth';
import Hidden from 'material-ui/Hidden';

import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import './all.sass'
import 'typeface-roboto'
import BottomBar from '../components/BottomBar';

const TemplateWrapper = ({ children, data }) => {
  const { markdownRemark: settings } = data
  return (
    <div>
      <Helmet title={settings.frontmatter.siteTitle} />
      <Hidden mdDown implementation="css">
        <Navbar title={settings.frontmatter.siteTitle} logo={settings.frontmatter.logo} />
        <div style={{ marginTop: '70px', paddingLeft: '10px' }}>
          {children()}
        </div>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Footer />
      </Hidden>
      <Hidden lgUp implementation="css">
        <div style={{ marginBottom: '70px', paddingLeft: '10px'  }}>
          {children()}
        </div>
        <BottomBar />
      </Hidden>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default (withWidth(), withRoot(TemplateWrapper))


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
