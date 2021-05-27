
import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import MenuButtons from './components/MenuButtons';




function App() {
  return(
    <div className="todo">
      <div className="todo__header">
        <h1>todos</h1>
      </div>
      <Form />
    </div>
  )
}



export default App;
