
<<<<<<< HEAD
import React from 'react';
import Form from './components/Form';
=======
import React, {useState} from 'react';
import Form from './components/Form';
import List from './components/List';
import MenuButtons from './components/MenuButtons';

>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d



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
