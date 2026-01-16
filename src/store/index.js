import { configureStore} from "@reduxjs/toolkit";
import counterSlice from "./Counter.js";
import PrivacySlice from "./Privacy.js";

const counterStore = configureStore({reducer: {counter: counterSlice.reducer, privacy: PrivacySlice.reducer}});

export default counterStore;