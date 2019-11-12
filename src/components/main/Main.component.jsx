import React from 'react';
import Buttons from '../Buttons/Buttons.component';
import Audio from '../Audio/Audio.component';

import { w3cwebsocket as W3CWebSocket } from 'websocket';

const { REACT_APP_SERVER_ADDR: socketAddress } = process.env;
const client = new W3CWebSocket(`ws://${socketAddress}`);

class Main extends React.Component {
  state = {
    id: '',
    status: 'STOPPED',
    selected: ''
  };

  componentWillMount() {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = () => {
      this.setState({ status: 'PLAYING' });
    };
  }

  stopAudio = () => {
    this.setState({ selected: 'STOPPED' });
  };

  selectAudio = selected => {
    console.log(selected);
    this.setState({ selected });
  };

  render() {
    const { status, selected } = this.state;
    const { selectAudio, stopAudio } = this;

    return (
      <div>
        <Buttons selectAudio={selectAudio} />
        <Audio selected={selected} status={status} stopAudio={stopAudio} />
      </div>
    );
  }
}

export default Main;
