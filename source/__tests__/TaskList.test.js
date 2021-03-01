import TaskList from '../js/TaskList.js';

test('TaskList Constructor', () => {
  // create new tasklist
  const taskList = new TaskList();

  // check that `todo` and `completed` are empty
  expect(Object.keys(taskList.todo).length).toBe(0);
  expect(Object.keys(taskList.completed).length).toBe(0);
});

// This one is a bit funky, I think TaskList is writing to
// localStorage for every method. This isn't changing anything.
test('TaskList Save', () => {
  // create new tasklist
  const taskList = new TaskList();

  // create a task and add it
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(taskName, taskExpectedPomo);

  // expected json string
  const taskListJsonStringExpected = JSON.stringify({
    todo: taskList.todo,
    completed: taskList.completed,
  });

  // save tasklist
  taskList.save();

  // actual json string
  const taskListJsonString = localStorage.getItem('TaskList');

  // compare json strings
  expect(taskListJsonString).toBe(taskListJsonStringExpected);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
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

  taskList.reset();
});

// Our tasklist implementation requires that it be reset between tests
test('TaskList Reset', () => {
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

test('TaskList Delete Task at Nonexistent Index', () => {
  // create task list
  const taskList = new TaskList();

  // delete task before adding any tasks
  taskList.deleteTask(0);

  // create task
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(taskName, taskExpectedPomo);
  taskList.createTask(taskName, taskExpectedPomo);

  // delete task at index that doesn't have a task
  taskList.deleteTask(2);
  taskList.deleteTask(3);

  // there should be 0 todo tasks and 0 completed tasks
  expect(Object.keys(taskList.todo).length).toBe(2);
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

test('TaskList Update Task at Nonexistent Index', () => {
  // create task list
  const taskList = new TaskList();

  // should be an empty todo list
  expect(Object.keys(taskList.todo).length).toBe(0);

  // update task at nonexistent index
  taskList.updateTask(0, '', 0);

  // should be an empty todo list
  expect(Object.keys(taskList.todo).length).toBe(0);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});

test('TaskList Add Pomo to a Task', () => {
  // create tasklist
  const taskList = new TaskList();

  // create task
  const firstTaskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(firstTaskName, taskExpectedPomo);

  // check to make sure that actual pomos should be 0 before anything happens
  expect(taskList.todo[0].actual).toBe(0);

  // add an actual pomo to the current task (which should be indexed at 0)
  taskList.addPomo();

  // check to see if an actual pomo was added
  expect(taskList.todo[0].name).toBe(firstTaskName);
  expect(taskList.todo[0].expected).toBe(taskExpectedPomo);
  expect(taskList.todo[0].actual).toBe(1);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});

test('TaskList Add Many Pomos to Current Task', () => {
  // create tasklist
  const taskList = new TaskList();

  // create task
  const firstTaskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(firstTaskName, taskExpectedPomo);

  // add a few pomos
  const actualPomos = 90;
  for (let i = 0; i < actualPomos; i += 1) {
    taskList.addPomo();
  }

  // added pomo formerly and then an additional actualPomos amount
  expect(taskList.todo[0].actual).toBe(actualPomos);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});

test('TaskList Finish', () => {
  // create tasklist
  const taskList = new TaskList();

  // create task
  const gtaskName = 'first task';
  const taskExpectedPomo = 3;
  taskList.createTask(gtaskName, taskExpectedPomo);

  // completed list should be 0
  expect(Object.keys(taskList.todo).length).toBe(1);
  expect(Object.keys(taskList.completed).length).toBe(0);

  // finish current task (which should be indexed at 0)
  taskList.finishTask();

  // completed list should be 1 and the todo list should be empty
  expect(Object.keys(taskList.todo).length).toBe(0);
  expect(Object.keys(taskList.completed).length).toBe(1);

  // check to see if completed task is the same as the original task we made
  expect(taskList.completed[0].name).toBe(gtaskName);
  expect(taskList.completed[0].expected).toBe(taskExpectedPomo);
  expect(taskList.completed[0].actual).toBe(0);

  // taskList always tries to initialize from localStorage in proceeding tests
  // so we must reset at the end of tests
  taskList.reset();
});
