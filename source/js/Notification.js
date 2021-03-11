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
class Notification {
  /**
  * Prompt a notification with the given title + subtitle, and then run
  * the callback on a successful button press.
  * @param {Object} message - The message object.
  * @param {string} message.title - The title of the message.
  * @param {string} message.subtitle - The subtitle of the message.
  * @param {Boolean} fastClose - Whether this notification allows for the user to close it by
  *                               clicking outside the box
  * @param {requestCallback} leftCallback - The callback that the notification runs when the
  *                                         user clicks the left button.
  * @param {requestCallback} rightCallback - The callback that the notification runs when the
  *                                          user clicks the right button.
  */
  static prompt({ title, subtitle }, fastClose, leftCallback = () => {}, rightCallback = () => {}) {
    const notificationWindow = document.querySelector('#notification');

    notificationWindow.style.display = 'flex';

    document.querySelector('#notification-title').innerHTML = title || '';
    document.querySelector('#notification-subtitle').innerHTML = subtitle || '';

    // If user clicks outside of notification, close it
    window.onclick = (e) => {
      if (e.target === notificationWindow && fastClose) {
        notificationWindow.style.display = 'none';
      }
    };

    // Action for pressing yes
    document.querySelector('#notif-left').onclick = () => {
      leftCallback();
    };

    // Action for pressing no
    document.querySelector('#notif-right').onclick = () => {
      notificationWindow.style.display = 'none';
      rightCallback();
    };
  }
}

export default Notification;
