
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
      
      <div className="todo__box-footer one"/>
      <div className="todo__box-footer two"/>
    </div>
  )
}



export default App;
