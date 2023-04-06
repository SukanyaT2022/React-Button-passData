import React from 'react'

function App1(props) {
    const varData =()=>{
        props.childName('name')
    }
  return (
    <div>
        <button onClick={()=>varData}>Click here plz</button>
      
    </div>
  )
}

export default App1
