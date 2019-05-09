<template>
  <div class="movieItemContainer" @click="enterMovieDetail">
    <div class="movieImg">
      <img :src="movie.images.small">
    </div>
    <div class="movieContent">
      <div class="movieName">{{movie.title}}</div>
      <div class="movieCategory">类别：[{{movie.genres.toString()}}]</div>
      <div class="movieActor">主演：{{movie.casts[0].name}}</div>
      <div class="movieDirector">导演：{{movie.directors[0].name}}</div>
    </div>
    <div class="movieMark">
      {{movie.rating.average}}
      <span>分</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
export default class MovieItem extends Vue{

  private img: any = null
  private errorSrc: string = '/movie/public/img/no_picture.png'
  @Prop()
  private movie: any

  private enterMovieDetail() {
    this.$router.push({
      name: 'movieDetail',
      query: {
        id: this.movie.id
      }
    })
  }
}
  
</script>

<style lang="sass" scoped>
.movieItemContainer
  padding: 10px 0
  border-bottom: 1px solid #eee
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  div
    padding: 0 5px
  .movieImg
    width: 88px
    height: 110px
    img
      width: 100%
      height: 100%
  .movieContent
    flex: 1
    // padding: 0 5px
    div
      padding: 5px 0
    .movieName
      font-size: 16px
    .movieCategory
      font-size: 12px
      color: #666
    .movieActor
      font-size: 12px
      color: #666
    .movieDirector
      font-size: 14px
      color: #999
  .movieMark
    flex: .5
    font-size: 20px
    font-weight: bold
    font-family: "Microsoft New Tai Lue"
    color: #FFB400
    text-align: center
    span
      font-size: 14px
</style>