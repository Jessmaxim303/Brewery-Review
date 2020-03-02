export const getNews = news => ({
  type: 'GET_NEWS',
  news
});

export const addReview = review => ({
  type: 'ADD_REVIEW',
  review
});

export const addFavorite = favorite => ({
	type: 'ADD_FAVORITE',
	favorite
});
