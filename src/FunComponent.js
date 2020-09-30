import React, { useState } from 'react';

function FunComponent() {
  const [is_round, setIsRound] = useState(false);
  function round(val) {
    setIsRound(true);
    console.log('Hi ' + val);
  }

  const reset = () => {
    setIsRound(false);
    console.log('How are you?');
  }
  return (
    <div align="center">
      <h1>Function Component</h1>
      <div style={{ width: '200px', height: '200px', background: 'green', margin: '50px', borderRadius: (is_round) ? '50%' : 0 }}></div>
      <div style={{ margin: '50px' }}>
        <button onClick={() => round('Ravi')}>Round</button> <button onClick={reset}>Reset</button>
      </div>

    </div>
  )
}

export default FunComponent;
