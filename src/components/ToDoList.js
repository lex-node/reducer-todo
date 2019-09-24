import React, {useState, useReducer} from 'react';
import {reducer, initialState} from "../reducers/reducer";

const ToDoList = () => {
    // add a state hook to hold the state of the input field for new todos
    const [newToDo, setNewToDo] = useState();
    // Use the useReducer hook by destructuring its two properties: state, and dispatch and pass in the reducer and the initialState to the useReducer function
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleChange = (e) => {
        setNewToDo(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch({type: 'addToDo', payload: newToDo})
    }

    const clickHandler = (toDo) => {
        dispatch({type: 'toggleCompletionStatus', payload: toDo});
    }

    return (
        <div>
            {state.map(toDo => {
                if (toDo.completed === false) {
                    return (
                        <div>
                            <h1 key={toDo.id}>{toDo.item}</h1>
                            <button onClick={() => clickHandler(toDo)}> Mark Completed</button>
                        </div>
                    )
                } else {
                    return (
                        <div>
                            <h1 key={toDo.id} className="strikethrough">{toDo.item}</h1>
                        </div>
                    )

                }
            })}
            <form onSubmit={submitHandler}>
                <label>
                    Add new to-do item:
                    <input name="newToDo" type="text" value={newToDo} onChange={handleChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ToDoList;



