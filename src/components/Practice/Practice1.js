import React, { useState } from 'react';

function Practive() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum((prevNum) => prevNum + 1);
  };

  const decrement = () => {
    setNum((prevNum) => prevNum - 1);
  };

  const reset = () => {
    setNum(0);
  };

  return (
    <div className="practice__container">
      <p className="practice__num">{num}</p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Practive;
