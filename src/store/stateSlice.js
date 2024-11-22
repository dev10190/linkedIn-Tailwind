import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    businessBtn : false,
    profileBtn: false,
}

const stateSlice = createSlice({
    name: 'stateManage',
    initialState,
    reducers : {
        show : (state) => {
            state.status = true
        },
        dontShow : (state) => {
            state.status = false
        },
        showProfile : (state) => {
            state.status = true
        },
        dontShowProfile : (state) => {
            state.status = false
        },
        businessState: (state, action) => {
            state.businessBtn = !state.businessBtn;
            state.profileBtn = false
        },
        profileState : (state) => {
            state.profileBtn = !state.profileBtn;
            state.businessBtn = false
        },
        closeAll : (state) => {
            state.profileBtn = false,
            state.businessBtn = false
        }
    }
})

export const {show, dontShow, showProfile, dontShowProfile, businessState, profileState, closeAll } = stateSlice.actions

export default stateSlice.reducer