import { newsReducer } from './newsReducer.js';
import { reviewReducer } from './reviewReducer.js'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	news: newsReducer,
	reviews: reviewReducer,
})

export default rootReducer;