import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// readdata
export const readdata = createAsyncThunk(
    "readdata",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get(`http://localhost:3000/service`)
            const result = await res.data
            return result
        } catch (error) {
          return  rejectWithValue(error)
        }
    }
)

// adddata
export const adddata = createAsyncThunk(
    "adddata",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post(`http://localhost:3000/service`,data)
            const result = await res.data
            return result
        } catch (error) {
          return  rejectWithValue(error)
        }
    }
) 

// deletedata
export const deletedata = createAsyncThunk(
    "deletedata",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/service/${data}`)
            const result = await res.data
            return result
        } catch (error) {
          return  rejectWithValue(error)
        }
    }
)

// editdata/updatedata
export const editdata = createAsyncThunk(
    "editdata",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.put(`http://localhost:3000/service/${data.id}`,data)
            const result = await res.data
            return result
        } catch (error) {
          return  rejectWithValue(error)
        }
    }
)

export const ServiceSlice = createSlice({
    name:"data",
    initialState:{
        pending:true,
        services:[],
        error:""
    },

    reducers:{
        Servicepending : (state,action)=>{
            state.loading = true,
            state.error = ""
        },
        Servicefulfilled : (state,action)=>{
            state.loading = false,
            state.services.push(action.payload)
        },
        Servicereject : (state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    },

    extraReducers : (builder)=>{
        builder 

        // readdata
        .addCase(readdata.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(readdata.fulfilled,(state,action)=>{
            state.loading = false,
            state.services = action.payload
        })
        .addCase(readdata.rejected,(state,action)=>{
            state.loading = false ,
            state.error = action.payload
        })

        // deletedata 
        .addCase(deletedata.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(deletedata.fulfilled,(state,action)=>{
            state.loading = false,
            // filter method 
            state.services = state.services.filter((data,index)=>data.id != action.payload)
        })
        .addCase(deletedata.rejected,(state,action)=>{
            state.loading = false ,
            state.error = action.payload
        })

        
        // editdata
        .addCase(editdata.pending,(state,action)=>{
            state.loading = true
        })
        .addCase(editdata.fulfilled,(state,action)=>{
            state.loading = false,
            // map method 
            state.services = state.services.map((data,index)=>{
                data.id = action.payload.id ? action.payload : data
            })
        })
        .addCase(editdata.rejected,(state,action)=>{
            state.loading = false ,
            state.error = action.payload
        })
            
    }
            
})


export const {Servicepending,Servicefulfilled,Servicereject} = ServiceSlice.actions
export default ServiceSlice.reducer


