import React, { useState } from 'react';


const StatePropsComponent = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="state-props">
      <p>Current Count: {count}</p>
      <button className='styled-button' onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default StatePropsComponent;
