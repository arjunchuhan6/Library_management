import { configureStore } from "@reduxjs/toolkit";
import Formreducer from "./formSlice.js";

const appStore = configureStore ({
    reducer: {
        Form: Formreducer,
      }
})

export default appStore;