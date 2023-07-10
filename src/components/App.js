
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState('');
  // Add event listener for input change
  function handleDataChange(event) {
    setData(event.target.value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onInput={handleDataChange}/>
        <div>Hello {data}!</div>
    </div>
  )
}

export default App
