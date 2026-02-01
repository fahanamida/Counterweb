import { createSlice } from "@reduxjs/toolkit";

const counterSlice=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count++
        },
        reset:(state)=>{
            state.count=0
        },
        decrement:(state)=>{
            state.count--
        },
        incrementByAmount:(state,payload)=>{
            console.log(payload.payload)
            state.count+=parseInt(payload.payload)
        }
    }
})

export default counterSlice.reducer
export const {increment,reset,decrement,incrementByAmount}=counterSlice.actions