import { createAction, createReducer } from "@reduxjs/toolkit";
import {RootState} from "../store";

export const initialAppState = {
    navBarVisible: true,
    userLoggedIn: false,
}

const setUserLoggedIn = createAction<boolean>("app/setUserLoggedIn");
const setNavBarVisible = createAction<boolean>("app/setNavBarVisible");

export const appReducer = createReducer(initialAppState, (builder)=>{
    builder
        .addCase(setNavBarVisible, (state, action) => {
            state.navBarVisible = action.payload;
        })
        .addCase(setUserLoggedIn, (state,action) => {
            state.userLoggedIn = action.payload;
        })
})

export const getNavBarVisible = (state: RootState) => {
    return state.appReducer.navBarVisible;
}

export const getUserLoggedIn = (state: RootState) => {
    return state.appReducer.userLoggedIn;
}