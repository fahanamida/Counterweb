import { configureStore } from "@reduxjs/toolkit"
import counterSliceReducer from './slices/counterSlice'

const store=configureStore({
    reducer:{
        counterReducer:counterSliceReducer,
    }
})

export default store