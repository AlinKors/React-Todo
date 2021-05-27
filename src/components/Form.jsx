import React, {useState} from 'react';
import down from '../img/down.svg';
import List from './List';
import MenuButtons from './MenuButtons';


const Form = () => {

const [input, setInput] = useState('');
const [todos, setTodos] = useState({items: []});
const [count, setCount] = useState(0); 
const [showButton, setShow] = useState(false);
const [oneCheck, setOneCheck] = useState(false);
const [butt, setButton] = useState('all');



    function handleSubmit(e){
        e.preventDefault();
        if(input.length === 0){
            return;
        }
        const newItem = {
            text: input,
            id: `${todos.items.length +1}`,
            checked: false
        };

        setTodos(todos =>({
            items: todos.items.concat(newItem)
        }))
        setShow(() => 
            (todos.items.length >= 0) ? true : false)
        setCount(count=> count +1)
        
    }
    
    const OtherElements = ({sub, elem}) => {
        if(!sub){
            return null
        }
        else{
            switch(elem){
                case 'buttonAll':
                    return(
                        <button className="box-input__select-all-button">
                            <img src={down} width="22" height="22" alt="button all select"/>
                        </button>);
                case  'footerOne':
                    return(
                        <div className="todo__box-footer one"/>
                    );
                case 'footerTwo':
                    return(
                        <div className="todo__box-footer two"/>
                    );
            }
        } 
    }

return(
    <div>
    <div className="todo__content">
    <form onSubmit={handleSubmit} className="box-input">
    <OtherElements sub={showButton} elem={'buttonAll'} />
    <input type="text" value={input} onChange={e => setInput(e.target.value)} className="box-input__input" placeholder="What needs to be done?"/>
    </form>
        <List items={todos.items} 
            setTodos={setTodos} 
            setShow={setShow} 
            sub={showButton}
            butt={butt}
            setOneCheck={setOneCheck}
            setCount={setCount}
            count={count}/>
        <MenuButtons sub={showButton} 
            items={todos.items} 
            butt={butt}
            setButton={setButton}
            oneCheck={oneCheck}
            setOneCheck={setOneCheck}
            count={count}/> 
    </div>
    
    <OtherElements sub={showButton} elem={'footerOne'} />
    <OtherElements sub={showButton} elem={'footerTwo'} />
    </div>
    
    );
}



export default Form;