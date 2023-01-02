import { createAction, createReducer } from "@reduxjs/toolkit";
import {RootState} from "../store";

export const initialAppState = {
    navBarVisible: true,
}

const setNavBarVisible = createAction<boolean>("app/setNavBarVisible");

export const appReducer = createReducer(initialAppState, (builder)=>{
    builder
        .addCase(setNavBarVisible, (state, action) => {
            state.navBarVisible = action.payload;
        })
})

export const getNavBarVisible = (state: RootState) => {
    return state.appReducer.navBarVisible
}
