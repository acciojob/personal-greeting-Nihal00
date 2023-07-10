
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState('');

  function handleDataChange(event) {
   
    setData(event.target.value);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onInput={handleDataChange}/>
        <p>Hello {data}!</p>
    </div>
  )
}

export default App
