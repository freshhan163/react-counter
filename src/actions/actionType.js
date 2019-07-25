export const ON_INCREMENT = 'ON_INCREMENT';
export const ON_DECREMENT = 'ON_DECREMENT';

// function makeActionCreator(type, ...argNames) {
//     return function(...args) {
//         const action = {type};
//         argNames.forEach((arg, index) => {
//             action[argNames[index]] = args[index];
//         });
//         return action;
//     }
// }

// const ADD_TODO = 'ADD_TODO';
// export const addTodo = makeActionCreator(ADD_TODO, 'text');

// export const todos = createReducer([], {
//     [ActionTypes.ADD_TODO]: (state, action) => {
//         const text = action.text;
//         return [...state, text];
//     }
// });

// function createReducer(initialState, handlers) {
//     return (state = initialState, action) => {
//         if (handlers.hasOwnProperty[action.type]) {
//             return handlers[action.type](state, action);
//         } else {
//             return state;
//         }
//     }
// }