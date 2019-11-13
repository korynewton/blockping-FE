import React from 'react';
import sounds from './../../sounds/sounds';
import ButtonComponent from '../Button/Button.component';

import './buttons.styles.scss';

const Buttons = ({ selectAudio }) => (
  <div className="button-container">
    {Object.keys(sounds).map(name => (
      <ButtonComponent key={name} name={name} selectAudio={selectAudio} />
    ))}
  </div>
);

export default Buttons;
