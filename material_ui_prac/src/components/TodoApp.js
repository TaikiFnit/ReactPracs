import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

export default function TodoApp({
  task,
  tasks,
  inputTask,
  addTask,
  redirectToFnit
}) {
  return (
    <div>
      <TextField
        id="task"
        label="Task Name"
        value={task}
        onChange={e => inputTask(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={() => addTask(task)}>
        Add
      </Button>
      <ul>
        {tasks.map((item, i) => {
          return <li key={i}>{item}</li>;
        })}
      </ul>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          redirectToFnit();
        }}
      >
        Redirect To Fnit
      </Button>
    </div>
  );
}
