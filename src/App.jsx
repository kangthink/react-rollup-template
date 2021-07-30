import React, { useState } from 'react';
import { welcome } from './util'

function Counter() {

  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>React-Rollup {count}</h1>
      <button onClick={() => setCount(c => c+1)}> 증가</button>
    </div>
  )
}

function App(){
  return <>
    <h1>{welcome()}</h1>
    <Counter />
  </>
}

export default App;
