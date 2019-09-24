import React, {useReducer} from 'react';
import {reducer, initialState} from "../reducers/reducer";

const ToDoList = () => {
    // Use the useReducer hook by destructuring its two properties: state, and dispatch and pass in the reducer and the initialState to the useReducer function
    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h1>{state.item}</h1>
            {/*     <button onClick={() => dispatch({ type: 'INCREASE' })}>+1</button>
      <button onClick={() => dispatch({ type: 'DECREASE' })}>-1</button>*/}
        </div>
    )
}

export default ToDoList;


/*### STEP 2 - Set up state in your component

You get to choose how you want to set up your components. Please don't just do this all inside App. I know it is a small and simple project, but you will do yourself a great service by setting your app up as if it were going to be a larger application

- Using the `reducer` hook, set up state in your component. Think about what you'll need in order to use the reducer hook, and think about what it returns.
- Now render your list of todos from your reducer in your app*/