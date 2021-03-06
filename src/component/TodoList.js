import React, { useCallback } from 'react';


function TodoList({ id, todo, isComplete, changeTheIsComplete, deletePropagation }) {
    // console.log(props.id);
    // console.log(props.todo);
    // console.log(props.isComplete);

    function deleteTodo(e) {
        e.preventDefault();
        let confirm = window.confirm('are you sure to delete?');
        if(confirm) {
           deletePropagation(e.target.parentNode.dataset.id);
        // console.log(e.target.parentNode.dataset.id);
        }
    }
    const clickHandler = useCallback((e)=> {
        changeTheIsComplete(e.target.parentNode.dataset.id);
    }, [])
    return(
        <div className="TodoListTemplete" data-id={id}>
            <div className="TodoCheck" onClick={clickHandler}>
                {isComplete? "✔" : "▢"}
            </div>
            <div className = "TodoList" onContextMenu={deleteTodo}>
                {todo}
            </div>
        </div>
    )
}


export default TodoList;