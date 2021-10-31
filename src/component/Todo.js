import TodoList from './TodoList';

function Todo(props) {
    let value = Array.from(props.value);
    let list = [];
    for(let i = 0; i < value.length; i++) {
        list.push(<TodoList key={value[i].id}id={value[i].id}todo={value[i].todo}isComplete={value[i].isComplete}></TodoList>)
    }

    function todoInputSubmit(e) {
        alert("heeloo");
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
                        <form onSubmit={todoInputSubmit} className="TodoInputForm">
                            <input type='text' name="todoInput" placeholder="New Todo" className="input" autoComplete="off"></input>
                        </form>
                </div>
            </div>
        </div>
    )
}


export default Todo;