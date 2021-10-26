import React, { useState } from 'react';


function TimeAndWelcome () {
    let [currentTime, setCurrentTime] = useState("");

    function getTime() {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let time = "";
        time = hour + " : " + min;
        setCurrentTime(time);
    }
    let interval = setInterval(() => { getTime(); }, 1000);
    return(
        <div className = "TimeAndWelcome">
            <div className="TimeAndWelcome_wrapper">
                <div className = "time">
                    {currentTime}
                </div>
                <div className="welcome">
                    Good morning, nggoong.
                </div>

            </div>
        </div>
    )
}




export default TimeAndWelcome;