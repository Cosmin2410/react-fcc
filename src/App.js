import React from 'react';
import Header from './components/MemeGenerator/Header';
import Body from './components/MemeGenerator/Body';
import Practice1 from './components/Practice/Practice1';
import Practice2 from './components/Practice/Practice2';

function App() {
  return (
    <div className="App">
      <div className="meme">
        <Header />
        <Body />
        <Practice1 />
        <Practice2 />
      </div>
    </div>
  );
}

export default App;
