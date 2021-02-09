import TaskList from './TaskList.js';

// Initialize TaskList
const t = new TaskList();

// TODO
document.querySelector('button').onclick = () => {
  t.createTask('hi', 3);
};

/**
 * Return the HTML string of a row given the input parameters.
 * @param {Number} number Number of the row.
 * @param {String} name Name of the row.
 * @param {Number} expected Expected number of pomodoros of row.
 */
function rowTemplate(number, name, expected) {
  return `
    <div class="row">
      <div class="col-1 col"><input type="text" value="${number}" disabled></div>
      <div class="col-6 col"><input type="text" value="${name}" disabled></div>
      <div class="col-3 col"><input type="number" value="${expected}" disabled></div>
      <div class="col-2 col actions">
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
  `;
}

// Iterate through TaskList.todo and create the HTML string of each row and combine it all.
const rowsHTML = t.todo.reduce((total, task, i) => total + rowTemplate(i + 1, task.name, task.expected), '');
// Set the combined HTML string as the innerHTML of #tasks.
document.querySelector('#tasks').innerHTML = rowsHTML;

// Store the row elements inside #tasks that we created into an array.
const rows = Array.from(document.querySelectorAll('#tasks .row'));
// Create a state variable containing data about the row currently being edited.
const editing = {
  // Reference to the row element.
  row: null,
  // Array of references to the inputs in the row, in other words [name, expected].
  inputs: null,
  // Array of the original values of the inputs in the row, mapped from input above.
  originalValues: null,
};

/**
 * Cancel any changes made on a row that is currently being edited.
 */
function cancel() {
  // Remove the .edit-mode class, showing the edit/remove icons.
  editing.row.classList.remove('edit-mode');

  // Disable all inputs in the row and set the values to the stored original values.
  editing.inputs.forEach((input, i) => {
    input.disabled = true;
    input.value = editing.originalValues[i];
  });

  // Reset editing object properties back to null, as nothing is being edited.
  editing.row = null;
  editing.inputs = null;
  editing.originalValues = null;
}

/**
 * Save the changes made on a row that is currently being edited.
 */
function save() {
  // Get the index of the row currently being edited.
  const index = rows.indexOf(editing.row);
  // Get an array of the new values of the inputs in the row being edited.
  const newValues = editing.inputs.map((input) => input.value);
  // Update TaskList with the retrieved index(id) and new Values.
  t.updateTask(index, ...newValues);
  // Overwrite the stored original values with the new values for cancel().
  editing.originalValues = newValues;

  // Cancel editing on the current row.
  cancel();
}

/**
 * Put the given row into edit mode.
 * @param {HTMLElement} row Reference to the row that is going to be edited.
 */
function edit(row) {
  // If a row is already being edited, cancel.
  if (editing.row) {
    cancel();
  }

  // Set the editing object properties with the corresponding values.
  editing.row = row;
  editing.inputs = Array.from(row.querySelectorAll('input')).slice(-2);
  editing.originalValues = editing.inputs.map((input) => input.value);

  // Add the .edit-mode class, showing the save/cancel icons.
  editing.row.classList.add('edit-mode');

  // Enable all inputs in the row.
  editing.inputs.forEach((input) => {
    input.disabled = false;
  });

  // Automatically focus on the name input.
  const nameInput = editing.inputs[0];
  nameInput.focus();
  nameInput.setSelectionRange(nameInput.value.length, nameInput.value.length);
}

/**
 * Remove the given row.
 * @param {HTMLElement} row Reference to the row that is going to be removed.
 */
function remove(row) {
  // If a row is being edited, cancel.
  if (editing.row) {
    cancel();
  }

  // Get the index of the given row.
  const index = rows.indexOf(row);
  // Delete the row from the reference array.
  rows.splice(index, 1);
  // Delete the task from TaskList.
  t.deleteTask(index);
  // Delete the row from the UI.
  row.remove();

  // Update the number of each row.
  rows.forEach((r, i) => {
    r.querySelector('input').value = i + 1;
  });
}

// Iterate through all rows in task list.
rows.forEach((row) => {
  // Get all the icons in the current row and add onclick listeners.
  const icons = row.querySelectorAll('i');

  // Edit button.
  icons[0].onclick = () => {
    edit(row);
  };

  // Remove button.
  icons[1].onclick = () => {
    remove(row);
  };

  // Save button.
  icons[2].onclick = () => {
    save();
  };

  // Cancel button.
  icons[3].onclick = () => {
    cancel();
  };
});
