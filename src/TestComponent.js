import React, { Component } from 'react';

class Greeter extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    );
  }
}

export class TestComponent extends Component {
  render() {
    return (
      <div>
        <Greeter name="Ben222" />
      </div>
    );
  }
}
