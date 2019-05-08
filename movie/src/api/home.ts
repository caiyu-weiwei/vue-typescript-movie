import fetch from '@/utils/fetch';

export const getMovieList = (category: string) => {
  return fetch({
    url: '/movie/' + category,
    method: 'get',
  });
};
