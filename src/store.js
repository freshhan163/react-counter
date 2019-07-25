import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
// import {createLogger} from 'redux-logger';
import countReducer from './reducers/counter';
import rootReducer from './reducers/root';
import todoReducer from './reducers/index';

const initialState = {
    cnt: 0
};

// const loggerMiddleware = createLogger();

export function configureStore(preloadedState) {
    return createStore(
        todoReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
    );
}
export const store = createStore(rootReducer, initialState);