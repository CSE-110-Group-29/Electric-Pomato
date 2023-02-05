/**
 * @file Creates custom HTML element for a break timer prompt.
 * @author Andy Young
 * @author Arman Mansourian
 */

/**
 * Prompt HTML element to be displayed on break timer.
 * @extends HTMLElement
 */
class BreakPrompt extends HTMLElement {
  /**
  * Create the HTML prompt element.
  * @param {requestCallback} callback - Callback function
  */
  constructor(callback) {
    super();

    this.checked = false;

    const taskList = JSON.parse(localStorage.getItem('TaskList'));

    const button = document.createElement('button');
    button.classList.add('btn', 'btn-success', 'btn-lg');
    button.textContent = taskList && taskList.todo.length > 1 ? 'Finished Current Task' : 'Finished Final Task, End Session';
    this.appendChild(button);

    button.addEventListener('click', () => {
      this.checked = true;
      button.remove();
      callback.bind(this, this)();
    });
  }

  /**
  * Get whether checkbox is checked.
  * @return {boolean} Checked property
  */
  getChecked() {
    return this.checked;
  }
}

customElements.define('break-prompt', BreakPrompt);
export default BreakPrompt;
