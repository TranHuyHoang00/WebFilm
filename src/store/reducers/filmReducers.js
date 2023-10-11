import actionTypes from '../actions/actionTypes';

const initialState = {
    dataSearch: null,
}

const filmReducers = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DATA_FROM_SEARCH_FILM:
            return {
                ...state,
                dataSearch: action.data
            }
        default:
            return state;
    }
}

export default filmReducers;