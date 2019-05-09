<template>
  <div class="header">
    <van-nav-bar
      :fixed="fixed"
      :title = "title"
      :left-arrow="leftArrow"
      z-index = 99
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';
@Component({
  components: {
    [NavBar.name]: NavBar,
  },
})
export default class Header extends Vue {
  private fixed: boolean = true
  @Prop()
  private title: string
  @Prop()
  private leftArrow: boolean
}
</script>

<style lang="sass" scoped>
.header
 height: 46px
.van-nav-bar
  color: #fff
  background-color: #EE4000
  .van-nav-bar__title
    color: #fff
  .van-nav-bar__left
  .van-icon
    color: #fff
</style>