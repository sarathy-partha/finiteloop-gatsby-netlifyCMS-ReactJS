import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import 'typeface-roboto'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="finiteloop - infinite thinking, finite solution, simplify business..." />
    <Navbar />
    <div>{children()}</div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
