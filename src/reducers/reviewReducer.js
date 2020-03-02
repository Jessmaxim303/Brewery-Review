export const reviewReducer = (state = [], action) => {
  switch (action.type) {
  	case 'ADD_REVIEW':
  	  return [...state, { id: Date.now(), review: action.review}];
    default:
      return state;
  }
}