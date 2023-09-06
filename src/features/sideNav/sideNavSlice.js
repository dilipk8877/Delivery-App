import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    open: true
}

const SideNavSlice = createSlice({
    name:'sidenav',
    initialState,
    reducers: {
        toggleSideNav: (state) => {
            state.open = state.open ? false : true;
        },
        visibleTriggerHandler: (state, action) => {
            const status = action.payload;
            state.open = status;
        }
    }
})

export const {toggleSideNav, visibleTriggerHandler }  = SideNavSlice.actions;
export default SideNavSlice.reducer;