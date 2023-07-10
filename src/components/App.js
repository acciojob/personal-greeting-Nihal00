
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState('');

  function handleDataChange(event) {
    
    setData(`hello ${ans}!`);
  }

  return (
    <div>
        {/* Do not remove the main div */}
        <p>Enter your name:</p>
        <input onInput={handleDataChange}/>
        <p>{data}</p>
    </div>
  )
}

export default App
