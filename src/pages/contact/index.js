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

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #7CA699',
        flex: 1,
        marginTop: '10px',
    },
    submit: {
        margin: "3em 0"
        //width: "100%"
    },
    multilineInput: {
        lineHeight: 1.4,
        fontSize: "1.2em",
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 500,
        [theme.breakpoints.down('sm')]: {
            width: 300,
        }
    },
    singleLineInput: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 500,
        lineHeight: 1.4,
        fontSize: "1.2em",
        [theme.breakpoints.down('sm')]: {
            width: 300,
        }
    },
    submitError: {
        background: "red",
        color: "white"
    }
});

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
            <div style={{ margin: '35px'}}>
                <Typography style={{ lineHeight: 1.5, letterSpacing: 1.25 }} variant="headline" component="p">
                    We would like to hear from you. If you are around the corner, we will be more than happy to share a cup of coffee with you.
                </Typography>
                <Divider />
                <Typography style={{ lineHeight: 1.5, letterSpacing: 1.25 }} variant="subheading" component="p">
                    Write to us, share your business needs, give us feedback, and we will get back to you the soonest.
                </Typography>
                <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={errors => console.log(errors)}
                    name="Contact"
                    ref={f => (this.form = f)}
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    className={classes.container}
                >
                    {submitError && <p className={classes.submitError}>{submitError}</p>}
                    <TextValidator
                        id="firstname"
                        name="firstname"
                        label="First Name"
                        value={firstname}
                        onChange={this.handleChange}
                        validators={["required"]}
                        errorMessages={["this field is required"]}
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
                        errorMessages={["this field is required"]}
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
                        errorMessages={["this field is required", "email is not valid"]}
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
                        errorMessages={["this field is required"]}
                        multiline
                        fullWidth
                        margin="normal"
                        className={classes.multilineInput}
                    />
                    <input name="bot-field" style={{ display: "none" }} />
                    <Button
                        variant="raised"
                        color="primary"
                        size="large"
                        type="submit"
                        className={classes.submit}
                    >
                        Submit
                </Button>
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
                <div style={{textAlign: 'center'}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.5940331323814!2d77.61876621509283!3d12.933793690880655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae145ac669dd33%3A0xffea3cf03d6b7648!2sCommune+Coworks!5e0!3m2!1sen!2sin!4v1520867530834" width="100%" height="450" frameborder="0"  allowfullscreen></iframe>
                </div>
            </div>
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactForm);