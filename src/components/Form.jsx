import React, {useState} from 'react';
import down from '../img/down.svg';
import List from './List';
import MenuButtons from './MenuButtons';


const Form = () => {

<<<<<<< HEAD
const [input, setInput] = useState("");
=======
const [input, setInput] = useState('');
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
const [todos, setTodos] = useState({items: []});
const [count, setCount] = useState(0); 
const [showButton, setShow] = useState(false);
const [oneCheck, setOneCheck] = useState(false);
const [butt, setButton] = useState('all');


<<<<<<< HEAD
    React.useEffect (() =>{
        setCount(todos.items.filter(el => el.checked === false).length);
    }, [todos]);

    const isEnter = e => {
        if(e.key === 'Enter'){
            addTodo();
        }
    }

    const addTodo = () => {
=======

    function handleSubmit(e){
        e.preventDefault();
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
        if(input.length === 0){
            return;
        }
        const newItem = {
            text: input,
            id: `${todos.items.length +1}`,
<<<<<<< HEAD
            key: new Date().getTime() + `${todos.items.length +1}`,
            checked: false
        };
=======
            checked: false
        };

>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
        setTodos(todos =>({
            items: todos.items.concat(newItem)
        }))
        setShow(() => 
            (todos.items.length >= 0) ? true : false)
        setCount(count=> count +1)
<<<<<<< HEAD
    }
   

    function selectAll (){
        todos.items.map(item => item.checked = true);
        let newArr = todos.items;
        console.log(newArr);
        setTodos({ items: newArr });

        setOneCheck(true);
=======
        
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
    }
    
    const OtherElements = ({sub, elem}) => {
        if(!sub){
            return null
        }
        else{
            switch(elem){
                case 'buttonAll':
                    return(
<<<<<<< HEAD
                        <button onClick={selectAll} className="box-input__select-all-button">
=======
                        <button className="box-input__select-all-button">
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
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
<<<<<<< HEAD
                default: return; 
=======
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
            }
        } 
    }

return(
    <div>
    <div className="todo__content">
<<<<<<< HEAD
    <div className="box-input">
        <OtherElements sub={showButton} elem={'buttonAll'} />
        <input type="text"  value={input} onKeyPress={isEnter} onChange={e => setInput(e.target.value)} className="box-input__input" placeholder="What needs to be done?"/>
    </div>
=======
    <form onSubmit={handleSubmit} className="box-input">
    <OtherElements sub={showButton} elem={'buttonAll'} />
    <input type="text" value={input} onChange={e => setInput(e.target.value)} className="box-input__input" placeholder="What needs to be done?"/>
    </form>
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
        <List items={todos.items} 
            setTodos={setTodos} 
            setShow={setShow} 
            sub={showButton}
            butt={butt}
<<<<<<< HEAD
            setOneCheck={setOneCheck}/>
        <MenuButtons sub={showButton} 
            setTodos={setTodos}
=======
            setOneCheck={setOneCheck}
            setCount={setCount}
            count={count}/>
        <MenuButtons sub={showButton} 
>>>>>>> 55dabc689d2a5157705217db28a88f199bf0dd7d
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