import { configureStore } from "@reduxjs/toolkit";
import  Serviceslice  from "../Slice/Serviceslice";

export default configureStore({
    reducer : {
        service : Serviceslice
    }
})