import React from 'react'

import Button from 'material-ui/Button';
import GatsbyLink from 'gatsby-link';

const NotFoundPage = () => (
  <div>
    <h1>Oops </h1>
    <p>Sad, sad, sad...... I know you did not mean to, but things happen.</p>
    <p>Never mind, there is always a <Button href="#flat-buttons" variant="raised" color="primary" component={GatsbyLink} to="/">
        Home
      </Button> for everyone</p>
  </div>
)

export default NotFoundPage
