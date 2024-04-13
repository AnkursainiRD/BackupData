import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mydata:localStorage.getItem('myData')?JSON.parse(localStorage.getItem("myData")):null
}
const Dataslice=createSlice({
    name:"data",
    initialState:initialState,
    reducers:{
        addData:(state,action)=>{
            state.mydata=action.payload
        }
    }
})

export const {addData}=Dataslice.actions
export default Dataslice.reducer