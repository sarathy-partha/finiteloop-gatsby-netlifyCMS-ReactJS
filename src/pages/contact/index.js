import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import Button from "material-ui/Button";
import { navigateTo } from "gatsby-link";

import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";
import Snackbar from 'material-ui/Snackbar';
import Divider from 'material-ui/Divider';

import Keys from '../../../config/APIKeys';


import { compose, withProps, withStateHandlers } from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} from "react-google-maps";

//import { MarkerWithLabel } from 'react-google-maps/lib/components/addons/MarkerWithLabel'

const styles = theme => ({
    container: {
        display: 'flex',
        flex: 1,
        marginTop: '10px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        paddingTop: '20px',
    },
    form: {
        width: 600,
    },
    submit: {
        display: 'flex',
        margin: "3em 0",
        alignItems: 'center',
        color: 'white',
    },
    multilineInput: {
        lineHeight: 1.4,
        fontSize: "1.2em",
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    singleLineInput: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 600,
        lineHeight: 1.4,
        fontSize: "1.2em",
        [theme.breakpoints.down('sm')]: {
            width: '100%',
        }
    },
    submitError: {
        background: "red",
        color: "white"
    },
    maps: {
        width: '800px',
    },
});

const MapWithAMakredInfoWindow = compose(
    withStateHandlers(() => ({
        isOpen: true,
    }), {
            onToggleOpen: ({ isOpen }) => () => ({
                isOpen: !isOpen,
            })
        }),
    withScriptjs,
    withGoogleMap
)(props =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 12.933739, lng: 77.620947 }}
    >
        <Marker
            position={{ lat: 12.933739, lng: 77.620947 }}
            onClick={props.onToggleOpen}
        >
            {props.isOpen &&
                <InfoWindow onCloseClick={props.onToggleOpen}>
                    <div>
                        <Typography component="h3" variant="headline" style={{
                            color: '#70A999',
                        }}>
                            FiniteLoop Systems
                        </Typography>
                        <Divider style={{ backgroundColor: '#70A999', marginTop: '5px' }} />
                        <Typography component="span" variant="body1">
                            139, 1st A Cross Road,<br />
                            Koramangala V Block<br />
                            Bangalore - 560095<br />
                            Phone : +91 98803 10676
                        </Typography>
                    </div>
                </InfoWindow>}
        </Marker>
    </GoogleMap>
);

/* const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={17}
        defaultCenter={{ lat: 12.933739, lng: 77.620947 }}
    >
        <MarkerWithLabel
            position={{ lat: 12.933739, lng: 77.620947 }}
            labelAnchor={new google.maps.Point(5, 0)}
            labelStyle={{ color: "#f9f9f9", border: "2px solid #70A999", backgroundColor: '#70A999', fontWeight: 500, fontSize: "18px", padding: "8px" }}
        >
            <div>FiniteLoop Systems</div>
        </MarkerWithLabel>
    </GoogleMap>
)); */

const GoogleMapsUrl = "https://maps.googleapis.com/maps/api/js?key=" + Keys.googleMapsAPIKey + "&v=3.exp&libraries=geometry,drawing,places";

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class ContactForm extends React.Component {
    state = {
        open: false,
        firstname: "",
        lastname: "",
        email: "",
        message: "",
        company: "",
        submitError: "",
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    };

    handleNetworkError = e => {
        this.setState({ submitError: "There was a network error." });
    };

    handleSubmit = (e, state) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "Contact", ...this.state })
        })
            .then(() => {
                console.log("Form submission success");
                this.setState({ open: true, ...state });
            })
            .catch(error => {
                console.error("Form submission error:", error);
                this.handleNetworkError();
            });

        e.preventDefault();
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { open, email, firstname, lastname, message, company, submitError } = this.state;

        return (
            <div style={{ margin: '35px' }}>
                <Typography style={{ lineHeight: 1.5, letterSpacing: 1.25, textAlign: 'center' }} variant="headline" component="h1">
                    We would like to hear from you. If you are around the corner, we will be more than happy to share a cup of coffee with you.
                </Typography>
                <Typography style={{ lineHeight: 1.5, letterSpacing: 1.25, textAlign: 'center' }} variant="subheading" component="h2">
                    Write to us, share your business needs, give us feedback, and we will get back to you the soonest.
                </Typography>
                <div className={classes.container}>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={errors => console.log(errors)}
                        name="Contact"
                        ref={f => (this.form = f)}
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        className={classes.form}
                    >
                        {submitError && <p className={classes.submitError}>{submitError}</p>}
                        <TextValidator
                            id="firstname"
                            name="firstname"
                            label="First Name"
                            value={firstname}
                            onChange={this.handleChange}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            fullWidth
                            margin="normal"
                            className={classes.singleLineInput}
                        />
                        <TextValidator
                            id="lastname"
                            name="lastname"
                            label="Last Name"
                            value={lastname}
                            onChange={this.handleChange}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            fullWidth
                            margin="normal"
                            className={classes.singleLineInput}
                        />
                        <TextValidator
                            id="email"
                            name="email"
                            label="E-mail"
                            value={email}
                            onChange={this.handleChange}
                            validators={["required", "isEmail"]}
                            errorMessages={["This field is required", "E-mail is not valid"]}
                            fullWidth
                            margin="normal"
                            className={classes.singleLineInput}
                        />
                        <TextValidator
                            id="company"
                            name="company"
                            label="Company Name"
                            value={company}
                            onChange={this.handleChange}
                            fullWidth
                            margin="normal"
                            className={classes.singleLineInput}
                        />
                        <TextValidator
                            id="message"
                            name="message"
                            label="Message"
                            value={message}
                            onChange={this.handleChange}
                            validators={["required"]}
                            errorMessages={["This field is required"]}
                            multiline
                            fullWidth
                            margin="normal"
                            className={classes.multilineInput}
                        />
                        <input name="bot-field" style={{ display: "none" }} />
                        <br />
                        <div style={{ alignItems: 'center' }}>
                            <Button
                                variant="raised"
                                color="primary"
                                size="large"
                                type="submit"
                                className={classes.submit}
                            >
                                Submit
                        </Button>
                        </div>
                    </ValidatorForm>
                    <Snackbar
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        open={open}
                        onClose={this.handleClose}
                        SnackbarContentProps={{
                            'aria-describedby': 'message-id',
                        }}
                        message={<span id="message-id">Thank you for submitting your valuable inputs, we will get back to you soon.</span>}
                    />
                    <div className={classes.maps}>
                        <MapWithAMakredInfoWindow
                            googleMapURL={GoogleMapsUrl}
                            loadingElement={<div style={{ height: `100%` }} />}
                            containerElement={<div style={{ height: `400px` }} />}
                            mapElement={<div style={{ height: `100%` }} />}
                        />
                    </div>
                </div >
            </div>
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);