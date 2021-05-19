import close from '../img/close.svg'
import React from 'react';


const List = ({items, 
  setTodos, 
  setShow, 
  sub, 
  butt, 
  setOneCheck}) => {
    
    const deleteItem = (e) =>{
      const id = e.currentTarget.dataset.id;
      const newItem = items.filter(el => el.id !== id);
      setTodos({ items: newItem })
      
      if(newItem.length === 0){
        setShow(sub = false)
      }
    }

    // check for checked case
    const checkChecked = (e) =>{
        let key = e.target.id;
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

        }
        
    }      


          return(
            <div className="list-container">
            <ul>
              <div className="list-container__new-case-container">
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
              </div>
              </ul>
            </div>
            );
            }




export default List;
