import { createSlice } from "@reduxjs/toolkit"


export const logementsSlice = createSlice(
    {
        name:"logements",
        initialState:{
            logements:null,
        },
        reducers:{
            setlogementsData:(state,{payload})=>{

                state.logements=payload
            },
            getIdLogement : (state, {payload}) => {
                state.logements = state.logements.filter((log) => (log.id == payload,
                    console.log(payload)))
               
            }
        }
    }
)
export default logementsSlice.reducer;
export const {setlogementsData, getIdLogement }=logementsSlice.actions