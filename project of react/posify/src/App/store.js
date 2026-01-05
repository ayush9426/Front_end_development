import { configureStore } from "@reduxjs/toolkit";
import  ServiceSlice  from "../slice/ServiceSlice";

export default configureStore({
    reducer : {
       Service : ServiceSlice
    }
})