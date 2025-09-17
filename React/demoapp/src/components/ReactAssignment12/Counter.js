import { useState, useEffect } from 'react'

function Counter() {
  const [counter, setCounter] = useState( 0 ) 

  let updateCount = ()=>{
    setCounter(counter + 1)
  }

  useEffect(()=>{
    console.log(`Counter: ${counter}`)
  },[counter])

  return (
    <div>
      <h1>Counter: { counter } </h1>
      <button onClick={ updateCount } >Increment +1</button>  
      <button onClick={ () => setCounter(counter - 1) }>Decrement -1</button>  
    </div>  
  );
}

export default Counter;
