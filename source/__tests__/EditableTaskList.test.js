import EditableTaskList from '../js/EditableTaskList.js';
import TaskList from '../js/TaskList.js';

// Initialize the DOM with a EditableTaskList element.
beforeEach(() => {
  document.body.innerHTML = `
<template id="edit-title-template">
  <div class="row g-0">
      <div class="col-10">
          <h2 class="subtitle">Task List</h2>
      </div>
      <div class="col-2">
          <button class="btn btn-secondary btn-block">Start My Day!</button>
      </div>
  </div>
</template>
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
      <div class="col-3"><input type="number" value="" disabled min=0></div>
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
      <div class="col-3"><input type="number" value="" disabled min=0></div>
      <div class="col-3"><input type="number" value="" disabled min=0></div>
  </div>
</template>
<template id="add-row-template">
  <div class="row g-0">
      <div class="d-none d-lg-block col-lg-1"></div>
      <div class="col-7 col-lg-6"><input type="text" value=""></div>
      <div class="col-3"><input type="number" value="" min=1></div>
      <div class="col-2">
          <button class="btn btn-success btn-block">Add Task</button>
      </div>
  </div>
</template>`;
});

test('Blank Test', () => {
  const editableTaskList = new EditableTaskList();
  expect(editableTaskList).not.toBeNull();
});

test('Load Existing TaskList', () => {
  // save a tasklist into localstorage
  const taskList = new TaskList();
  const taskName = 'first task';
  const taskNum = 1;
  taskList.createTask(taskName, taskNum);
  taskList.save();

  const editableTaskList = new EditableTaskList();
  expect(editableTaskList).not.toBeNull();
});
