import React, { useState } from 'react';
import Header from './component/Header';
import TimeAndWelcome from './component/TimeAndWelcome';
import Footer from './component/Footer';
import Todo from './component/Todo';
import './App.css';

function App() {
  let [todoDialog, setTodoDialog] = useState(false);
//   let [todoListValue, setTodoListValue] = useState([{id:1, todo:'리액트 끝내기', isComplete:false},
// {id:2, todo:'자바스크립트 공부하기', isComplete:false}]);
  let [todoListValue, setTodoListValue] = useState(JSON.parse(localStorage.getItem("todoListValue")));
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
  return (
    <div className="App">
      <Header></Header>
      {todoDialog === true?<Todo value={todoListValue} addNewTodo={addNewTodo}></Todo>:null}
      <TimeAndWelcome></TimeAndWelcome>
      <Footer todoIsRender={todoDialog} onRender={todoDialogToggle}></Footer>
    </div>
  );
}

export default App;
