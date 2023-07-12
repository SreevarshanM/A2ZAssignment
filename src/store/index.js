import { createStore } from "redux";

const counterReducer = (state = { data: [0], selectedUser: {} }, action) => {
  if (action.type === "add") {
    let list = [];
    state.data.map((val) => {
      list.push(val);
    });
    list.push(0);
    return {
      data: list,
      selectedUser: state.selectedUser,
    };
  }
  if (action.type === "selectedUser") {
    console.log(1);
    return {
      selectedUser: action.data,
      data: state.data,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
