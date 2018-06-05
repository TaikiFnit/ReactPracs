import { createStore, combineReducers } from "redux";

const initialState = {
  tasks: []
};

const initialUserState = {
  users: []
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TASK":
      console.log("in tasksReducer");
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

function loginReducer(state = initialUserState, action) {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: state.users.concat([action.payload.user])
      };
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({ tasks: tasksReducer, users: loginReducer })
);

function handleChange() {
  console.log("in handle Change");
  console.log(store.getState()["tasks"]);
}

const unsubscribe = store.subscribe(handleChange);

const addTask = task => ({
  type: "ADD_TASK",
  payload: {
    task
  }
});

console.log("Fnit");
console.log(store.getState());

store.dispatch(addTask("Storeを学ぶ"));
store.dispatch(addTask("Storeを学ぶ2"));

unsubscribe();

store.dispatch(addTask("Storeを学ぶ3"));
