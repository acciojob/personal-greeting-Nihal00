
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [data, setData] = useState('');

  

  return (
    <div>
        <p>Enter your name:</p>
        <input onInput={(e) => setData(e.target.value)}/>
        <p>Hello {data}!</p>
    </div>
  )
}

export default App
