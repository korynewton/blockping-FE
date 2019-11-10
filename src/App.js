import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import Sound from 'react-sound';

import BubblePop from './sounds/bubble_pop.mp3';

const { REACT_APP_SERVER_ADDR: socketAddress } = process.env;

const client = new W3CWebSocket(`ws://${socketAddress}`);

class App extends Component {
  state = {
    id: '',
    status: 'STOPPED'
  };
  componentWillMount() {
    client.onopen = message => {
      console.log('WebSocket Client Connected');
      console.log(message);
    };
    client.onmessage = message => {
      this.setState({ status: 'PLAYING' });
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <h2>Websockets</h2>
        <Sound
          url={BubblePop}
          playStatus={Sound.status[`${status}`]}
          onFinishedPlaying={() => this.setState({ status: 'STOPPED' })}
        />
      </div>
    );
  }
}

export default App;
