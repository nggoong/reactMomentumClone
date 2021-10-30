import TodoList from './TodoList';

function Todo() {
    return(
        <div className="Todo">
            <div className="TodoWrapper">
                <div className="TodoHeader">
                    <p>✔ Today</p>
                </div>
                <div className = "TodoContent">
                    <TodoList></TodoList>
                </div>
                <div className = "TodoInput">

                </div>
            </div>
            
        </div>
    )

}


export default Todo;