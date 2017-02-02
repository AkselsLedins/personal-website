import React from 'react';

import Error from '../../generic/Error';

const REGEX_EMAIL = /^[^@]+@[^\.]+\.[A-z]+/g;


class Form extends React.Component {

  state = {
    editable: true,
    data: { name: '', email: '', message: '' },
    error: '',
  };

  validate = (data) => {
    if (!REGEX_EMAIL.test(this.state.email)) {
      this.setState({
        editable: true,
        error: 'Sorry it\'s not a valid email',
      });
      return false;
    }
    if (this.state.name.length < 3) {
      this.setState({
        editable: true,
        error: 'Name: should be at least 3 characters ',
      });
      return false;
    }
    if (this.state.message.length < 4) {
      this.setState({
        editable: true,
        error: 'Message: should be at least 4 characters',
      });
      return false;
    }
    return true;
  }

  handleSubmit = (event) => {
    this.setState({ editable: false });
    event.preventDefault();
    console.log('state', this.state);
    if (this.validate(this.state.data)) {
      console.log('ok send message');
    }
  }

  handleChange = (event) => {
    if (this.state.editable) {
      this.setState(
        { data: { ...this.state.data, [event.target.name]: event.target.value } }
      );
    }
  }

  render() {
    return (
      <div className="col-xs-12 col-lg-8 col-lg-offset-2">
        <h1><a href="mailto:aksels.ledins@gmail.com">aksels.ledins@gmail.com</a></h1>
        <p>Or just send me an email straight through here:</p>

        <form name="Form" onSubmit={this.handleSubmit}>
          {this.state.error && <Error data={this.state.error} /> }
          <fieldset>
            { require('util').inspect(this.state, { depth: null }) }
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={this.state.data.name} onChange={this.handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" value={this.state.data.email} onChange={this.handleChange} />
            <label htmlFor="message">Message</label>
            <textarea name="message" value={this.state.data.message} onChange={this.handleChange} />
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
