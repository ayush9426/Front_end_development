import { configureStore } from "@reduxjs/toolkit";
import  ServiceSlice  from "../Slice/ServiceSlice";
import  FeatureSlice  from "../Slice/FeatureSlice";
import TeamSlice  from "../Slice/TeamSlice";

export default configureStore({
    reducer : {
        service : ServiceSlice,
        feature : FeatureSlice,
        team    : TeamSlice
    }
})