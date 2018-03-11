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
  console.log(data);
  const { global: settings } = data
  return (
    <div>
      <Helmet title={settings.frontmatter.siteTitle} />
      <Hidden implementation="css">
        <Navbar title={settings.frontmatter.logoTitle} logo={settings.frontmatter.logo} />
        <div style={{ marginTop: '90px'}}>
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
    global: markdownRemark(frontmatter: {templateKey: {eq: "global-settings"}}) {
      frontmatter {
        logo
        logoTitle
        templateKey
        siteUrl
        siteTitle
        siteDescription
      }
    }
    links: markdownRemark(frontmatter: {templateKey: {eq: "nav-links"}}) {
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
