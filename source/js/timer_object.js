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
     * @input timerElement: The timer on the document to update time for 
     * */
    constructor(minutes, seconds, timerElement) { 
        //time = new Date();
        this.minutes = minutes;
        this.seconds = seconds;
        this.timerElement = timerElement;
    }

    startTimer() {
        return new Promise(resolve => {
            let countdown = setInterval(() => {
                console.log(this.parseMinutes() + ":" + this.parseSeconds());
                if(this.seconds == 0 && this.minutes != 0) {
                    this.minutes --;
                    this.seconds = 60;
                } 
                else if (this.seconds == 0 && this.minutes == 0) {
                    resolve();
                    clearInterval(countdown);
                }
                this.seconds --;
            }, 1000);
        });
    }

    parseMinutes() {
        if(this.minutes < 10) 
            return "0" + String(this.minutes);
        return String(this.minutes);
    }

    parseSeconds() {
        if(this.seconds == 60)
            return "00";
        else if(this.seconds < 10)
            return "0" + String(this.seconds);
        return String(this.seconds)
    }
}

async function sessionTest() {
    const timer = new Timer(0, 5, null);
    await timer.startTimer();
    console.log("DONE");    
}

sessionTest();
