/* semantic version
function createRow(number, name, expected) {
  const row = document.createElement('div');
  const cols = [
    document.createElement('div'),
    document.createElement('div'),
    document.createElement('div'),
  ];

  const inputs = [
    document.createElement('input'),
    document.createElement('input'),
    document.createElement('input'),
  ];

  const {
    actions,
    editIcon,
    deleteIcon,
    saveIcon,
    cancelIcon,
  } = createActions();

  row.className = 'row';

  cols[0].className = 'col-1 col';
  cols[1].className = 'col-6 col';
  cols[2].className = 'col-3 col';

  inputs[0].value = number;
  inputs[1].value = name;
  inputs[2].value = expected;

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
    inputs[i].type = 'text';
    cols[i].appendChild(inputs[i]);
  }

  for (const col of cols) {
    row.appendChild(col);
  }

  row.appendChild(actions);

  editIcon.onclick = function showSaveCancel() {
    row.classList.add('edit-mode');
  }

  console.log(row);
  return row;
}

function createActions() {
  const actions = document.createElement('div');

  const editDeleteContainer = document.createElement('div');
  const saveCancelContainer = document.createElement('div');

  const editIcon = document.createElement('i');
  const deleteIcon = document.createElement('i');
  const saveIcon = document.createElement('i');
  const cancelIcon = document.createElement('i');

  actions.className = 'col-2 col actions';

  editDeleteContainer.className = 'edit-delete-container';
  saveCancelContainer.className = 'save-cancel-container';

  editIcon.className = 'fas fa-pencil-alt text-warning edit-icon';
  deleteIcon.className = 'fas fa-trash-alt text-danger delete-icon';
  saveIcon.className = 'fas fa-check text-success save-icon';
  cancelIcon.className = 'fas fa-times text-danger cancel-icon';

  editDeleteContainer.appendChild(editIcon);
  editDeleteContainer.appendChild(deleteIcon);

  saveCancelContainer.appendChild(saveIcon);
  saveCancelContainer.appendChild(cancelIcon);

  actions.appendChild(editDeleteContainer);
  actions.appendChild(saveCancelContainer);

  return {
    actions,
    editIcon,
    deleteIcon,
    saveIcon,
    cancelIcon,
  };
}

document.querySelector('.paper.container').appendChild(createRow(1, 'lmao', 2));
*/

/* template version
const rowTemplate = document.querySelector('template');

function createRow(...args) {
  const clone = rowTemplate.content.cloneNode(true);
  const inputs = clone.querySelectorAll('input');
  const icons = clone.querySelectorAll('i');

  args.forEach((el, i) => {
    inputs[i].value = el;
  });

  icons[0].onclick = function showSaveCancel() {
    clone.classList.add('edit-mode');
  };

  return clone;
}

document.querySelector('#tasks').appendChild(createRow(1, 'lmao', 2));
*/
