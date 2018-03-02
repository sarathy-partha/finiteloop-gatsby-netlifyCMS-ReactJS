import React from 'react'
import Link from 'gatsby-link'

const NotFoundPage = () => (
  <div>
    <h1>Oops </h1>
    <p>Sad, sad, sad...... I know you did not mean to, but things happen.</p>
    <p>Never mind, there is always a <Link to="/page-2/">Home</Link> for everyone</p>
  </div>
)

export default NotFoundPage
