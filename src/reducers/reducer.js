// eslint-disable-next-line
import React from 'react';

export const reducer = (state, action) => {
    /*console.log(state);
    console.log(action.payload);
    console.log(action.type);*/
    switch (action.type) {
        case 'addToDo':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ];
        case 'toggleCompletionStatus':
            const targetToDoID = state.todos.findIndex(toDo => action.id === toDo.id)
            const targetToDo = Object.assign({}, state[targetToDoID]);
            targetToDo.completed = true;
            const todos = Object.assign([], state);
            todos.splice(targetToDoID, 1, targetToDo);
            return todos;
        default:
            return state
    }
}

/*   {
        const idx = state.todos.findIndex(t => t.id === action.id);
        const todo = Object.assign({}, state.todos[idx]);
        todo.text = action.text;
        const todos = Object.assign([], state.todos);
        todos.splice(idx, 1, todo);
        return {
          counter: state.counter,
          todos: todos,
        };
      }*/

/*### STEP 4 - Toggle the completed field

- Build a function that will dispatch an action to toggle a todo's completed field
- Invoke this new function when you click on a todo
- Style your todo to somehow show that it is completed (be creative here!)
- Write the `case` in your reducer for toggling the completed property
*/


export const initialState = [
    {
        item: 'Learn about reducers',
        completed:
            false,
        id:
            3892987589
    },

    {
        item: 'Learn about deducers',
        completed:
            false,
        id:
            3892987349
    }
]

