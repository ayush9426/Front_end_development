import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//read
export const teamread = createAsyncThunk(
    "teamread", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.get(`http://localhost:3000/team`)
            const result = await res.data
            return result

        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// adddata
export const teamadd = createAsyncThunk(
    "teamadd", async (data, { rejectWithValue }) => {
        try {
            const res = await axios.post(`http://localhost:3000/team`, data)
            const result = await res.data
            return result
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

// deletedata
export const teamdel = createAsyncThunk(
    "teamdel",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.delete(`http://localhost:3000/team/${data}`)
            const result = await res.data
            return result
        } catch (error) {
          return  rejectWithValue(error)
        }
    }
)

// editdata/updatedata
export const teamedit = createAsyncThunk(
    "teamedit",async(data,{rejectWithValue})=>{
        try {
            const res = await axios.put(`http://localhost:3000/team/${data.id}`,data)
            const result = await res.data
            return result
        } catch (error) {
          return  rejectWithValue(error)
        }
    }
)




export const TeamSlice = createSlice({
    name: "data",
    initialState: {
        pending: true,
        teams: [],
        error: ""
    },

    reducers: {
        Teampending: (state, action) => {
            state.loading = true,
                state.error = ""
        },
        Teamfulfilled: (state, action) => {
            state.loading = false,
                state.teams.push(action.payload)
        },
        Teamreject: (state, action) => {
            state.loading = false,
                state.error = action.payload
        }
    },

    extraReducers: (builder) => {
        builder

            // readdata
            .addCase(teamread.pending, (state, action) => {
                state.loading = true
            })
            .addCase(teamread.fulfilled, (state, action) => {
                state.loading = false,
                    state.teams = action.payload
            })
            .addCase(teamread.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

            // delete data
            .addCase(teamdel.pending, (state, action) => {
                state.loading = true
            })
            .addCase(teamdel.fulfilled, (state, action) => {
                state.loading = false,
                    state.teams = state.teams.filter((data,index)=> data.id !=  action.payload)
            })
            .addCase(teamdel.rejected, (state, action) => {
                state.loading = false,
                    state.error = action.payload
            })

             // editdata
                    .addCase(teamedit.pending,(state,action)=>{
                        state.loading = true
                    })
                    .addCase(teamedit.fulfilled,(state,action)=>{
                        state.loading = false,
                        // map method 
                        state.teams = state.teams.map((data,index)=>{
                            data.id = action.payload.id ? action.payload : data
                        })
                    })
                    .addCase(teamedit.rejected,(state,action)=>{
                        state.loading = false ,
                        state.error = action.payload
                    })

    }

})


export const { Teampending, Teamfulfilled, Teamreject } = TeamSlice.actions
export default TeamSlice.reducer

