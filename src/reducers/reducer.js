// eslint-disable-next-line
import React from 'react';

export const reducer = (state, action) => {
    console.log(state);
    console.log(action);
    console.log(action.payload);
    console.log(action.type);
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    item: action.payload,
                    completed: false,
                    id: new Date()
                }
            ];
        case 'TOGGLE_COMPLETION_STATUS':
            const todos = state.map(toDo => {
                if(toDo.id === action.payload.id) {
                    return {...toDo, completed: true}
                } else {
                    return toDo;
                }
            })
            return todos;
        case 'CLEAR_COMPLETED':
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

