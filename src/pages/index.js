import React from 'react'
import Link from 'gatsby-link'

import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
  caption: {
    zIndex: 8,
    whiteSpace: 'wrap',
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'rgba(255, 255, 255, 0.81)',
    visibility: 'inherit',
    transition: 'none',
    textAlign: 'left',
    //lineHeight: '10%',
    borderWidth: '0px',
    margin: '0px',
    padding: '5px 15px 10px',
    letterSpacing: '0px',
    fontWeight: 200,
    fontSize: '2.6vmin',
    minHeight: '0px',
    minWidth: '0%',
    maxHeight: '250px',
    maxWidth: '350px',
    height: 'auto',
    opacity: 1,
    transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
    transformOrigin: '50% 50% 0px',
    overflow: 'hidden'
  }
});

class IndexPage extends React.Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { data, classes } = this.props
    const { open } = this.state;

    return (
      <section className="section">
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          infiniteLoop={true}
          dynamicHeight={true}
        >
          <div>
            <img src="img/Slider-Home.jpg" />
            <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
              <div className={classes.caption}><i>finiteloop</i> is a cloud advisory, and technology solutions company.
                <br />
                <br />
                We work with Service Design, Frontned, Cloud, Blockchain, Salesforce and other technologies
              </div>
            </div>
          </div>
          <div>
            <img src="img/Slider-SRS2.jpg" />
            <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
              <div className={classes.caption}><i>finiteloop</i> is a cloud advisory, and technology solutions company.
                <br />
                <br />
                We work with Service Design, Frontned, Cloud, Blockchain, Salesforce and other technologies
              </div>
            </div>
          </div>
          <div>
            <img src="img/SliderMain-HHH2.jpg" />
            <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
              <div className={classes.caption}><i>finiteloop</i> is a cloud advisory, and technology solutions company.
                <br />
                <br />
                We work with Service Design, Frontned, Cloud, Blockchain, Salesforce and other technologies
              </div>
            </div>
          </div>
          <div>
            <img src="img/SliderMain-TDH1.jpg" />
            <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
              <div className={classes.caption}><i>finiteloop</i> is a cloud advisory, and technology solutions company.
                <br />
                <br />
                We work with Service Design, Frontned, Cloud, Blockchain, Salesforce and other technologies
              </div>
            </div>
          </div>
          <div>
            <img src="img/SliderMain-Youth.jpg" />
            <div style={{ position: 'absolute', top: '10%', left: '65%' }}>
              <div className={classes.caption}><i>finiteloop</i> is a cloud advisory, and technology solutions company.
                <br />
                <br />
                We work with Service Design, Frontned, Cloud, Blockchain, Salesforce and other technologies
              </div>
            </div>
          </div>
        </Carousel>
      </section>
    )
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndexPage);
