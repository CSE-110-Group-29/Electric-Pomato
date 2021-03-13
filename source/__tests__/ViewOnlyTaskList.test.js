import { beforeEach } from '@jest/globals';
import ViewOnlyTaskList from '../js/ViewOnlyTaskList.js';
import TaskList from '../js/TaskList.js';

beforeEach(() => {
  document.body.innerHTML = `
  <div class="app-container">
            <div class="app-header">
                <a href="./" class="mb-4 mb-lg-0">
                    <div class="text-white">
                        <h1 class="mb-0">Electric Pomato</h1>
                        <h4 class="mb-0">Plan. Track. Record.</h4>
                    </div>
                </a>
                <h1 class="app-title"></h1>
            </div>
        </div>
    <template id="view-title-template">
      <h2 class="subtitle text-center"></h2>
    </template>
      <template id="edit-header-row-template">
      <div class="row g-0 header row-bordered">
          <div class="d-none d-lg-block col-1"><input type="text" value="#" disabled></div>
          <div class="col-7 col-lg-6"><input type="text" value="Name" disabled></div>
          <div class="col-3"><input type="text" value="Estimated Pomos" disabled></div>
          <div class="col-2"></div>
      </div>
    </template>
    <template id="task-row-template">
      <div class="row g-0 row-bordered">
          <div class="d-none d-lg-block col-lg-1"><input type="number" value="" disabled></div>
          <div class="col-7 col-lg-6"><input type="text" value="" disabled></div>
          <div class="col-3"><input type="number" value="" disabled></div>
          <div class="col-2 actions">
              <div class="edit-remove-container">
                  <i class="fas fa-pencil-alt text-warning edit-icon"></i>
                  <i class="fas fa-trash-alt text-danger remove-icon"></i>
              </div>
              <div class="save-cancel-container">
                  <i class="fas fa-check text-success save-icon"></i>
                  <i class="fas fa-times text-danger cancel-icon"></i>
              </div>
          </div>
      </div>
    </template>
    <template id="view-header-row-template">
      <div class="row g-0 header row-bordered">
          <div class="d-none d-lg-block col-lg-1"><input type="text" value="#" disabled></div>
          <div class="col-6 col-lg-5"><input type="text" value="Name" disabled></div>
          <div class="col-3"><input type="text" value="Estimated Pomos" disabled></div>
          <div class="col-3"><input type="text" value="Actual Pomos" disabled></div>
      </div>
    </template>
    <template id="view-row-template">
      <div class="row g-0 row-bordered">
          <div class="d-none d-lg-block col-lg-1"><input type="number" value="" disabled></div>
          <div class="col-6 col-lg-5"><input type="text" value="" disabled></div>
          <div class="col-3"><input type="number" value="" disabled></div>
          <div class="col-3"><input type="number" value="" disabled></div>
      </div>
    </template>
    <template id="add-row-template">
      <div class="row g-0">
          <div class="d-none d-lg-block col-lg-1"></div>
          <div class="col-7 col-lg-6"><input type="text" value=""></div>
          <div class="col-3"><input type="number" value="" min="1"></div>
          <div class="col-2">
              <button class="btn btn-success btn-block">Add Task</button>
          </div>
      </div>
    </template>
  `;
});

test('Simple ViewOnlyTaskList construction', () => {
  const taskList = new ViewOnlyTaskList();
  taskList.render();
  taskList.connectedCallback();
  expect(true).toBe(true);
});

test('Existing ViewOnlyTaskList construction', () => {
  // Save taskList to localStorage
  const taskList = new TaskList();
  const taskName = 'first task';
  const taskNum = 1;
  taskList.createTask(taskName, taskNum);
  taskList.save();

  // Create ViewOnlyTaskList
  const viewOnlyTaskList = new ViewOnlyTaskList();
  viewOnlyTaskList.render();
  viewOnlyTaskList.connectedCallback();
  expect(viewOnlyTaskList).not.toBeNull();
});

test('Add pomo', () => {
  // Create taskList
  const taskList = new ViewOnlyTaskList();
  const taskName = 'first task';
  const taskNum = 1;
  taskList.data.createTask(taskName, taskNum);
  taskList.data.save();

  // Add pomo
  taskList.addPomo();

  // Check that first task's actual was updated
  expect(taskList.data.todo[0].actual).toBe(1);
});

test('Finish task', () => {
  // Create taskList
  const taskList = new ViewOnlyTaskList();
  const taskName = 'first task';
  const taskNum = 1;
  taskList.data.createTask(taskName, taskNum);
  taskList.data.save();

  // Finish task
  taskList.finishTask();

  // Check that task was moved to completed
  expect(taskList.data.completed[0].name).toBe(taskName);
  expect(taskList.data.completed[0].expected).toBe(taskNum);
  expect(taskList.data.completed[0].actual).toBe(1);
});
