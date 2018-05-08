import {
    NOTIFY
} from '../constants';

const defaultState = {
    type: '',
    body: ''
}

const notifications = (state = defaultState, action) => {
    switch (action.type) {
        case NOTIFY:
            return {
                ...state,
                type: action.payload.type,
                body: action.payload.body 
            }
        default: return state;
    }
};

export default notifications;