/**
 * @file Creates a notification controller that displays notifications and
 * runs callbacks.
 * @author Andy Young
 * @author Justin Lee
 */

/**
 * Finds the notification element on the page and handles the display/hide of
 * notifications.
 */
class PopUp {
  /**
  * Prompt a notification with the given title + subtitle, and then run
  * the callback on a successful button press.
  * @param {Object} message - The message object.
  * @param {string} message.title - The title of the message.
  * @param {string} message.subtitle - The subtitle of the message.
  * @param {Boolean} fastClose - Whether this notification allows for the user to close it by
  *                               clicking outside the box
  * @returns {Promise} Promise object represents the left or right button click.
  */

  static show() {
    document.querySelector('#notification').style.display = 'flex';
  }

  static hide() {
    document.querySelector('#notification').style.display = 'none';
  }

  static prompt({
    title, subtitle, leftButton, rightButton,
  }, fastClose) {
    document.querySelector('#notification-title').textContent = title || '';
    document.querySelector('#notification-subtitle').textContent = subtitle || '';
    document.querySelector('#notif-left').textContent = leftButton || '';
    document.querySelector('#notif-right').textContent = rightButton || '';

    PopUp.show();

    return new Promise((resolve) => {
      document.querySelector('#notification').onclick = (e) => {
        // If outside of #notif-content and fastClose is on, then close
        if (e.target.querySelector('#notif-content') && fastClose) {
          PopUp.hide();
          resolve('neither');
        }
      };

      // Action for pressing left
      document.querySelector('#notif-left').onclick = () => {
        resolve('left');
      };

      // Action for pressing right
      document.querySelector('#notif-right').onclick = () => {
        resolve('right');
      };
    });
  }
}

export default PopUp;
