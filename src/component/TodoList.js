function TodoList() {
    function todoComplete(e) {
        console.log(e.target.innerText);
        e.target.innerText = "✔";
    }
    return(
        <div className="TodoListTemplete">
            <div className="TodoCheck" onClick={todoComplete}>
                ▢
            </div>
            <div className = "TodoList">
                리액트 끝내기
            </div>
        </div>
    )
}


export default TodoList;