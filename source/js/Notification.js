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
  * @param {string} employee.title - The title of the message.
  * @param {string} employee.subtitle - The subtitle of the message.
  * @param {requestCallback} callback - The callback that the notification runs.
  */
  static prompt({ title, subtitle }, callback) {
    const notificationWindow = document.querySelector('#notification');

    notificationWindow.style.display = 'flex';

    document.querySelector('#notification-title').innerHTML = title || '';
    document.querySelector('#notification-subtitle').innerHTML = subtitle || '';

    // If user clicks outside of notification, close it
    window.onclick = (e) => {
      if (e.target === notificationWindow) {
        notificationWindow.style.display = 'none';
      }
    };

    // Action for pressing no
    document.querySelector('#notif-no').onclick = () => {
      notificationWindow.style.display = 'none';
    };

    // Action for pressing yes
    document.querySelector('#notif-yes').onclick = () => {
      callback();
    };
  }
}

export default Notification;
