function Header() {
    return(
        <div className = "Header">
            <div className = "search">
                <div className = "linkLetter">
                    <p>Links</p>
                </div>
                <div className = "searchInput">
                    <input type="text" placeholder="search"></input>
                </div>
            </div>
            <div className = "weather">
                10℃
            </div>
        </div>
    )
}


export default Header;