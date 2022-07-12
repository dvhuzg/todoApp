import React from 'react'
import './App.css';
import TodoApp from './component/TodoApp';
// import './component/todoapp.css';

function App() {
  return (
    <div className='App'>
      <span className='title'>Todo App</span>
      <TodoApp />
    </div>
  )
}

export default App