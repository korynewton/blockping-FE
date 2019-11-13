import React from 'react';

import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';

import './volume.styles.scss';

const Volume = ({ volume, handleVolumeChange }) => (
  <div className="volume-container">
    <Grid container spacing={2}>
      <Grid item>
        <VolumeDown />
      </Grid>
      <Grid item xs>
        <Slider
          value={volume}
          onChange={(e, newVal) => handleVolumeChange(e, newVal)}
          aria-labelledby="continuous-slider"
        />
      </Grid>
      <Grid item>
        <VolumeUp />
      </Grid>
    </Grid>
  </div>
);

export default Volume;
