import { combineReducers } from 'redux';

import { storeReducer as store } from '../store/reducer';

export const rootReducer = combineReducers({
    store
});