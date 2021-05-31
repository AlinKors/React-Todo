import close from '../img/close.svg'
<<<<<<< HEAD
import React from 'react';
=======
import React, {useState} from 'react';
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d


const List = ({items, 
  setTodos, 
  setShow, 
  sub, 
  butt, 
<<<<<<< HEAD
  setOneCheck}) => {
=======
  setOneCheck,
  setCount,
  count}) => {
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
    
    const deleteItem = (e) =>{
      const id = e.currentTarget.dataset.id;
      const newItem = items.filter(el => el.id !== id);
<<<<<<< HEAD
      setTodos({ items: newItem })
      
=======

      setTodos({ items: newItem })
      setCount(count=> count -1)
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
      if(newItem.length === 0){
        setShow(sub = false)
      }
    }

    // check for checked case
    const checkChecked = (e) =>{
        let key = e.target.id;
<<<<<<< HEAD
        let item = items.findIndex(el => el.id === key);
        let newArr = items;

        if(e.target.checked){
          newArr[item].checked = true;

          setTodos({ items: newArr })

          setOneCheck(true);

        }
        else{
          newArr[item].checked = false;

          setTodos({ items: newArr })

          let itemCheck = items.find(el => el.checked === true);
          (itemCheck === undefined) ? setOneCheck(false) : setOneCheck(true);

=======
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
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
        }
        
    }      

<<<<<<< HEAD

=======
      switch(butt){
        case 'all':
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
          return(
            <div className="list-container">
            <ul>
              <div className="list-container__new-case-container">
<<<<<<< HEAD
              {(butt === 'all' ? items : butt === 'active' ? items.filter(item => item.checked === false) : items.filter(item => item.checked === true)).map(item =>(
                      <li key={item.key}  className='new-case'>
                        <label className="new-case__checkbox-select">
                          {item.checked === true ? 
                            <input type="checkbox" defaultValue="" id = {item.id} onClick={checkChecked} className="input-check" defaultChecked={true}/>    : 
                            <input type="checkbox" defaultValue="" id = {item.id} onClick={checkChecked} className="input-check" />   
                          }
                          <span className="new-case__text-check">{item.text}</span>
                        </label>
                        <button data-id={item.id} className="delete-check" onClick={deleteItem}>
                          <img src={close} width="12" height="12" alt="button delete check"/>
                        </button>
                      </li>
                    ))}
=======
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
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
              </div>
              </ul>
            </div>
            );
<<<<<<< HEAD
            }

=======

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
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d



export default List;
