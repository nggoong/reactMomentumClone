import React, { useState } from 'react';
import Header from './component/Header';
import TimeAndWelcome from './component/TimeAndWelcome';
import Footer from './component/Footer';
import Todo from './component/Todo';
import './App.css';

function App() {
  let [todoDialog, setTodoDialog] = useState(false);

  function todoDialogBool(isRender) {
      setTodoDialog(isRender);
  }
  return (
    <div className="App">
      <Header></Header>
      {todoDialog === true?<Todo></Todo>:null}
      <TimeAndWelcome></TimeAndWelcome>
      <Footer todoIsRender={todoDialog} onRender={todoDialogBool}></Footer>
    </div>
  );
}

export default App;
