import { createStore } from "redux";
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
  const store = createStore(
    Reducer, // This is the reducer function in our reducer.js
    initialState // This is our initial State in reducer.js
  );

  return store;
};
