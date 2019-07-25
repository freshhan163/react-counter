export const SHOW_COMPLETED = 'SHOW_COMPLETED';
export const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const SHOW_ALL = 'SHOW_ALL';

let nextTodo = 0;


export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodo++,
    text
});

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});