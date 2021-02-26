// /* *
//  * Author: Donald Wolfson, Justin Lee, Enrique Gan, Andy Young
//  * Date: 02/25/2021
//  * */
// /** Global Values: (TODO)                                                  **/
// //     Will hold DOM data on HTML elements (buttons, forms, etc.)
// //     The ID's and names aren't final, and don't connect to anything in HTML.
// //     Just made them in hopes of simulating some processes better.
// //     These are defined based on the design Teresa made, check the Project
// //     Pitch do for context.
import TimerUI from './TimerUI.js';

const body = document.querySelector('.container');
const timerUI = new TimerUI();

body.appendChild(timerUI);
timerUI.createTimer(0, 10);
timerUI.setColorGreen();

async function testTimer() {
  await timerUI.startTimer();
  console.log('BOOM :)');
  timerUI.setColorRed();
}

testTimer();
