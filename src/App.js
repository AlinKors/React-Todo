
import close from './img/close.svg'
import ButtonAll from './components/ButtonAll';

function App() {
  return(
    <div className="todo">
      <div className="todo__header">
        <h1>todos</h1>
      </div>
      <div className="todo__content">
        <form className="box-input">
          <ButtonAll />
          <input type="text" className="box-input__input" placeholder="What needs to be done?"></input>
        </form>
        <div className="list-container">
          <ul>
            <div className="list-container__new-case-container">
              <li className='new-case'>
                <label className="new-case__checkbox-select">
                  <input type="checkbox" class="input-check"></input>
                  <span className="new-case__text-check">item1</span>
                </label>
                <button className="delete-check">
                        <img src={close} width="12" height="12" alt="button delete check"/>
                </button>
              </li>
            </div>
          </ul>
        </div>
        <div className="menu-buttons">
          <div className="menu-buttons__items-count">4 items left</div>
          <div className="menu-buttons__menu-checked">
            <button className="menu-buttons__button-all active">All</button>
            <button className="menu-buttons__button-active">Active</button>
            <button className="menu-buttons__button-completed">Completed</button>
          </div>
          <div className="menu-buttons__box-button">
            <button className="menu-buttons__button-clear">Clear completed</button>
          </div>
        </div>
      </div>
      <div className="todo__box-footer one"></div>
      <div className="todo__box-footer two"></div>
    </div>
  )
}



export default App;
