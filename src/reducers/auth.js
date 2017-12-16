import {
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER,
    LOGOUT_USER
} from '../actions/types';

const INITIAL_STATE = {
    error: '',
    loading: false,
    token: null,
};
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...INITIAL_STATE, token: action.payload.data.token };
        case LOGIN_USER_FAIL:
            return { ...state, error: "Authentication Failed.", password: '', loading: false };
        case LOGOUT_USER:
            return { ...state, token: null };
        default:
            return state;
    }
};