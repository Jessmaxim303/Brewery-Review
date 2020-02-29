export const getNews = news => ({
  type: 'GET_NEWS',
  news
});

export const localNews = local => ({
  type: 'LOCAL_NEWS',
  local
});