import React from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose';
import Helmet from 'react-helmet'

import withRoot from '../withRoot';
import withWidth from 'material-ui/utils/withWidth';
import Hidden from 'material-ui/Hidden';

import Navbar from '../components/Navbar'
import Footer from '../components/footer'

import './global.sass'
//import 'typeface-roboto'
import BottomBar from '../components/BottomBar';
import FooterNew from '../components/footerNew';

const TemplateWrapper = ({ children, data }) => {
  const { markdownRemark: settings } = data
  return (
    <div>
      <Helmet title={settings.frontmatter.siteTitle} />
      <Hidden implementation="css">
        <Navbar title={settings.frontmatter.siteDescription} logo={settings.frontmatter.logo} />
        <div style={{ marginTop: '70px'}}>
          {children()}
        </div>
      </Hidden>
      <Hidden mdDown implementation="css">
        <FooterNew />
      </Hidden>
      <Hidden lgUp implementation="css">
        <FooterNew />
        {//<BottomBar logo={settings.frontmatter.logo} />
        }
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
