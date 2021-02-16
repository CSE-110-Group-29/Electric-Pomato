/**
 * Author: Andy Young, Teresa Truong, Annika Hatcher
 * Updated By: (Any names of people who've done some editing of the file)
 * Date: 02/12/2021
 * Github Issue: https://github.com/DonaldWolfson/cse110-w21-group29/issues/13
 */

class AddRowUI extends HTMLElement {
  /**
   * Constructor for the Add Task Row UI.
   */
  constructor() {
    super();

    // Clone the template.
    const clone = document.querySelector('#add-row-template').content.cloneNode(true);
    this.appendChild(clone);

    // Store references to inputs/button to instance variable.
    [this.nameInput, this.expectedInput] = this.querySelectorAll('input');
    this.button = this.querySelector('button');

    // Add event listener to both inputs to update button state.
    [this.nameInput, this.expectedInput].forEach((input) => {
      input.addEventListener('input', () => {
        this.updateButtonState();
      });
    });

    // Add event listener to both inputs to add row on enter if inputs are valid.
    [this.nameInput, this.expectedInput].forEach((input) => {
      input.addEventListener('keyup', (e) => {
        if (e.code === 'Enter' && !this.button.disabled) {
          this.addRow();
        }
      });
    });

    // Add event listener to button to add row on click.
    this.button.addEventListener('click', () => {
      this.addRow();
    });

    // Initialize row to default UI state.
    this.reset();
  }

  /**
   * Disable/Enable add task button based on validity of inputs.
   */
  updateButtonState() {
    if (this.nameInput.value.length === 0 || Number(this.expectedInput.value) < 1 || Number(this.expectedInput.value) > 5) {
      /* Alert user to break down task
      if (Number(this.expectedInput.value) > 5) {
        alert("Estimated Pomos exceeds maximum of 5.\nTip: Break it down into smaller tasks.");
      }
      */
      this.button.disabled = true;
    } else {
      this.button.disabled = false;
    }
  }

  /**
   * Add row to TaskList assuming it is the previous sibling.
   */
  addRow() {
    this.previousElementSibling.addRow(this.nameInput.value, this.expectedInput.value);
    this.reset();
  }

  /**
   * Initializes the UI of the row to its initial state.
   */
  reset() {
    this.nameInput.value = '';
    this.expectedInput.value = '';
    this.nameInput.focus();
    this.updateButtonState();
  }
}

customElements.define('add-row', AddRowUI);
