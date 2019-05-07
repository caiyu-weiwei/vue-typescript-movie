import fetch from '@/utils/fetch';

export const getMovieList = (category: string) => {
  return fetch({
    url: '/api/movie' + category,
    method: 'get',
  });
};
