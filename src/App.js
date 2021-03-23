import React from 'react';
import Clock from './Clock';
import Weather from './Weather';
import Covid from './Covid';

function App() {
  return (
    <div className="App">
      <main>
        
        <Clock/>
        
        <Weather/>

        <Covid/>
        
      </main>
    </div>
  );
}

export default App;
