import React from 'react';
import classNames from 'classnames';





const MenuButtons = ({sub,
<<<<<<< HEAD
    setTodos,
=======
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
    items, 
    butt,
    setButton, 
    oneCheck,
    setOneCheck,
    count}) => {

        const ButtonClear = ({oneCheck}) => {
            if(!oneCheck){
                return null
            }
            else{
                return(
<<<<<<< HEAD
                    <button className="menu-buttons__button-clear" onClick={deleteCompleted}>Clear completed</button>
=======
                    <button className="menu-buttons__button-clear">Clear completed</button>
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
                );
            }
        }
    
    const selectButton = (e) => {
        let pressButton = e.currentTarget.dataset.id;
        setButton(pressButton);
    }

<<<<<<< HEAD
    const deleteCompleted = (e) =>{
        const newItems = items.filter(el => el.checked == false);
        setTodos({items: newItems});
    }

=======
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
    if(!sub){
        return null
    
    }
    else{
        return(
            <div className="menu-buttons">
                <div className="menu-buttons__items-count">{count} items left</div>
                <div className="menu-buttons__menu-checked">
                    <button data-id={'all'} onClick ={selectButton} className={classNames("menu-buttons__button-all", {'active': (butt=== 'all')})}>All</button>
                    <button data-id={'active'} onClick ={selectButton} className={classNames("menu-buttons__button-active")}>Active</button>
                    <button data-id={'completed'} onClick ={selectButton} className={classNames("menu-buttons__button-completed")}>Completed</button>
                </div>
                <div className="menu-buttons__box-button">
                <ButtonClear items={items} oneCheck={oneCheck} setOneCheck={setOneCheck}/>
                </div>
            </div>);
    }
}

export default MenuButtons;