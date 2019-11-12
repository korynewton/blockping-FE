import React from 'react';
import sounds from './../../sounds/sounds';
import Button from '../Button/Button.component';

const Buttons = ({ selectAudio }) => {
  return Object.keys(sounds).map(name => (
    <Button key={name} name={name} selectAudio={selectAudio} />
  ));
};

export default Buttons;
