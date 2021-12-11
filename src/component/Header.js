import { BsSearch } from "react-icons/bs";
import React, { useState } from "react";


function Header() {
    let [value, setValue] = useState('');
    
    function updateValue(e) {
        setValue(e.target.value);
    }
    function handleSubmit() {
        alert('submit');
    }
    return(
        <div className = "Header">
            <div className = "search">
                <div className = "linkLetter">
                    <p>Links</p>
                </div>
                <div className = "searchInput">
                    <input type="text" placeholder="Google Search" name="search" className="inputForm" autoComplete="off"onChange={updateValue}></input>
                    <div className="searchIcon" onClick={handleSubmit}><BsSearch/></div>
                </div>
            </div>
            <div className = "weather">
                <BsSearch/>
            </div>
        </div>
    )
}


export default Header;