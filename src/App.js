import React, { useState } from 'react';
import Header from './component/Header';
import TimeAndWelcome from './component/TimeAndWelcome';
import Footer from './component/Footer';
import Todo from './component/Todo';
import './App.css';

function App() {
  let [todoDialog, setTodoDialog] = useState(false);
  // let [todoListValue, setTodoListValue] = localStorage.getItem("todoListValue") === null ? useState([]) : useState(JSON.parse(localStorage.getItem("todoListValue")));
  let [todoListValue, setTodoListValue] = useState(JSON.parse(localStorage.getItem("todoListValue")));
  // let [todoListValue, setTodoListValue] = useState([]);
  // if(JSON.parse(localStorage.getItem("todoListValue")) != null) {
  //   setTodoListValue(JSON.parse(localStorage.getItem("todoListValue")));
  // }

  function todoDialogToggle(isRender) {
      setTodoDialog(isRender);
  }

  function addNewTodo(value) {
    let newID = todoListValue.length + 1;
    let newValue = {id:newID, todo:value, isComplete:false};
    let tempData = todoListValue.concat(newValue);
    localStorage.setItem("todoListValue", JSON.stringify(tempData));
    setTodoListValue(JSON.parse(localStorage.getItem("todoListValue")));
  }

  function deleteTodoList(deleteId) {
    let index = todoListValue.findIndex(i=>i.id == deleteId);
    let tempData = Array.from(todoListValue);
    tempData.splice(index, 1);
    for(let i = index; i<tempData.length; i++) {
      tempData[i].id = tempData[i].id - 1;
    }
    localStorage.setItem("todoListValue", JSON.stringify(tempData));
    setTodoListValue(JSON.parse(localStorage.getItem("todoListValue")));
  }
  return (
    <div className="App">
      <Header></Header>
      {todoDialog === true?<Todo value={todoListValue} addNewTodo={addNewTodo}deleteTodoList={deleteTodoList}></Todo>:null}
      <TimeAndWelcome></TimeAndWelcome>
      <Footer todoIsRender={todoDialog} onRender={todoDialogToggle}></Footer>
    </div>
  );
}

export default App;
