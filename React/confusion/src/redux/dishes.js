/// import { DISHES } from '../shared/dishes'
// import { actions } from '../../node_modules/react-redux-form';
import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: []
}, actions) => {
    switch (actions.type) {
        case ActionTypes.ADD_DISHES:
            return { ...state, isLoading: false, errMess: null, dishes: actions.payload };

        case ActionTypes.DISHES_FAILED:
            return { ...state, isLoading: false, errMess: actions.payload, dishes: [] };

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] };

        default:
            return state;
    }
}