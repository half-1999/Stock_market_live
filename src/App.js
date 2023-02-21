import React, { useState } from 'react'
import Bar1 from './Bar1'
import './index.css'



function App() {
  const [val, setVal] = useState('')
  // const data = ["Stock1","Stock2","Stock3","Stock4"]

const [show,setShow] = useState(false)



  return (
    <>
      <div className='container'>
        <img src="https://i.pinimg.com/originals/e9/e2/78/e9e2787d0cb55d570fe1c76843506759.jpg" height={100} width={100} className='imga' alt="No image" />
        <div className='main'>
          <input list='data' onChange={(e) => setVal(e.target.value)} placeholder='Search Here' />
          <datalist id='data'>
            <button onClick={()=>{setShow(!show)}}><option>Stock1</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock2</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock3</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock4</option></button>
            <button onClick={()=>{setShow(!show)}}><option>Stock5</option></button>
          </datalist>
          <h1 id='val'>{val}</h1>
        </div>
          <button onClick={()=>{setShow(!show)}}>Submit</button>
      {show && <Bar1/>}
      </div>
          

    

    </>
  )
}


export default App;