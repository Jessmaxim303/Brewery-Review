import { newsReducer } from './newsReducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	news: newsReducer
})

export default rootReducer;