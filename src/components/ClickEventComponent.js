import React, { useState } from 'react';

const ClickEventComponent = () => {
  const [message, setMessage] = useState("Click the button to see magic!");

  return (
    <div>
      <p>{message}</p>
      <button className='styled-button' onClick={() => setMessage("You clicked the button!")}>
        Click Me!
      </button>
    </div>
  );
};

export default ClickEventComponent;
