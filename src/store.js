import { configureStore, createSlice } from "@reduxjs/toolkit";

// 이메일계정 상태 - true : 로그인, false : 로그아웃
let emailAccountState = createSlice({
    name: "emailAccountState",
    initialState: false,
});


export default configureStore({
    reducer: {
        emailAccountState : emailAccountState.reducer,
    }
})
