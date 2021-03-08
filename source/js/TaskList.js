/**
 * @file Holds the code the general functionality of the TaskList.
 * @author Andy Young
 * @author Annika Hatcher
 * @author Arman Mansourian
 * Date: 03/07/2021
 */

/**
 * Creates the TaskList class and define its helper functions.
 */
class TaskList {
  /**
   * Constructor for the TaskList object.
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
   * Reset instance variables to default empty value and save to localStorage.
   */
  reset() {
    this.todo = [];
    this.completed = [];
    this.save();
  }

  /**
   * Save the instance variables to localStorage.
   */
  save() {
    // Writes a stringified object with instance variables of TaskList to localStorage.
    localStorage.setItem('TaskList', JSON.stringify({ todo: this.todo, completed: this.completed }));
  }

  /**
   * Add new task to todo with given name and expected pomodoros.
   * @param {string} name - Name of task.
   * @param {number} expected - Expected number of pomodoros.
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
   * Remove task from todo at given index.
   * @param {number} index - Index of task to remove.
   */
  deleteTask(index) {
    this.todo.splice(index, 1);
    this.save();
  }

  /**
   * Update the task at the given index with the given name and expected pomodoros.
   * @param {number} index - Index of task to update.
   * @param {string} name - Updated name of task.
   * @param {number} expected - Updated expected number of pomodoros.
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
   * Add a pomodoro to the current task.
   */
  addPomo() {
    this.todo[0].actual += 1;
    this.save();
  }

  /**
   * Update todo/completed after finishing a task.
   */
  finishTask() {
    const current = this.todo[0];

    this.completed.push(current);
    this.deleteTask(0);
  }
}

export default TaskList;
