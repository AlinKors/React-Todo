import down from '../img/down.svg';
import React from 'react';

const ButtonAll = () => {
    return(
        <button className="box-input__select-all-button">
        <img src={down} width="22" height="22" alt="button all select"/>
      </button>
    );
}

export default ButtonAll;