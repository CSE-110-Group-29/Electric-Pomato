/* *
 * Author: Donald Wolfson, Justin Lee, Enrique Gan
 * Updated By: (Any names of people who've done some editing of the file)
 * Date: 02/04/2021
 * Github Issue: https://github.com/DonaldWolfson/cse110-w21-group29/issues/12
 * */

 // TODO:
class Timer {
    /* *
     * Constructor for the timer object.
     * @input minutes: Numerical value of maximum minutes.
     * @input seconds: Numerical value of maximum seconds.
     * */
    constructor(minutes, seconds) { 
        //time = new Date();
        this.timeLimit = timeLimit;
        this.minutes = minutes;
        this.seconds = seconds;
        this.startTimer();
    }

    startTimer () {
        setInterval(() => {
            if(this.seconds == 0 && this.minutes != 0) {
                this.minutes --;
                this.seconds = 60;
            } else if (this.seconds == 0 && this.minutes == 0) {
                // TODO: Exit condition.
            }
            this.seconds --;
        }, 1000);
    }

     
}