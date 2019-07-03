import React from 'react';
import './App.css';
import { PixelCanvas } from '../pixel-canvas';
import { ColorPalette } from '../color-palette/ColorPalette';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ColorPalette />
        <PixelCanvas width={20} height={20} zoom={30}/>
      </header>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

    </div>
  );
}

export default App;
