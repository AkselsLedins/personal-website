import React from 'react';
import Waypoint from 'react-waypoint';
import pure from 'recompose/pure';

class Bar extends React.Component {

  state = { value: 5, intervalId: undefined }

  frame(value) {
    if (this.state.value === value) {
      clearInterval(this.state.intervalId);
      return;
    }

    this.setState({ value: this.state.value + 1 });
  }

  animate = () => {
    this.setState({ intervalId: setInterval(() => this.frame(this.props.value), 15) });
  }

  render() {
    const { name, value, color } = this.props;

    return (
      <span>
        <Waypoint onEnter={this.animate} />
        <div className="bar-title">{name}<span className="align-right">{value}%</span></div>
        <div className="bar">
          <div className="bar-fill" style={{ backgroundColor: color, width: `${this.state.value}%` }} />
        </div>
      </span>
    );
  }
}


export default pure(Bar);
