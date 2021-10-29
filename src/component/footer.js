function Footer(props) {
    let isrender = props.todoIsRender;
    function todoClick(e) {
        e.preventDefault();
        isrender = !isrender
        props.onRender(isrender);
    }
    return(
        <div className="Footer">
            <div className="Footer_wrapper">
                <div className="photo_desc">
                    fhile
                </div>
                <div className="idiot">
                    <p>"When you're curious, you find lots of interesting things to do."</p>
                </div>
                <div className="todoLetter" onClick = {todoClick}>
                    <p>Todo</p>
                </div>
            </div>
        </div>
    )
}


export default Footer;