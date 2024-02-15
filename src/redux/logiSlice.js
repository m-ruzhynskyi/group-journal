import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: 'loginLoader',
    initialState:{
        status: true
    },
    reducers:{
        falseStatus(state){
            state.status = false
        },
        trueStatus(state){
            state.status = true
        }
    }
})

export const {falseStatus, trueStatus} = dataSlice.actions
export default dataSlice.reducer