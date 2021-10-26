import React, { useState } from 'react';
import NicknameInput from './NicknameInput';


function TimeAndWelcome () {
    let [ currentTime, setCurrentTime ] = useState("");
    let nickName = localStorage.getItem("nickName");
    let inputOrwelcome = null;
    if(nickName === null || nickName == "") {
        inputOrwelcome = <NicknameInput></NicknameInput>
    }
    else {
        inputOrwelcome = <div className="welcome">Good morning, {nickName}.</div>
    }

    function getTime() {
        let today = new Date();
        let hour = today.getHours();
        let min = today.getMinutes();
        let time = "";
        time = hour + " : " + min;
        setCurrentTime(time);
    }
    let interval = setInterval(() => { getTime(); }, 1000);
    console.log('timeandwelcome render');


    return(
        <div className = "TimeAndWelcome">
            <div className="TimeAndWelcome_wrapper">
                <div className = "time">
                    {currentTime}
                </div>
                {inputOrwelcome}
            </div>
        </div>
    )
}




export default TimeAndWelcome;