import React from 'react'

function App2({childButton2Name}) {
    const clickAgain =()=>{
       childButton2Name('over again')
    }
  return (
    <div>
      <button onClick={()=>clickAgain()}>click second time</button>
    </div>
  )
}

export default App2;
