import React from 'react';
import Sound from 'react-sound';

import sounds from '../../sounds/sounds';

const Audio = ({ selected, status, stopAudio, volume }) => (
  <Sound
    url={sounds[selected]}
    playStatus={Sound.status[`${status}`]}
    onFinishedPlaying={() => stopAudio()}
    volume={volume}
  />
);

export default Audio;
