// eslint-disable-next-line
import React from 'react';

export const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    console.log(action.payload);
    console.log(action.type);
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
            const targetToDoID = state.findIndex(toDo => action.payload.id === toDo.id)
            const targetToDo = Object.assign({}, state[targetToDoID]);
            targetToDo.completed = true;
            const todos = Object.assign([], state);
            todos.splice(targetToDoID, 1, targetToDo);
            return todos;
        case 'clearCompleted':
            const incompleteToDos = state.filter((toDo) => {
                return toDo.completed === false;
            });
            console.log(incompleteToDos);
            return incompleteToDos;
        default:
            return state
    }
}


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

