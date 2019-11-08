import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';

const { REACT_APP_SERVER_ADDR: socketAddress } = process.env;

const client = new W3CWebSocket(`ws://${socketAddress}`);

class App extends Component {
  state = {
    id: ''
  };
  componentWillMount() {
    client.onopen = message => {
      console.log('WebSocket Client Connected');
      console.log(message);
    };
    client.onmessage = message => {
      console.log('message from server');
      console.log(message);
    };
  }

  test = () => {
    console.log('test called:');
    const { data } = this.state;
    client.send('hello from client');
  };

  render() {
    return (
      <div>
        <h2>Websockets</h2>
        <button onClick={this.test}>CLICK</button>
      </div>
    );
  }
}

export default App;
