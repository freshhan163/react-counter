import {visibleFilter, todos, getVisibleTodos} from './todo';

import {combineReducers} from 'redux';

export default combineReducers({
    todos,
    // visibleFilter,
    getVisibleTodos
});