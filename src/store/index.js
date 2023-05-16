import redux from "redux";

import { CounterActionTypes } from "../enums/counter-action-types";

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === CounterActionTypes.INC) {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === CounterActionTypes.DEC) {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer);

export default store;
