import { State } from '@/store/interface';
import { Commit } from 'vuex';
import { getMovieList } from '@/api/home';
import { Toast } from 'vant';


const state: State = {
  movieList: [],
};

const getters =  {
  movieList: (state: State) => state.movieList,
};

const mutations = {
};

const actions = {
  async movieList(context: {commit: Commit}, category: string) {
    await getMovieList(category)
      .then((res: any) => res)
      .catch((error: any) => Toast({type: 'fail', message: error}));
  },
};

export default{
  state,
  getters,
  mutations,
  actions,
};
