import {configureStore} from "@reduxjs/toolkit";
import dataReducer from './dataSlice'
import loginReducer from './logiSlice'

export default configureStore({
    reducer:{
        data: dataReducer,
        login: loginReducer
    }
})