import { combineReducers } from "redux";
import bankList from "./reducers/bankList";
import settingsReducer from "./reducers/settingsReducer";
import archiveReducer from "./reducers/archiveReducer";
import authReducer from './reducers/auth'
import profileReducer from './reducers/profileReducers'
import chartsReducer from "./reducers/chartsReducer";



const combined = combineReducers({
    bankList,
    settingsReducer,
    archiveReducer,
    authReducer,
    profileReducer,
    chartsReducer
});

export default combined;