import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import Error from '../../generic/Error';

const REGEX_EMAIL = /^[^@]+@[^\.]+\.[A-z]+/g;


class Form extends React.Component {

  state = {
    editable: true,
    data: { name: '', email: '', message: '', recaptchaValue: '' },
    error: '',
    info: '',
  };

  sendFormData = () => {

    /* create request */
    var x = new XMLHttpRequest();
    var _this = this;

    /* set the callback function */
    x.onreadystatechange = function() {
      if (x.readyState === 4) {
        var response = JSON.parse(x.responseText);

        if (x.status === 200) {
          _this.setState({ info: 'Message sent !' });
        }
        else {
          _this.setState({ error: response.msg });
        }
      }
    }
        /* send the request */
    x.open('POST', 'http://aksels.me:7997/contact', true );
    x.setRequestHeader('Content-type', 'application/json');

    x.send( JSON.stringify( this.state.data ) );
  }

  validate = (data) => {
    if (!this.state.data.recaptchaValue) {
      this.setState({
        editable: true,
        error: 'Please fill the captcha',
      });
      return false;
    }
    if (!REGEX_EMAIL.test(this.state.data.email)) {
      this.setState({
        editable: true,
        error: 'Sorry it\'s not a valid email',
      });
      return false;
    }
    if (this.state.data.name.length < 3) {
      this.setState({
        editable: true,
        error: 'Name: should be at least 3 characters ',
      });
      return false;
    }
    if (this.state.data.message.length < 4) {
      this.setState({
        editable: true,
        error: 'Message: should be at least 4 characters',
      });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    this.setState({ editable: false, error: '' });
    event.preventDefault();

    if (this.validate(this.state.data)) {
      this.setState({ info: 'Sending message...', error: '' });
      this.sendFormData();
    }
  }

  handleChange = (event) => {
    if (this.state.editable) {
      this.setState(
        { data: { ...this.state.data, [event.target.name]: event.target.value } }
      );
    }
  }

  GRChange = (value) => {
    this.setState(
      { data: { ...this.state.data, recaptchaValue: value } }
    );
  }

  render() {
    return (
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <h1><a href="mailto:aksels.ledins@gmail.com">aksels.ledins@gmail.com</a></h1>
        <p>Or just send me an email straight through here:</p>

        <form name="Form" onSubmit={this.handleSubmit}>
          {this.state.error && <Error data={this.state.error} /> }
          {this.state.info &&
            <p>
              {this.state.info}
            </p>
          }
          <fieldset>
            {/* require('util').inspect(this.state, { depth: null }) */}
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.data.name} onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={this.state.data.email} onChange={this.handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" value={this.state.data.message} onChange={this.handleChange} />
            <ReCAPTCHA
              ref="recaptcha"
              sitekey="6LcBjR4TAAAAAPGttYPi7wVFO0FqYE4sREWlYinE"
              onChange={this.GRChange}
            />
            <input id="submit" type="submit" name="submit" value="Send Message" />

          </fieldset>
        </form>

        <div id="success">
          <p>Your message was sent successfully! I will be in touch as soon as I can.</p>
        </div>

        <div id="error">
          <p>Something went wrong, try refreshing and submitting the form again.</p>
        </div>
      </div>
    );
  }
}

export default Form;
