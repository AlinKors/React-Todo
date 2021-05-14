import down from './img/down.svg'


function App() {
  return(
    <div className="todo">
      <div className="todo__header">
        <h1>todos</h1>
      </div>
      <div className="todo__main-box">
        <form className="todo__main-box__box">
          <button className="select-all-button">
            <img src={down} width="22" height="22" alt="button all select"/>
          </button>
          <input type="text" class="input-todo" placeholder="What needs to be done?"></input>
        </form>
      </div>
    </div>
  )
}



export default App;
