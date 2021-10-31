function TodoList(props) {
    // console.log(props.id);
    // console.log(props.todo);
    // console.log(props.isComplete);
    function todoComplete(e) {
        console.log(e.target.innerText);
        
        let marker = (e.target.innerText==="▢") ?  "✔" : "▢";
        e.target.innerText = marker;
    }
    function deleteTodo(e) {
        e.preventDefault();
        let confirm = window.confirm('are you sure to delete?');
    }
    return(
        <div className="TodoListTemplete" data-id={props.id}>
            <div className="TodoCheck" onClick={todoComplete}>
                {props.isComplete===false? "▢" : "✔"}
            </div>
            <div className = "TodoList" onContextMenu={deleteTodo}>
                {props.todo}
            </div>
        </div>
    )
}


export default TodoList;