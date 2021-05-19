import close from '../img/close.svg'
import React, {useState} from 'react';


const List = (props) => {

  const[check, setCheck] = useState({checked: [], unchecked: []});

    // const checkChecked = (e) =>{

    //   props.items.map(item => (
    //     (item.checked) ? 
    //     setCheck(() => 
    //     check.checked.push(e.target.id)) : 
              
    //   setCheck(() => 
    //     check.uncheked.push(e.target.id))
        
    //   ))

      // if(e.target.checked){
      //   setCheck(() => 
      //   check.checked(e.target.id));
      // }
      // else{
      //   setCheck(() => 
      //   check.unchecked.push(e.target.id));
      // }
    }


    return(
      <div className="list-container">
      <ul>
        <div className="list-container__new-case-container">
          {props.items.map(item =>(
          <li key={item.id}  className='new-case'>
          <label className="new-case__checkbox-select">
            <input type="checkbox" id = {item.id}  className="input-check"/>
            <span className="new-case__text-check">{item.text}</span>
          </label>
          <button className="delete-check">
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