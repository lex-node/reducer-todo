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

    return (
        <div>
            {state.map(toDo => {
                return (
                    <h1 key={toDo.id}>{toDo.item}</h1>
                )
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


/*const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos*/

/*

### STEP 3 - Adding todos

- Build a form to add todos to your list
- Build a function that will dispatch an action to add a new todo
- Write the `case` in your reducer for adding a todo (You can create a unique id with `new Date()`)

*/


