import React from 'react';
import Sound from 'react-sound';

import sounds from '../../sounds/sounds';

const Audio = ({ selected, status, stopAudio }) => (
  <Sound
    url={sounds[selected]}
    playStatus={Sound.status[`${status}`]}
    onFinishedPlaying={() => stopAudio()}
  />
);

export default Audio;
