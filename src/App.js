import React from 'react';
import Clock from './Clock';
import Weather from './Weather';

const api =  process.env.REACT_APP_API_KEY;
const baseurl = "https://api.openweathermap.org/data/2.5/";

function App() {
  return (
    <div className="App">
      <main>
        
        <Clock/>
        
        <Weather/>
      </main>
    </div>
  );
}

export default App;
