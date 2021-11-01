import React, { useState } from 'react';
import NicknameInput from './NicknameInput';


function TimeAndWelcome () {
    let [ currentTime, setCurrentTime ] = useState("");
    let nickName = localStorage.getItem("nickName");
    let [inputOrWelcome, setInputOrWelcome] = useState(null);

    function changeNickname(e) {
        localStorage.removeItem("nickName");
        setInputOrWelcome(<NicknameInput></NicknameInput>)
        // inputOrWelcome = <NicknameInput></NicknameInput>
    }

    if(nickName === null || nickName == "") {
        inputOrWelcome = <NicknameInput></NicknameInput>
    }
    else {
        inputOrWelcome = <div className="welcome">Good morning, <div className="welcomeNickname" onClick={changeNickname}>{nickName}.</div></div>
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
                {inputOrWelcome}
            </div>
        </div>
    )
}




export default TimeAndWelcome;