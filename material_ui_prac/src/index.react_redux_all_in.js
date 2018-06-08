import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";

const initialState = {
  task: "",
  tasks: []
};

function tasksReducer(state = initialState, action) {
  switch (action.type) {
    case "INPUT_TASK":
      return {
        ...state,
        task: action.payload.task
      };
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

const store = createStore(tasksReducer);

const addTask = task => ({
  type: "ADD_TASK",
  payload: {
    task
  }
});

const inputTask = task => ({
  type: "INPUT_TASK",
  payload: {
    task
  }
});

function TodoApp({ store }) {
  const { task, tasks } = store.getState();

  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={e => store.dispatch(inputTask(e.target.value))}
      />
      <input
        type="button"
        value="add"
        onClick={() => store.dispatch(addTask(task))}
      />
      <ul>
        {tasks.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

function renderApp(store) {
  render(<TodoApp store={store} />, document.getElementById("root"));
}

store.subscribe(() => renderApp(store));
renderApp(store);
