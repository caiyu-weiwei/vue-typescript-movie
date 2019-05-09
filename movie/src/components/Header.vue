<template>
  <div class="header">
    <van-nav-bar
      
      z-index = 99
      :title = "title"
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
</style>