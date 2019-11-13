import React from 'react';
import Button from '@material-ui/core/Button';

const ButtonComponent = ({ name, selectAudio }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => selectAudio(name)}
    >
      {name}
    </Button>
  );
};

export default ButtonComponent;
