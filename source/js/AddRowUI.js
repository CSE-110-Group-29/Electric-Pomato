class AddRowUI extends HTMLElement {
  constructor() {
    super();

    const clone = document.querySelector('#add-row-template').content.cloneNode(true);
    this.appendChild(clone);

    [this.nameInput, this.expectedInput] = this.querySelectorAll('input');
    this.button = this.querySelector('button');

    [this.nameInput, this.expectedInput].forEach((input) => {
      input.addEventListener('input', () => {
        this.updateButtonState();
      });
    });

    [this.nameInput, this.expectedInput].forEach((input) => {
      input.addEventListener('keyup', (e) => {
        this.addRowOnEnter(e);
      });
    });

    this.button.addEventListener('click', () => {
      this.addRow();
    });

    this.reset();
  }

  updateButtonState() {
    if (this.nameInput.value.length === 0 || Number(this.expectedInput.value) < 1) {
      this.button.disabled = true;
    } else {
      this.button.disabled = false;
    }
  }

  addRowOnEnter(e) {
    if (e.code === 'Enter' && !this.button.disabled) {
      this.addRow();
    }
  }

  addRow() {
    this.previousElementSibling.addRow(this.nameInput.value, this.expectedInput.value);
    this.reset();
  }

  reset() {
    this.nameInput.value = '';
    this.expectedInput.value = '';
    this.nameInput.focus();
    this.updateButtonState();
  }
}

customElements.define('add-row', AddRowUI);
