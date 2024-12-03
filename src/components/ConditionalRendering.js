import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? <p>Welcome, User!</p> : <p>Please log in.</p>}
      <button className='styled-button' onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>
    </div>
  );
};

export default ConditionalRendering;
