<template>
  <div class="home">
    <van-tabs 
      v-model="active"
      title-active-color= '#FF2F31'
      sticky
      @click="handleClickTab"
    >
      <van-tab title="正在热映">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        >
          <div class="movieItem" >
            <MovieItem v-for="(subject, index) in movieListData" :key="index" :movie="subject"></MovieItem>
          </div>
        </van-list>
        
        <!-- <div v-else class="spinner" ref="spinner0">
          <van-loading type="spinner" />
        </div> -->
        
      </van-tab>
      <van-tab title="即将上映">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        >
          <div class="movieItem" >
            <MovieItem v-for="(subject, index) in movieListData" :key="index" :movie="subject"></MovieItem>
          </div>
        </van-list>
        <!-- <div v-else class="spinner" ref="spinner1">
          <van-loading type="spinner" />
        </div> -->
      </van-tab>
      <van-tab title="Top250">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          :error.sync="error"
          error-text="请求失败，点击重新加载"
        >
          <div class="movieItem" >
            <MovieItem v-for="(subject, index) in movieListData" :key="index" :movie="subject"></MovieItem>
          </div>
        </van-list>
        <!-- <div v-else class="spinner" ref="spinner2">
          <van-loading type="spinner" />
        </div> -->
      </van-tab>
    </van-tabs>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation, Action, namespace } from 'vuex-class';
import { Tab, Tabs } from 'vant';
import { Loading  } from 'vant';
import { List } from 'vant';
import MovieItem from '@/components/MovieItem.vue';
const homeModule = namespace('home')
@Component({
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Loading.name]: Loading,
    [List.name]: List,
    MovieItem,
  }
})
export default class Home extends Vue {

  private active: string = '0'
  private category: string = 'in_theaters';
  private movieListData: any = [];
  private loading: boolean = false;
  private finished: boolean = false;
  private error: boolean = false;
  @homeModule.Action movieList;

  private mounted() {
    this.getMovieList()
  }

  private getMovieList(): void {
    this.loading = true
    this.finished = false
    this.movieListData = []
    this.error = false
    this.movieList(this.category)
      .then((res: any) => {
        console.log('res', res)
        this.loading = false
        this.movieListData = res.subjects
        this.finished = true
      })
      .catch((err: any) => {
        this.error = true
      })
  }

  private handleClickTab(index) {
    console.log('index', index)
    if (index === 0) this.category = 'in_theaters'
    if (index === 1) this.category = 'coming_soon'
    if (index === 2) this.category = 'top250'
    this.getMovieList()
  }

}
</script>

<style lang="sass" scoped>
.movieItem
  width: 90%
  margin: 0 auto
.spinner
  width: 100%
  height: 100%
  display: flex
  display: -webkit-flex
  align-items: center
  justify-content: center
</style>