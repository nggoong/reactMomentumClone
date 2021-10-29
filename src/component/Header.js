function Header() {
    return(
        <div className = "Header">
            <div className = "search">
                <div className = "linkLetter">
                    <p>Links</p>
                </div>
                <div className = "searchInput">
                    <input type="text" placeholder="sddd" name="search"></input>
                    <input type="submit"></input>
                </div>
            </div>
            <div className = "weather">
                10℃
            </div>
        </div>
    )
}


export default Header;