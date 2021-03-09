/**
 * @file Creates a popup notification
 * @author Andy Young
 * @author Justin Lee
 */

class Notification extends HTMLElement {
  static prompt(message, callback) {
    const notificationWindow = document.querySelector('#notification');
    notificationWindow.style.display = 'block';
    document.querySelector('#message').innerHTML = message;

    // If user clicks outside of notification, close it
    window.onclick = (event) => {
      if (event.target === notificationWindow) {
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

customElements.define('notification-comp', Notification);
export default Notification;
