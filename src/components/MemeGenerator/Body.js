import { React, useState } from 'react';
import memesData from '../../memesData';

function Body() {
  const [meme, setMeme] = useState('https://i.imgflip.com/30b1gx.jpg');

  const getMeme = (e) => {
    e.preventDefault();
    const memesArr = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArr.length);
    const url = memesArr[randomNum].url;
    setMeme(url);
  };

  return (
    <main>
      <form className="meme__form">
        <input className="meme__input" type="text" />
        <input className="meme__input" type="text" />
        <button onClick={getMeme} className="meme__button">
          Generate New Meme
        </button>
      </form>

      <div className="meme__container">
        <img src={meme} className="meme__image" alt="meme image" />
      </div>
    </main>
  );
}

export default Body;
