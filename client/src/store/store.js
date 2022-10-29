import { configureStore } from "@reduxjs/toolkit";
import bookcar from "../reducers/car";

const store = configureStore({
  reducer: { bookcar },
});

export default store;
