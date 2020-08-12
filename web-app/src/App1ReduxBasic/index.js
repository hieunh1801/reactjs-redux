import React from "react";
import { createStore } from "redux";
// Khai bao action
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const actionIncrement = (amount) => {
  return {
    type: INCREMENT,
    payload: { amount },
  };
};

const actionDecrement = (amount) => {
  return {
    type: DECREMENT,
    payload: { amount },
  };
};

// INITIAL STATE
const initialState = 0;

const reducerCounter = (preState = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      const { amount: incrementAmount = 0 } = action.payload;
      console.log("reducerCounter - INCREMENT");
      return preState + incrementAmount;
    case DECREMENT:
      console.log("reducerCounter - DECREMENT");
      const { amount: decrementAmount = 0 } = action.payload;
      return preState - decrementAmount;
    default:
      console.log("reducerCounter - default");
      return preState;
  }
};

// 1. Khoi tao store
const store = createStore(reducerCounter);

// 2. Lay ra state
let state = store.getState();
console.log("Create store success state=", state);

// 3. Cap nhat store
store.dispatch(actionIncrement(5));
state = store.getState();
console.log("Increment 5 unit state=", state);

store.dispatch(actionDecrement(2));
state = store.getState();
console.log("actionDecrement 2 unit state=", state);

// Xem gia tri state sau khi cap nhat
const App1ReduxBasic = () => {
  return <h1>Redux Basic</h1>;
};

export default App1ReduxBasic;
