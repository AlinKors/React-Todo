import React, {useState} from 'react';




const MenuButtons = ({sub, itemsCount}) => {

    if(!sub){
        return null
    
    }
    else{
        return(
            <div className="menu-buttons">
            <div className="menu-buttons__items-count">{itemsCount.length} items left</div>
            <div className="menu-buttons__menu-checked">
            <button className="menu-buttons__button-all active">All</button>
            <button className="menu-buttons__button-active">Active</button>
            <button className="menu-buttons__button-completed">Completed</button>
        </div>
        <div className="menu-buttons__box-button">
            <button className="menu-buttons__button-clear">Clear completed</button>
        </div>
        </div>);
    }
}

export default MenuButtons;