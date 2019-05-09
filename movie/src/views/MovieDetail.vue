<template>
  <div class="movieDetail">
    <Header :title="title" :leftArrow="leftArrow"></Header>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Header from '@/components/Header.vue';
@Component({
  components: {
    Header,
  },
})
export default class MovieDetail extends Vue{
  private title: string = '电影详情'
  @Prop()
  private leftArrow: boolean = true 
}
</script>

<style lang="sass" scoped>

</style>