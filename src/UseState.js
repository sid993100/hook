// import React from 'react';

//now we done this using hooks

import React, {useState} from 'react';

function UseState() {
  // const email=
  // const setEmail=
  const [state, setState]=useState(0);
  const update =()=>{
    setState(state + 1);
   }

  const emailState = useState('a@a.com');
  const email= emailState[0];
  const setEmail=emailState[1];

  function handleChange(e){
    setEmail(e.target.value)
  }

 
  
  return (
    <div className='App'>
      <button onClick={update}>Hello</button>
      <p>{state}</p>


      <input 
      value={email}
      onChange={handleChange}
      />
       <p>Email: {email}</p>
    </div>
  );
}

export default UseState;
