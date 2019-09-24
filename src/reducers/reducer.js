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
                    completed: false
                }
            ]
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

