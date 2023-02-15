import React from 'react';

function App() {
  const email=
  const setEmail=
  
  function handleChange(e){
    setEmail(e.target.value)
  }

  
  return (
    <div>
      <input 
      value={email}
      onChange={handleChange}
      />
    </div>
  )
}

export default App
