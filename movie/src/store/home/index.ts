import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/home';
import { Toast } from 'vant';


const state: State = {
  movieList: [],
};

const getters: any =  {
  movieList: (state: State) => state.movieList,
};

const mutations: any = {
};

const actions: any = {
  async movieList(context: {commit: Commit}, category: string) {
    return await getMovieList(category)
      .then((res: any) => res)
      .catch((error: any) => error);
  },
};

export default{
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
