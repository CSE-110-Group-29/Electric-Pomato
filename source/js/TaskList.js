/* *
 * Author: Andy Young, Annika Hatcher
 * Updated By: (Any names of people who've done some editing of the file)
 * Date: 02/05/2021
 * Github Issue: https://github.com/DonaldWolfson/cse110-w21-group29/issues/13
 * */

/*
TaskList {
  todo: [
    {
      name: String,
      expected: Number,
      actual: Number
    }
    .
    .
    .
    {
      name: String,
      expected: Number,
      actual: Number
    }
  ],
  completed: [
    {
      name: String,
      expected: Number,
      actual: Number
    }
    .
    .
    .
    {
      name: String,
      expected: Number,
      actual: Number
    }
  ]
}
*/

class TaskList {
  /**
   * Constructor for the task list object.
   */
  constructor() {
    // Checks localStorage for TaskList item.
    const stored = JSON.parse(localStorage.getItem('TaskList'));

    if (stored == null) {
      // If null, initialize variables to default value and save to localStorage.
      this.todo = [];
      this.completed = [];
      this.save();
    } else {
      // Otherwise, initialize variables to stored data.
      this.todo = stored.todo;
      this.completed = stored.completed;
    }
  }

  /**
   * Add new task to todo with given name and expected pomodoros.
   * @param {String} name Name of task.
   * @param {Number} expected Expected number of pomodoros.
   */
  add(name, expected) {
    if (typeof name !== 'string') {
      throw new TypeError('expected string');
    }

    if (typeof expected !== 'number') {
      throw new TypeError('expected number');
    }

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
   * @param {Number} index Index of task to remove.
   */
  remove(index) {
    this.todo = this.todo.splice(index, 1);
    this.save();
  }

  /**
   * Update the task at the given index with the given name and expected pomodoros.
   * @param {Number} index Index of task to update.
   * @param {String} name Updated name of task.
   * @param {Number} expected Updated expected number of pomodoros.
   */
  update(index, name, expected) {
    this.todo[index].name = name;
    this.todo[index].expected = expected;
    this.save();
  }

  /**
   * Add a pomodoro to the current task.
   */
  addPomo() {
    this.todo[0].actual++;
    this.save();
  }

  /**
   * Update todo/completed after finishing a task.
   */
  finishTask() {
    task = this.todo[0];
    this.completed.push(task);
    this.save();
  }

  save() {
    localStorage.setItem('TaskList', JSON.stringify({ todo: this.todo, completed: this.completed }));
  }
}

export default TaskList;
