import React from 'react';

const Button = ({ name, selectAudio }) => {
  return <button onClick={() => selectAudio(name)}>{name}</button>;
};

export default Button;
