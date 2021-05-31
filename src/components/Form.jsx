import React, {useState} from 'react';
import down from '../img/down.svg';
import List from './List';
import MenuButtons from './MenuButtons';


const Form = () => {

const [input, setInput] = useState("");
const [todos, setTodos] = useState({items: []});
const [count, setCount] = useState(0); 
const [showButton, setShow] = useState(false);
const [oneCheck, setOneCheck] = useState(false);
const [butt, setButton] = useState('all');


    React.useEffect (() =>{
        setCount(todos.items.filter(el => el.checked === false).length);
    }, [todos]);

    const isEnter = e => {
        if(e.key === 'Enter'){
            addTodo();
        }
    }

    const addTodo = () => {
        if(input.length === 0){
            return;
        }
        const newItem = {
            text: input,
            id: `${todos.items.length +1}`,
            key: new Date().getTime() + `${todos.items.length +1}`,
            checked: false
        };
        setTodos(todos =>({
            items: todos.items.concat(newItem)
        }))
        setShow(() => 
            (todos.items.length >= 0) ? true : false)
        setCount(count=> count +1)
    }
   

    function selectAll (){
        todos.items.map(item => item.checked = true);
        let newArr = todos.items;
        console.log(newArr);
        setTodos({ items: newArr });

        setOneCheck(true);
    }
    
    const OtherElements = ({sub, elem}) => {
        if(!sub){
            return null
        }
        else{
            switch(elem){
                case 'buttonAll':
                    return(
                        <button onClick={selectAll} className="box-input__select-all-button">
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
                default: return; 
            }
        } 
    }

return(
    <div>
    <div className="todo__content">
    <div className="box-input">
        <OtherElements sub={showButton} elem={'buttonAll'} />
        <input type="text"  value={input} onKeyPress={isEnter} onChange={e => setInput(e.target.value)} className="box-input__input" placeholder="What needs to be done?"/>
    </div>
        <List items={todos.items} 
            setTodos={setTodos} 
            setShow={setShow} 
            sub={showButton}
            butt={butt}
            setOneCheck={setOneCheck}/>
        <MenuButtons sub={showButton} 
            setTodos={setTodos}
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