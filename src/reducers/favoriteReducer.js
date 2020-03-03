export const favoriteReducer = (state = [], action) => {
	console.log(action.favorite)
  switch (action.type) {
  	case 'ADD_FAVORITE':
  	  return [...state, action.favorite];
    default:
      return state;
  }
}