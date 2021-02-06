import TaskList from './TaskList.js';

const t = new TaskList();
// t.createTask("lmao", 2);
console.log(t);

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

const rows = t.todo.reduce((total, task, i) => total + rowTemplate(i + 1, task.name, task.expected), '');
document.querySelector('#tasks').innerHTML = rows;

// TODO: figure out better way of organizing state?
const editing = {
  row: null,
  inputs: null,
  originals: null,
};

// TODO: extract the inputs from the given row and TaskList.addTask()
function save(row) {

}

function cancel() {
  editing.row.classList.remove('edit-mode');
  editing.inputs.forEach((input, i) => {
    const curr = input;
    curr.disabled = true;
    curr.value = editing.originals[i];
  });

  editing.row = null;
  editing.inputs = null;
  editing.originals = null;
}

function edit(row) {
  if (editing.row) {
    cancel(editing.row);
  }

  editing.row = row;
  editing.inputs = Array.from(row.querySelectorAll('input')).slice(-2);
  editing.originals = editing.inputs.map((input) => input.value);

  editing.row.classList.add('edit-mode');
  editing.inputs.forEach((input) => {
    const curr = input;
    curr.disabled = false;
  });

  const nameInput = editing.inputs[0];
  nameInput.focus();
  nameInput.setSelectionRange(nameInput.value.length, nameInput.value.length);
}

// TODO: remove the given row from TaskList
function remove(row) {

}

document.querySelectorAll('#tasks .row').forEach((row) => {
  const icons = row.querySelectorAll('i');

  icons[0].onclick = () => {
    edit(row);
  };
  icons[1].onclick = () => {
    remove(row);
  };
  icons[2].onclick = () => {
    save(row);
  };
  icons[3].onclick = () => {
    cancel(row);
  };
});
