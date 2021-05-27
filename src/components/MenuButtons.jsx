import React from 'react';
import classNames from 'classnames';





const MenuButtons = ({sub,
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
                    <button className="menu-buttons__button-clear">Clear completed</button>
                );
            }
        }
    
    const selectButton = (e) => {
        let pressButton = e.currentTarget.dataset.id;
        setButton(pressButton);
    }

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