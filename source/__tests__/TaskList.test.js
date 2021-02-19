const { TaskList } = require('../js/TaskList');

/**
 * Functionality that I [Enrique] cannot figure out how to
 * do in jest: save (to localStorage) and read (from localStorage).
 * EDIT: nvm. For some reason, jest actually uses a mocked local storage
 * that is initialized at the beginning of this test suite.
 */

test('TaskList Constructor', () => {
  // create new tasklist
  const taskList = new TaskList();

  // check that `todo` and `completed` are empty
  expect(Object.keys(taskList.todo).length).toBe(0);
  expect(Object.keys(taskList.completed).length).toBe(0);
});

test('TaskList Create 1 Task', () => {
  // create new tasklist
  const taskList = new TaskList();

  // create a task and add it
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(taskName, taskExpectedPomo);

  // there should be 1 todo task and 0 completed tasks
  expect(Object.keys(taskList.todo).length).toBe(1);
  expect(Object.keys(taskList.completed).length).toBe(0);

  // check that the properties were correctly placed
  expect(taskList.todo[0].name).toBe(taskName);
  expect(taskList.todo[0].expected).toBe(taskExpectedPomo);
});

// Our tasklist implementation requires that it be reset between tests
test('TaskList reset', () => {
  const taskList = new TaskList();
  taskList.reset();

  // there should be 0 todo tasks and 0 completed tasks
  expect(Object.keys(taskList.todo).length).toBe(0);
  expect(Object.keys(taskList.completed).length).toBe(0);
});

test('TaskList Creating Many Tasks', () => {
  // create new tasklist
  const taskList = new TaskList();

  // create tasks and add them
  const numTasks = 10;
  for (let i = 0; i < numTasks; i += 1) {
    // name them from 0 to numTasks
    const taskName = `task number: ${i}`;
    const taskExpectedPomo = i;
    taskList.createTask(taskName, taskExpectedPomo);
  }

  // there should be 1 todo task and 0 completed tasks
  expect(Object.keys(taskList.todo).length).toBe(numTasks);
  expect(Object.keys(taskList.completed).length).toBe(0);

  // check that the tasks were correctly placed
  for (let i = 0; i < numTasks; i += 1) {
    // tasks were placed in order from 0 to numTasks
    expect(taskList.todo[i].name).toBe(`task number: ${i}`);
    expect(taskList.todo[i].expected).toBe(i);
  }

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});

test('TaskList Delete Task', () => {
  // create task list
  const taskList = new TaskList();

  // create task
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(taskName, taskExpectedPomo);
  taskList.createTask(taskName, taskExpectedPomo);

  // delete task
  taskList.deleteTask(1);
  taskList.deleteTask(0);

  // delete task at index that doesn't exist
  taskList.deleteTask(0);

  // there should be 0 todo tasks and 0 completed tasks
  expect(Object.keys(taskList.todo).length).toBe(0);
  expect(Object.keys(taskList.completed).length).toBe(0);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});

test('TaskList Update Task', () => {
  // create task list
  const taskList = new TaskList();

  // create task
  const firstTaskName = 'first task';
  const secondTaskName = 'second task';
  const taskExpectedPomo = 3;
  taskList.createTask(firstTaskName, taskExpectedPomo);
  taskList.createTask(secondTaskName, taskExpectedPomo);

  // something
  expect(taskList.todo[0].name).toBe(firstTaskName);
  expect(taskList.todo[0].expected).toBe(taskExpectedPomo);
  expect(taskList.todo[1].name).toBe(secondTaskName);
  expect(taskList.todo[1].expected).toBe(taskExpectedPomo);

  // update the first task which indexed at 0
  const newName = 'new name';
  const newPomo = 5;
  taskList.updateTask(0, newName, newPomo);

  // first task should be modified
  expect(taskList.todo[0].name).toBe(newName);
  expect(taskList.todo[0].expected).toBe(newPomo);
  expect(taskList.todo[1].name).toBe(secondTaskName);
  expect(taskList.todo[1].expected).toBe(taskExpectedPomo);

  // update second task
  taskList.updateTask(1, newName, newPomo);

  // first and second task should be modified now
  expect(taskList.todo[0].name).toBe(newName);
  expect(taskList.todo[0].expected).toBe(newPomo);
  expect(taskList.todo[1].name).toBe(newName);
  expect(taskList.todo[1].expected).toBe(newPomo);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});

test('Add Pomo to a Task', () => {
  expect(true).toBe(true);
});
