import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// read data
export const readdata = createAsyncThunk(
    "readdata" , async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get("http://localhost:3000/user")
            const result = res.data;
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// add user
export const adduser = createAsyncThunk(
    "adduser",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post("http://localhost:3000/user",data)
            const resp = res.data
            return resp
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const UserSlice = createSlice({
    name:"details",
    initialState:{
        loading:true,
        users:[],
        error:""
    },
    reducers:{
        Userpending:(state,action)=>{
            state.loading = true
            state.error = ""
        },
        Userfulfilled:(state,action)=>{
            state.loading = false
            state.users.push(action.payload)
        },
        Userreject:(state,action)=>{
            state.loading = false
            state.error = action.payload
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(readdata.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readdata.fulfilled,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
        .addCase(readdata.rejected,(state,action)=>{
            state.loading = false
            state.users = action.payload
        })
    }
})

export const {Userpending,Userfulfilled,Userreject}= UserSlice.actions;
export default UserSlice.reducer;