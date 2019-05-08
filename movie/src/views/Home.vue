<template>
  <div class="home">
    <van-tabs 
      v-model="active"
      title-active-color= '#FF2F31'
    >
      <van-tab title="正在热映">
        <MovieItem></MovieItem>
      </van-tab>
      <van-tab title="即将上映">即将上映</van-tab>
      <van-tab title="Top250">Top250</van-tab>
    </van-tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, Action, namespace } from 'vuex-class';
import { Tab, Tabs } from 'vant';
import MovieItem from '@/components/MovieItem.vue';
const homeModule = namespace('home')
@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    MovieItem,
  }
})
export default class Home extends Vue {
  private active: string = '0'
  private category: string = 'in_theaters';
  private movieListData: any = null;
  @homeModule.Action movieList;

  private mounted() {
    this.getMovieList()
  }

  private getMovieList(): void {
    this.movieList(this.category)
      // .then((res: any) => {
      //   console.log('res', res)
      // })
  }

}
</script>

<style scoped>

</style>