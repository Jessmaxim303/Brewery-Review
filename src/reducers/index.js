import { newsReducer } from './newsReducer.js';
import { reviewReducer } from './reviewReducer.js';
import { favoriteReducer } from './favoriteReducer.js'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	news: newsReducer,
	reviews: reviewReducer,
	favorite: favoriteReducer
})

export default rootReducer;