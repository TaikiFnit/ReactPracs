import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import './TodoApp.css';

export default function TodoApp({
  task,
  tasks,
  inputTask,
  addTask,
  redirectToFnit
}) {
  return (
    <div className="app-container">
      <div>
        <TextField
          id="task"
          label="Task Name"
          value={task}
          onChange={e => inputTask(e.target.value)}
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => addTask(task)}
        >
          Add
        </Button>
        <List>
          <TransitionGroup className="todo-list">
            {tasks.map((item, i) => {
              return (
                <CSSTransition timeout={500} classNames="fade">
                  <ListItem key={i}>
                    <ListItemText primary={`・${item}`} />
                  </ListItem>
                </CSSTransition>
              );
            })}
          </TransitionGroup>
        </List>
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
    </div>
  );
}
