import close from '../img/close.svg'
import React, {useState} from 'react';


const List = ({items, 
  setTodos, 
  setShow, 
  sub, 
  butt, 
  setOneCheck,
  setCount,
  count}) => {
    
    const deleteItem = (e) =>{
      const id = e.currentTarget.dataset.id;
      const newItem = items.filter(el => el.id !== id);

      setTodos({ items: newItem })
      setCount(count=> count -1)
      if(newItem.length === 0){
        setShow(sub = false)
      }
    }

    // check for checked case
    const checkChecked = (e) =>{
        let key = e.target.id;
        let item = items.findIndex(el => el.id == key);

        if(e.target.checked){
          items[item].checked = true;

          setOneCheck(true);
          setCount(count=> count -1)
        }
        else{
          items[item].checked = false;

          let itemCheck = items.find(el => el.checked == true);
          (itemCheck === undefined) ? setOneCheck(false) : setOneCheck(true);
          setCount(count=> count +1);
        }
        
    }      

      switch(butt){
        case 'all':
          return(
            <div className="list-container">
            <ul>
              <div className="list-container__new-case-container">
              {items.map(function(item){
                  if(item.checked==false){
                    return(<li key={item.id}  className='new-case'>
                    <label className="new-case__checkbox-select">
                      <input type="checkbox" id = {item.id} onClick={checkChecked} className="input-check"/>
                      <span className="new-case__text-check">{item.text}</span>
                    </label>
                    <button data-id={item.id} className="delete-check" onClick={deleteItem}>
                      <img src={close} width="12" height="12" alt="button delete check"/>
                    </button>
                  </li>);
                  }
                  else{
                    return(<li key={item.id}  className='new-case'>
                    <label className="new-case__checkbox-select">
                      <input type="checkbox" id = {item.id} onClick={checkChecked} className="input-check" checked/>
                      <span className="new-case__text-check">{item.text}</span>
                    </label>
                    <button data-id={item.id} className="delete-check" onClick={deleteItem}>
                      <img src={close} width="12" height="12" alt="button delete check"/>
                    </button>
                  </li>);
                  }
      })}
              </div>
              </ul>
            </div>
            );

        case 'active':
          return(
            <div className="list-container">
            <ul>
              <div className="list-container__new-case-container">
                {items.filter(item => item.checked == false).map(item =>(
                  <li key={item.id}  className='new-case'>
                    <label className="new-case__checkbox-select">
                      <input type="checkbox" id = {item.id} onClick={checkChecked} className="input-check"/>
                      <span className="new-case__text-check">{item.text}</span>
                    </label>
                    <button data-id={item.id} className="delete-check" onClick={deleteItem}>
                      <img src={close} width="12" height="12" alt="button delete check"/>
                    </button>
                  </li>
                ))}
                </div>
              </ul>
            </div>
            );

        case 'completed':
          return(
            <div className="list-container">
            <ul>
              <div className="list-container__new-case-container">
                {items.filter(item => item.checked == true).map(item =>(
                  <li key={item.id}  className='new-case'>
                    <label className="new-case__checkbox-select">
                      <input type="checkbox" id = {item.id} onClick={checkChecked} className="input-check" checked/>
                      <span className="new-case__text-check">{item.text}</span>
                    </label>
                    <button data-id={item.id} className="delete-check" onClick={deleteItem}>
                      <img src={close} width="12" height="12" alt="button delete check"/>
                    </button>
                  </li>
                ))}
                </div>
              </ul>
            </div>
            );
            }
}



export default List;
