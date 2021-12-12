import React, { useState, useCallback, useEffect, useRef } from 'react';
import Header from './component/Header';
import TimeAndWelcome from './component/TimeAndWelcome';
import Footer from './component/Footer';
import Todo from './component/Todo';
import './App.css';

function App() {
  let [todoDialog, setTodoDialog] = useState(false);
  let [todoListValue, setTodoListValue] = useState(() => {
    let value = JSON.parse(localStorage.getItem('todoListValue'));
    return value || [];
  });

  let [todoID, setTodoID] = useState(()=>{
    let value = parseInt(localStorage.getItem('todoID'));
    return value || 0;
  })


  useEffect(()=> {
    localStorage.setItem('todoListValue', JSON.stringify(todoListValue));
  }, [todoListValue]);

  useEffect(()=> {
    localStorage.setItem('todoID', todoID);
    console.log(todoID);
  }, [todoID]);

  function todoDialogToggle(isRender) {
      setTodoDialog(isRender);
  }

  const addNewTodo = useCallback((value) => {
    const newValue = {id:todoID, todo: value, isComplete: false};
    setTodoListValue(todoListValue => todoListValue.concat(newValue));
    setTodoID(() => todoID + 1);
  }, [todoID])

  const deleteTodoList = useCallback((id)=> {
    let index = todoListValue.findIndex(i=>i.id == id);
    let temp = todoListValue.filter(value=>value.id!=id);
    for(let i = index; i<temp.length; i++) {
          temp[i].id = temp[i].id - 1;
        }
    setTodoListValue(temp);
  }, [todoListValue]);

  const changeTheIsComplete = useCallback((id)=> {
    setTodoListValue(todoListValue => todoListValue.map((value)=>{return(value.id == id ? {...value, isComplete: !value.isComplete} : value)
    }))
  }, []);

  return (
    <div className="App">
      <Header></Header>
      {todoDialog === true?<Todo value={todoListValue} addNewTodo={addNewTodo} changeTheIsComplete={changeTheIsComplete} deleteTodoList={deleteTodoList}></Todo>:null}
      <TimeAndWelcome></TimeAndWelcome>
      <Footer todoIsRender={todoDialog} onRender={todoDialogToggle}></Footer>
    </div>
  );
}

export default App;
