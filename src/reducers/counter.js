import * as actionType from '../actions/actionType';

export default function counterApp(state = 0, action) {
    switch(action.type) {
        case actionType.ON_INCREMENT:
            return Object.assign({}, state, {
                cnt: state.cnt + 1
            });
        case actionType.ON_DECREMENT:
            return Object.assign({}, state, {
                cnt: state.cnt - 1
            });
        default:
            return state;
    }
}