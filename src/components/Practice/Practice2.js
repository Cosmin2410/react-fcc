import React, { useState } from 'react';

function Practice2() {
  const [randomNum, setRandomNum] = useState(0);

  const createRandomNum = () => {
    console.log(true);
  };

  return (
    <div className="practice__2">
      <h1>{randomNum}</h1>
      <button onClick={createRandomNum}>Generate A Random Num</button>
    </div>
  );
}

export default Practice2;
