import React, {useState} from 'react';
import down from '../img/down.svg';
import List from './List';
import MenuButtons from './MenuButtons'

const Form = () => {

const [input, setInput] = useState('');
const [todos, setTodos] = useState({items: []}); 
const [showButton, setShow] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        if(input.length === 0){
            return;
        }
        const newItem = {
            text: input,
            id: todos.items.length +1
        };
        setTodos(todos =>({
            items: todos.items.concat(newItem),
        }))
        setShow(() => 
            (todos.items.length >= 0) ? true : false)
    }
    
    const ButtonAll = (prop) => {
        if(!prop.sub){
            return null
     
        }
        else{
            return(
            <button className="box-input__select-all-button">
                <img src={down} width="22" height="22" alt="button all select"/>
            </button>);  
        }
    }
    

return(
    <div className="todo__content">
    <form onSubmit={handleSubmit} className="box-input">
    <ButtonAll sub={showButton}/>
    <input type="text" value={input} onChange={e => setInput(e.target.value)} className="box-input__input" placeholder="What needs to be done?"/>
    </form>
    <List items={todos.items}/>
    <MenuButtons sub={showButton} itemsCount ={todos.items}/>
    </div>
    );


}



export default Form;