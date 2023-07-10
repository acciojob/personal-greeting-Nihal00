
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState('');
  // Add event listener for input change
  function handleDataChange(event) {
    let ans = "Hello " + event.target.value + "!";
    setData(ans);
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
