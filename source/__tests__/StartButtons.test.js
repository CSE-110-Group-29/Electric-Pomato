import { describe, expect, test } from '@jest/globals';
import StartButtons from '../js/StartButtons.js';
import TaskList from '../js/TaskList.js';

describe('StartButtons tests', () => {
  test('Simple Constructor', () => {
    const startButtons = new StartButtons();

    // start buttons generate two child start containers
    expect(startButtons.childElementCount).toBe(2);
    expect(startButtons.lastChild.nodeName).toBe('DIV');
    expect(startButtons.firstChild.nodeName).toBe('DIV');
  });

  test('Constructor When TaskList is not empty', () => {
    // make a non empty task list and save to local storage
    const taskList = new TaskList();
    taskList.createTask('first task', 1);
    taskList.save();

    // create buttons
    const startButtons = new StartButtons();

    // start buttons generate two child buttons
    expect(startButtons.childElementCount).toBe(2);

    // right child button has another child element
    expect(startButtons.lastChild.childElementCount).toBe(1);
  });
});
