import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import TodoApp from '../components/TodoApp';
import { inputTask, addTask } from '../actions/tasks';

// Stateから必要な値を取り出し、ComponenのPropsとしてmapする
function mapStateToProps({ tasks }) {
  return {
    task: tasks.task,
    tasks: tasks.tasks
  };
}

// ActionのDispatchをComponentのPropsとしてmap
function mapDispatchToProps(dispatch) {
  // return object has two keys: addTask, inputTask
  // and it's value are function thats accept 1 arg: task, and return dispatched action.
  return {
    addTask(task) {
      dispatch(addTask(task));
    },
    inputTask(task) {
      dispatch(inputTask(task));
    },
    redirectToFnit() {
      dispatch(push('/fnit'));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);
