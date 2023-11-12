import { configureStore } from "@reduxjs/toolkit";

import { dishReducer } from "./slices/dish";
import { supplementsReducer } from "./slices/supplements";

const store = configureStore({
  reducer: {
    dish: dishReducer,
    supplements: supplementsReducer,
  },
});

export default store;
