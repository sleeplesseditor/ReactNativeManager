import { 
    EMAIL_CHANGED, 
    PASSWORD_CHANGED 
} from './types';

//Synchronous action creators
export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    };
};