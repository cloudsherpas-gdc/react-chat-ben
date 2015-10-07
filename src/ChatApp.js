import React, { Component, findDOMNode } from 'react'

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

class ChatForm extends Component {
  formSubmit(e) {
    e.preventDefault()
    let textbox = findDOMNode(this.refs.textbox)
    this.props.chatEvent(
      textbox.value.trim()
    )
    textbox.value = ""
  }

  render() {
    return (
      <form>
        <input type="text" ref="textbox" />
        <input type="submit" onClick={this.formSubmit.bind(this)} />
      </form>
    )
  }
}

export class ChatApp extends Component {
  constructor(props) {
    super(props)
    this.state = { chats: [] }
  }

  render() {
    return (
      <div>
        <Greeter name="Ben" />
        <ChatList data={this.state.chats} />
        <ChatForm chatEvent={this.chatEvent.bind(this)} />
      </div>
    )
  }

  chatEvent(chat){
    this.setState({
      chats: this.state.chats.concat([chat])
    })
  }
}
