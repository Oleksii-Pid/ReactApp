import React from 'react';
import Task from './components/Task/Task';
import './App.css'

function App(props) {

  return(
    props.tasks.map(task =>
        <Task 
          adjective = {task.adjective}
          correct = {task.correct}
          textBeforeInput = {task.textBeforeInput}
          textAfterInput = {task.textAfterInput}
          key = {task.id}/>)    
    
    
  )
  
}

export default App;
