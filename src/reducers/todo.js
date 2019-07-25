import {SHOW_COMPLETED, SHOW_ACTIVE, SHOW_ALL, VisibilityFilters} from '../actions/todo';

export const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case SHOW_ALL:
        default:
            return todos;
    }
}

export const visibleFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch(action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export const todos = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        case 'TOGGLE_TODO':
            return state.map(todo =>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return state;
    }
}
