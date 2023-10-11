import { combineReducers } from 'redux';
import testReducers from './testReducers';
import filmReducers from './filmReducers';
export default combineReducers({
    test: testReducers,
    film: filmReducers,
})