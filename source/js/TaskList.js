/**
 * @file Holds the code the general functionality of the TaskList.
 * @author Andy Young
 * @author Annika Hatcher
 * Date: 03/04/2021
 */

/**
 * @classdesc Creates the TaskList class and define its helper functions.
 */
class TaskList {
  /**
   * @class Constructor for the TaskList object.
   */
  constructor() {
    // Checks localStorage for TaskList item.
    const stored = JSON.parse(localStorage.getItem('TaskList'));

    if (stored == null) {
      // If null, initialize variables to default value and save to localStorage.
      this.reset();
    } else {
      // Otherwise, initialize variables to stored data.
      this.todo = stored.todo;
      this.completed = stored.completed;
    }
  }

  /**
   * @function Reset instance variables to default empty value and save to localStorage.
   */
  reset() {
    this.todo = [];
    this.completed = [];
    this.save();
  }

  /**
   * @function Save the instance variables to localStorage.
   */
  save() {
    // Writes a stringified object with instance variables of TaskList to localStorage.
    localStorage.setItem('TaskList', JSON.stringify({ todo: this.todo, completed: this.completed }));
  }

  /**
   * @function Add new task to todo with given name and expected pomodoros.
   * @param {String} name Name of task.
   * @param {Number} expected Expected number of pomodoros.
   */
  createTask(name, expected) {
    // Put inputs into a task object with initial actual value of 0.
    const task = {
      name,
      expected,
      actual: 0,
    };

    // Push task into todo list.
    this.todo.push(task);
    this.save();
  }

  /**
   * @function Remove task from todo at given index.
   * @param {Number} index Index of task to remove.
   */
  deleteTask(index) {
    this.todo.splice(index, 1);
    this.save();
  }

  /**
   * @function Update the task at the given index with the given name and expected pomodoros.
   * @param {Number} index Index of task to update.
   * @param {String} name Updated name of task.
   * @param {Number} expected Updated expected number of pomodoros.
   */
  updateTask(index, name, expected) {
    const todoListSize = Object.keys(this.todo).length;
    if (index >= todoListSize) {
      return;
    }
    this.todo[index].name = name;
    this.todo[index].expected = expected;
    this.save();
  }

  /**
   * @function Add a pomodoro to the current task.
   */
  addPomo() {
    this.todo[0].actual += 1;
    this.save();
  }

  /**
   * @function Update todo/completed after finishing a task.
   */
  finishTask() {
    const current = this.todo[0];

    this.completed.push(current);
    this.deleteTask(0);
  }
}

export default TaskList;
