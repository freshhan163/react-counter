import * as actionType from './actionType';

export function onIncrement() {
    return {
        type: actionType.ON_INCREMENT,
        text: 'add one'
    }
}

export function onDecrement() {
    return {
        type: actionType.ON_DECREMENT,
        text: 'minus one'
    }
}