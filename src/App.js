import React from 'react';
import Main from './components/main/Main.component';

import './app.styles.scss';

const App = () => {
  return (
    <div className="main-container">
      <h2>Sound Notifications On New Blocks</h2>
      <Main />
    </div>
  );
};

export default App;
