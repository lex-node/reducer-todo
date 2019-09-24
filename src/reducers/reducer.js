import React from 'react';

export const reducer = (state, action) => {
    switch (action.type) {
        /*    case 'INCREASE':
              return { count: state.count + 1 }
            case 'DECREASE':
              return { count: state.count - 1 }*/
        default:
            return state
    }
}

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

