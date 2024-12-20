import { configureStore } from "@reduxjs/toolkit";
import userSlices from './userSlices'
const store = configureStore({
    reducer: userSlices,
    // middleware: () => new Tuple(additionalMiddleware, logger),
})

export default store;