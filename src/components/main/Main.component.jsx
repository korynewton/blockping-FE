import React from 'react';

import Buttons from '../Buttons/Buttons.component';
import Audio from '../Audio/Audio.component';
import Volume from '../Volume/Volume.component';

import { w3cwebsocket as W3CWebSocket } from 'websocket';

const { REACT_APP_SERVER_ADDR: socketAddress } = process.env;
const client = new W3CWebSocket(`ws://${socketAddress}`);

class Main extends React.Component {
  state = {
    id: '',
    status: 'STOPPED',
    selected: '',
    volume: 50
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
    this.setState({
      selected,
      status: 'PLAYING'
    });
  };

  handleVolumeChange = (e, newValue) => {
    this.setState({ volume: newValue });
  };

  render() {
    const { status, selected, volume } = this.state;
    const { selectAudio, stopAudio, handleVolumeChange } = this;

    return (
      <div>
        <Buttons selectAudio={selectAudio} />
        <Audio
          selected={selected}
          status={status}
          stopAudio={stopAudio}
          volume={volume}
        />
        <Volume volume={volume} handleVolumeChange={handleVolumeChange} />
      </div>
    );
  }
}

export default Main;
