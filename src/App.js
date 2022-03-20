import React from 'react'
import { useSelector,useDispatch } from 'react-redux'



function App() {
  const counter = useSelector((state)=>state.counter)
const dispatch = useDispatch()
  const increase =()=>{
    dispatch({type:'inc'})
  }
  const decrease =()=>{
    dispatch({type:'dec'})
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={increase} className='btn btn-success'>Increase</button>
      <button onClick={decrease} className='btn btn-danger'>Decrease</button>
    </div>
  )
}

export default App