import { configureStore } from "@reduxjs/toolkit";
import LogementsReducer from "../Features/Logements.slice";

export default configureStore(
    {
        reducer:{
            logements:LogementsReducer ,
        },
    }
)