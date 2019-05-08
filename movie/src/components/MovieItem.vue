<template>
  <div class="movieItemContainer">
    <div class="movieImg">
      <img src="" alt="">
    </div>
    <div class="movieContent">
      <div class="movieName"></div>
      <div class="movieCategory">类别：["剧情", "动作", "犯罪"]</div>
      <div class="movieActor">主演：</div>
      <div class="movieDirector">导演：</div>
    </div>
    <div class="movieMark">
      
      <span>分</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class MovieItem extends Vue{
  @Prop()
  private movie: any
}
  
</script>

<style lang="sass" scoped>
.movieItemContainer
  padding: 10px 0
  border-bottom: 1px solid #eee
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  flex: 1
  .movieImg
    width: 88px
    height: 110px
  .movieContent
    
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
    font-size: 20px
    font-weight: bold
    font-family: "Microsoft New Tai Lue"
    color: #FFB400
    span
      font-size: 14px
</style>