import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,reset,decrement,incrementByAmount} from '../Redux/slices/counterSlice'

function Counter() {
    const count=useSelector(state=>state.counterReducer.count)
    console.log(count)

    const dispatch=useDispatch()
    const [amount,setAmount]=React.useState(0)
    // console.log(amount)
  return (
    <>
      <div className='d-flex justify-content-center align-items-center min-vh-100 bg-dark'> 
        <div className='border border-2 p-3'>
           <h3 className='text-light text-center'>Counter</h3>
           <h4 className='text-light text-center'>{count}</h4>
           <div className='d-flex gap-3'>
                <button className='btn btn-success'onClick={()=>{dispatch(increment())}}>+ Increment </button>
                <button className='btn btn-info'onClick={()=>{dispatch(reset())}}>Reset</button>
                <button className='btn btn-danger'onClick={()=>{dispatch(decrement())}}>- Decrement </button>
           </div>
           <div className='w-100 gap-4 my-2'>
              <input type="text" className='form-control  mt-2 w-100'onChange={(e)=>{setAmount(e.target.value)}} />
              <button className='btn btn-warning w-25 mt-2'onClick={()=>{dispatch(incrementByAmount(amount))}}>Add</button>
           </div>
        </div>
     </div>
    </>
  )
}

export default Counter
