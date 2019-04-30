<template>
  <div class="header">
    <van-nav-bar
      title="首页"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { NavBar } from 'vant'
@Component({
  components: {
    [NavBar.name]: NavBar
  }
})
export default class Header extends Vue{}
</script>

<style lang="scss" scoped>

</style>