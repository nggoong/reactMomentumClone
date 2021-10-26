// import React, { useState } from 'react';


function NicknameInput () {

    function setNickName(e) {
        let userNick = e.target.nickname.value;
        localStorage.setItem("nickName", userNick);
    }
    return(
        <div>
            <form onSubmit = {setNickName}>
                <input type="text" placeholder="Put your nickname!" name="nickname"></input>
                <input type="submit" value ="input"></input>
            </form>
        </div>
    )
}



export default NicknameInput;