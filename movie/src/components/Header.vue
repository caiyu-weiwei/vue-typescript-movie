<template>
  <div class="header">
    <van-nav-bar
      title="首页"
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
  // private title: string = '';
}
</script>

<style lang="sass" scoped>
.van-nav-bar
  color: #fff
  background-color: #EE4000
  .van-nav-bar__title
    color: #fff
</style>