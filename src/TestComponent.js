import React, { Component } from 'react'

class Greeter extends Component {
  render() {
    return (
      <h1>Hello, {this.props.name}!</h1>
    )
  }
}

class ChatList extends Component {
  render() {
    var chats = this.props.data.map(
      chat => <li>{chat}</li>
    )
    return (
      <ul>{chats}</ul>
    )
  }
}

export class TestComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { data: [] }
  }
  render() {
    return (
      <div>
        <ChatList data={this.state.data} />
        <Greeter name="Ben" />
      </div>
    )
  }
}
