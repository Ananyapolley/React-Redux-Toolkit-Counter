

import {createSlice} from "@reduxjs/toolkit";

const PrivacySlice = createSlice({
    name: "privacy",
    initialState: false,
    reducers: {
        togglePrivacy: (state) => {
            return state = !state;
        }
    }
});
export const privacyActions = PrivacySlice.actions;

export default PrivacySlice;