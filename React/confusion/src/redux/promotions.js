// import { PROMOTIONS } from '../shared/promotions'
import * as ActionTypes from './ActionTypes';

export const Promotions = (state =  { 
    isLoading: true,
    errMess: null,
    promotions: []
} ,actions) => {
    switch(actions.type ) {
        case ActionTypes.ADD_PROMOS:
            return { ...state, isLoading: false, errMess: null, promotions: actions.payload };

        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, errMess: actions.payload, promotions: [] };

        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading: true, errMess: null, promotions: [] };

        default : 
            return state;
    }
}