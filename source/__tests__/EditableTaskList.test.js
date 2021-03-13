import EditableTaskList from '../js/EditableTaskList.js';
import EditableTaskListInput from '../js/EditableTaskListInput.js';
import EditableTaskListBody from '../js/EditableTaskListBody.js';
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

test('Reset TaskListInput', () => {
  // Create new EditableTaskListInput
  const editableTaskListInput = new EditableTaskListInput();

  // connectedCallback just calls reset()
  editableTaskListInput.connectedCallback();

  // Check that input values were reset to ''
  expect(editableTaskListInput.nameInput.value).toBe('');
  expect(editableTaskListInput.expectedInput.value).toBe('1');
});

test('Check updateButtonState() For EditableTaskListInput', () => {
  // Create new EditableTaskListInput
  const editableTaskListInput = new EditableTaskListInput();

  // connectedCallback just calls reset()
  editableTaskListInput.updateButtonState();

  // Check that button is disabled
  expect(editableTaskListInput.button.disabled).toBe(true);

  // Fill in valid values
  editableTaskListInput.nameInput.value = 'first task';
  editableTaskListInput.expectedInput.value = 3;

  // Call updateButtonState() again
  editableTaskListInput.updateButtonState();

  // Button should not be disabled now
  expect(editableTaskListInput.button.disabled).toBe(false);
});

test('Add Row From EditableTaskListBody', () => {
  // Create new EditableTaskListBody
  const editableTaskListInput = new EditableTaskListInput();
  const editableTaskListBody = new EditableTaskListBody(editableTaskListInput);

  // Reset data for testing purposes
  editableTaskListBody.data.reset();

  // Add row
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  editableTaskListBody.addRow(taskName, taskExpectedPomo);

  // Check for row data in todo
  expect(editableTaskListBody.data.todo[0].name).toBe(taskName);
  expect(editableTaskListBody.data.todo[0].expected).toBe(taskExpectedPomo);
});

test('Edit Row From EditableTaskListBody', () => {
  // Create new EditableTaskListInput
  const editableTaskListInput = new EditableTaskListInput();
  const editableTaskListBody = new EditableTaskListBody(editableTaskListInput);

  // Reset data for testing purposes
  editableTaskListBody.data.reset();

  // Add row
  const taskName = 'first task';
  const taskExpectedPomo = 3;
  editableTaskListBody.addRow(taskName, taskExpectedPomo);

  // Edit the row
  const row = editableTaskListBody.lastElementChild;
  const inputs = row.querySelectorAll('input');
  const userInputs = Array.from(inputs).slice(-2);
  editableTaskListBody.editRow(row, userInputs);

  // Check that edit was not saved yet
  expect(editableTaskListBody.data.todo[0].name).toBe(taskName);
  expect(editableTaskListBody.data.todo[0].expected).toBe(taskExpectedPomo);
});
