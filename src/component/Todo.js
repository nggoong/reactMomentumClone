import TodoList from './TodoList';

function Todo({ value, changeTheIsComplete, deleteTodoList, addNewTodo }) {
    let arr = Array.from(value);
    let list = [];
    for(let i = 0; i < arr.length; i++) {
        list.push(<TodoList key={arr[i].id}id={arr[i].id}todo={arr[i].todo}
            isComplete={arr[i].isComplete} deletePropagation = {deletePropagation} changeTheIsComplete ={changeTheIsComplete}></TodoList>)
    }

    function todoInputSubmit(e) {
        e.preventDefault();
        addNewTodo(e.target.todoInput.value);
        e.target.todoInput.value="";
    }

    function deletePropagation(id) {
        deleteTodoList(id);
    }
    return(
        <div className="Todo">
            <div className="TodoWrapper">
                <div className="TodoHeader">
                    <p>✔ Today</p>
                </div>
                <div className = "TodoContent">
                    {list}
                </div>
                <div className = "TodoInput">
                        <form onSubmit={todoInputSubmit} className="TodoInputForm" method="POST">
                            <input type='text' name="todoInput" placeholder="New Todo" className="input" autoComplete="off"></input>
                        </form>
                </div>
            </div>
        </div>
    )
}


export default Todo;