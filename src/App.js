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
  console.log(todoListValue);
  function todoDialogToggle(isRender) {
      setTodoDialog(isRender);
  }
  return (
    <div className="App">
      <Header></Header>
      {todoDialog === true?<Todo value={todoListValue}></Todo>:null}
      <TimeAndWelcome></TimeAndWelcome>
      <Footer todoIsRender={todoDialog} onRender={todoDialogToggle}></Footer>
    </div>
  );
}

export default App;
