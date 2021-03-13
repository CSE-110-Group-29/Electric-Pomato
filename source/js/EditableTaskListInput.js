/**
 * @file Define the and construct an editable TaskList, and handle the inputs.
 * @author Andy Young
 * @author Teresa Truong
 * @author Annika Hatcher
 * @author Liam Stone
 * Date: 03/04/2021
 */

/**
 * Define the tasks and construct an editable TaskList, and handle the inputs from the user.
 * @extends HTMLElement
 */
class EditableTaskListInput extends HTMLElement {
  /**
  * constructor for EditableTaskListInput
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

    this.resetCount = 0;
  }

  /**
   * Initialize row to default UI state.
   */
  connectedCallback() {
    this.reset();
  }

  /**
   * Disable/Enable add task button based on validity of inputs.
   */
  updateButtonState() {
    if (this.nameInput.value.length === 0) {
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
    this.expectedInput.value = '1';
    this.nameInput.focus();
    this.updateButtonState();
    if (this.resetCount > 0) {
      this.querySelector('tomato-slider').render();
    }
    this.resetCount += 1;
  }
}

customElements.define('editable-task-list-input', EditableTaskListInput);

export default EditableTaskListInput;
