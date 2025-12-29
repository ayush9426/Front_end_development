import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const featureread = createAsyncThunk(
    "featureread",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.get(`http://localhost:3000/feature`)
            const result = await res.data
            return result
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)

export const featureadd = createAsyncThunk(
    "featureadd",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.post(`http://localhost:3000/feature`,data)
            const result = await res.data
            return result
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)

export const featuredel = createAsyncThunk(
    "featuredel",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/feature/${data}`)
            const result = await res.data
            return result
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)

export const featureedit = createAsyncThunk(
    "featureedit",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.put(`http://localhost:3000/feature/${data.id}`,data)
            const result = await res.data
            return result
        } catch (error) {
            return  rejectWithValue(error)
        }
    }
)






export const FeatureSlice = createSlice({
    name:"data",
    initialState:{
        pending:true,
        features:[],
        error:""
    },
    reducers :{
        Featurepending:(state,action)=>{
           state.loading  = true,
           state.error = ""
        },
        Featurefulfilled:(state,action)=>{
            state.loading = false,
            state.features.push(action.payload)
        },
        Featurereject:(state,action)=>{
            state.loading = false,
            state.error = action.payload
        }
    } ,

    extraReducers:(builder)=>{
        builder

        // read
        .addCase(featureread.pending,(state,action)=>{
            state.loading = true
        })
         .addCase(featureread.fulfilled,(state,action)=>{
            state.loading = false,
            state.features = action.payload
        })
         .addCase(featureread.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })

        // delete
        .addCase(featuredel.pending,(state,action)=>{
            state.loading = true
        })
         .addCase(featuredel.fulfilled,(state,action)=>{
            state.loading = false,
            state.features = state.features.filter((data,index)=> data.id != action.payload)
        })
         .addCase(featuredel.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })

        // edit
        .addCase(featureedit.pending,(state,action)=>{
            state.loading = true
        })
         .addCase(featureedit.fulfilled,(state,action)=>{
            state.loading = false,
            state.features = state.features.map((data,index)=>{
                data.id = action.payload.id ? action.payload : data
            })
        })
         .addCase(featureedit.rejected,(state,action)=>{
            state.loading = false,
            state.error = action.payload
        })
    }
})

export const {Featurepending,Featurefulfilled,Featurereject} = FeatureSlice.actions
export default FeatureSlice.reducer
